// Henter de nyeste innleggene fra Instagram-kontoen via Instagrams offisielle API
// (Instagram API with Instagram Login). Kjører bare på serveren, så nøkkelen
// havner aldri i nettleseren og besøkende laster ingenting direkte fra Instagram.

export type InstagramInnlegg = {
  id: string;
  /** Bildet (for video: forhåndsbildet). */
  bilde: string;
  /** Lenke til innlegget på Instagram. */
  lenke: string;
  /** Teksten i innlegget, kortet ned. Tom hvis innlegget ikke har tekst. */
  tekst: string;
};

const API = "https://graph.instagram.com";
const BILDEVERTER = /(^|\.)cdninstagram\.com$|(^|\.)fbcdn\.net$/;

function gyldigUrl(verdi: unknown, vert: RegExp): URL | null {
  if (typeof verdi !== "string") return null;
  try {
    const url = new URL(verdi);
    return url.protocol === "https:" && vert.test(url.hostname) ? url : null;
  } catch {
    return null;
  }
}

/** Gjør svaret fra API-et om til innlegg vi tør å vise, og kaster alt som ser feil ut. */
export function tilInnlegg(data: unknown, maks = 6): InstagramInnlegg[] {
  const liste = (data as { data?: unknown } | null)?.data;
  if (!Array.isArray(liste)) return [];

  const innlegg: InstagramInnlegg[] = [];
  for (const rad of liste) {
    if (innlegg.length >= maks) break;
    const r = (rad ?? {}) as Record<string, unknown>;
    const bilde = gyldigUrl(
      r.media_type === "VIDEO" ? r.thumbnail_url : r.media_url,
      BILDEVERTER,
    );
    const lenke = gyldigUrl(r.permalink, /(^|\.)instagram\.com$/);
    if (!bilde || !lenke || typeof r.id !== "string") continue;
    innlegg.push({
      id: r.id,
      bilde: bilde.toString(),
      lenke: lenke.toString(),
      tekst:
        typeof r.caption === "string"
          ? r.caption.replace(/\s+/g, " ").trim().slice(0, 140)
          : "",
    });
  }
  return innlegg;
}

// Det siste som gikk bra. Brukes hvis Instagram svarer med feil en gang, så feltet ikke blir borte.
let sisteGode: InstagramInnlegg[] = [];

export async function hentInstagramInnlegg(maks = 6): Promise<InstagramInnlegg[]> {
  const nokkel = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!nokkel) return [];

  const url = new URL(`${API}/me/media`);
  url.searchParams.set("fields", "id,caption,media_type,media_url,thumbnail_url,permalink");
  url.searchParams.set("limit", String(maks + 6));
  url.searchParams.set("access_token", nokkel);

  try {
    const svar = await fetch(url, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!svar.ok) {
      // Logger bare statuskoden, aldri adressen, siden den inneholder nøkkelen.
      console.error(`Instagram svarte med status ${svar.status}`);
      return sisteGode;
    }
    const innlegg = tilInnlegg(await svar.json(), maks);
    if (innlegg.length > 0) sisteGode = innlegg;
    return innlegg.length > 0 ? innlegg : sisteGode;
  } catch (feil) {
    console.error("Kunne ikke hente Instagram-innlegg:", feil instanceof Error ? feil.name : "ukjent feil");
    return sisteGode;
  }
}
