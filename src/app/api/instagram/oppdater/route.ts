// Forlenger gyldigheten til Instagram-nøkkelen. Kjøres av Vercel hver mandag (se vercel.json).
// En nøkkel varer i 60 dager og kan fornyes når den er minst ett døgn gammel og ikke utløpt.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const hemmelighet = process.env.CRON_SECRET;
  if (hemmelighet && request.headers.get("authorization") !== `Bearer ${hemmelighet}`) {
    return new Response("Uautorisert", { status: 401 });
  }

  const nokkel = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!nokkel) {
    return Response.json({ ok: false, grunn: "INSTAGRAM_ACCESS_TOKEN er ikke satt" });
  }

  const url = new URL("https://graph.instagram.com/refresh_access_token");
  url.searchParams.set("grant_type", "ig_refresh_token");
  url.searchParams.set("access_token", nokkel);

  try {
    const svar = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(8000) });
    if (!svar.ok) {
      console.error(`Instagram nektet å fornye nøkkelen, status ${svar.status}`);
      return Response.json({ ok: false, status: svar.status }, { status: 502 });
    }
    const data = (await svar.json()) as { access_token?: string; expires_in?: number };
    const nyNokkel = typeof data.access_token === "string" && data.access_token !== nokkel;
    if (nyNokkel) {
      // Vi kan ikke skrive til miljøvariabler herfra. Da må nøkkelen byttes for hånd i Vercel.
      console.warn("Instagram ga en ny nøkkel. Bytt INSTAGRAM_ACCESS_TOKEN i Vercel.");
    }
    return Response.json({
      ok: true,
      gyldigIDager: data.expires_in ? Math.round(data.expires_in / 86400) : null,
      nyNokkel,
    });
  } catch (feil) {
    console.error("Kunne ikke fornye Instagram-nøkkelen:", feil instanceof Error ? feil.name : "ukjent feil");
    return Response.json({ ok: false }, { status: 502 });
  }
}
