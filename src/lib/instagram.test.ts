import assert from "node:assert/strict";
import { afterEach, beforeEach, test } from "node:test";
import { hentInstagramInnlegg, tilInnlegg } from "./instagram.ts";

const bilde = (n: number) => `https://scontent-osl1-1.cdninstagram.com/v/t51/${n}.jpg`;
const lenke = (n: number) => `https://www.instagram.com/p/AAA${n}/`;

const svar = {
  data: [
    { id: "1", media_type: "IMAGE", media_url: bilde(1), permalink: lenke(1), caption: "Nye lam   på gården\n\n🐑" },
    { id: "2", media_type: "VIDEO", media_url: "https://video.example/ikke-brukt.mp4", thumbnail_url: bilde(2), permalink: lenke(2) },
    { id: "3", media_type: "CAROUSEL_ALBUM", media_url: bilde(3), permalink: lenke(3) },
    { id: "4", media_type: "IMAGE", media_url: "https://ond.example/hacker.jpg", permalink: lenke(4) },
    { id: "5", media_type: "IMAGE", media_url: bilde(5), permalink: "https://ond.example/p/5/" },
    { id: "6", media_type: "IMAGE", media_url: "http://scontent.cdninstagram.com/uten-https.jpg", permalink: lenke(6) },
    { id: "7", media_type: "IMAGE", permalink: lenke(7) },
    { id: "8", media_type: "IMAGE", media_url: bilde(8), permalink: lenke(8), caption: "x".repeat(500) },
  ],
};

test("tilInnlegg: tar med bilde, video (forhåndsbilde) og album", () => {
  const innlegg = tilInnlegg(svar);
  assert.deepEqual(innlegg.map((i) => i.id), ["1", "2", "3", "8"]);
  assert.equal(innlegg[1].bilde, bilde(2), "video skal bruke forhåndsbildet");
});

test("tilInnlegg: kaster alt med ukjente verter, uten https eller uten bilde", () => {
  const ider = tilInnlegg(svar).map((i) => i.id);
  for (const forbudt of ["4", "5", "6", "7"]) assert.ok(!ider.includes(forbudt), `innlegg ${forbudt} skulle vært kastet`);
});

test("tilInnlegg: rydder og korter ned teksten", () => {
  const innlegg = tilInnlegg(svar);
  assert.equal(innlegg[0].tekst, "Nye lam på gården 🐑");
  assert.equal(innlegg[1].tekst, "");
  assert.equal(innlegg[3].tekst.length, 140);
});

test("tilInnlegg: begrenser antallet", () => {
  assert.equal(tilInnlegg(svar, 2).length, 2);
});

test("tilInnlegg: tåler rare svar", () => {
  for (const rart of [null, undefined, 42, "tekst", {}, { data: "nei" }, { data: [null, 1, "a"] }]) {
    assert.deepEqual(tilInnlegg(rart), []);
  }
});

const opprinneligFetch = globalThis.fetch;
const opprinneligNokkel = process.env.INSTAGRAM_ACCESS_TOKEN;
let kall: string[] = [];

beforeEach(() => {
  kall = [];
  process.env.INSTAGRAM_ACCESS_TOKEN = "hemmelig-nokkel";
  console.error = () => {}; // testene forventer feilmeldinger
});
afterEach(() => {
  globalThis.fetch = opprinneligFetch;
  if (opprinneligNokkel === undefined) delete process.env.INSTAGRAM_ACCESS_TOKEN;
  else process.env.INSTAGRAM_ACCESS_TOKEN = opprinneligNokkel;
});

const lagFetch = (lag: () => Response | Promise<Response>) =>
  (async (url: string | URL | Request) => {
    kall.push(String(url));
    return lag();
  }) as typeof fetch;

test("hentInstagramInnlegg: uten nøkkel hentes ingenting", async () => {
  delete process.env.INSTAGRAM_ACCESS_TOKEN;
  globalThis.fetch = lagFetch(() => Response.json(svar));
  assert.deepEqual(await hentInstagramInnlegg(), []);
  assert.equal(kall.length, 0, "skal ikke kontakte Instagram uten nøkkel");
});

test("hentInstagramInnlegg: spør riktig sted og gir innlegg", async () => {
  globalThis.fetch = lagFetch(() => Response.json(svar));
  const innlegg = await hentInstagramInnlegg(3);
  assert.equal(innlegg.length, 3);
  const url = new URL(kall[0]);
  assert.equal(url.origin + url.pathname, "https://graph.instagram.com/me/media");
  assert.equal(url.searchParams.get("access_token"), "hemmelig-nokkel");
  assert.match(url.searchParams.get("fields") ?? "", /permalink/);
});

// Henter først et vellykket svar, slik at «siste gode» er kjent uavhengig av rekkefølgen på testene.
async function medSisteGode() {
  globalThis.fetch = lagFetch(() => Response.json(svar));
  assert.equal((await hentInstagramInnlegg()).length, 4);
}

test("hentInstagramInnlegg: feilkode gir siste gode svar, og nøkkelen havner ikke i loggen", async () => {
  await medSisteGode();
  const logg: string[] = [];
  console.error = (...a: unknown[]) => logg.push(a.join(" "));
  globalThis.fetch = lagFetch(() => new Response("{}", { status: 400 }));
  const innlegg = await hentInstagramInnlegg();
  assert.equal(innlegg.length, 4, "skal falle tilbake på de forrige innleggene");
  assert.ok(logg.length > 0);
  assert.ok(!logg.join("\n").includes("hemmelig-nokkel"), "nøkkelen skal aldri logges");
});

test("hentInstagramInnlegg: nettverksfeil og ugyldig svar gir ikke krasj", async () => {
  await medSisteGode();
  const logg: string[] = [];
  console.error = (...a: unknown[]) => logg.push(a.join(" "));
  globalThis.fetch = lagFetch(() => { throw new TypeError("fetch failed"); });
  assert.equal((await hentInstagramInnlegg()).length, 4);
  globalThis.fetch = lagFetch(() => new Response("ikke json", { status: 200 }));
  assert.equal((await hentInstagramInnlegg()).length, 4);
  assert.ok(!logg.join("\n").includes("hemmelig-nokkel"));
});
