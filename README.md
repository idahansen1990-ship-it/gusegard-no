# Guse Gård (gusegard.no)

Ny nettside for Guse Gård i Kvinesdal. Next.js 16 (App Router), helt statisk: ingen database, ingen innlogging og ingen eksterne tjenester. Skrifter (Fraunces og Inter) følger med i pakken, så siden henter ingenting fra Google.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # bygger alle sider statisk
npm run lint
npm run typecheck
```

## Sider

| Adresse | Innhold |
|---|---|
| `/` | Forside |
| `/om-garden` | Historien om Guse Gård (tidslinje), det som gjør produktene spesielle, og sagbruket |
| `/dyr` | Dyr på gården |
| `/aktiviteter` | Oversikt over aktivitetene |
| `/aktiviteter/bursdag` | Gårds- og villmarksbursdag, pris |
| `/aktiviteter/besoksgard` | Besøksgård |
| `/aktiviteter/villmark` | Villmark |
| `/overnatting` | Hytta som leies ut, med bestillingsknapper til Booking.com og Airbnb |
| `/gardsbutikk` | Fedabua, gårdsbutikken: utvalg, hvordan du finner den, Bondens marked |
| `/kjott-og-vilt` | Kjøtt og vilt: utvalg og bestilling på telefon eller e-post |
| `/kontakt` | Telefon, e-post, adresse |

De gamle adressene (`/Guse_Gard/Hovedside.html`, `/Guse_Gard/Besksgard.html` osv.) sendes permanent videre til de nye, se `next.config.ts`. Da virker gamle lenker fra Google, Facebook og andre sider.

Siden har også `sitemap.xml`, `robots.txt`, delingsbilde (Open Graph), favicon og strukturerte data (`LocalBusiness`).

## Endre innhold

- **Telefon, e-post, adresse, lenker og meny:** `src/lib/site.ts`. Endres de her, endres de overalt.
- **Dyra:** `src/lib/dyr.ts`.
- **Øvrig tekst:** i `page.tsx` for hver side under `src/app/`.
- **Farger og typografi:** variablene øverst i `src/app/globals.css`.

### Bilder

Siden fungerer uten foto: dyra har egne tegninger. For å bruke ekte bilder av dyra, legg filene i `public/bilder/` og sett `bilde` på dyret i `src/lib/dyr.ts`:

```ts
{ id: "lama", navn: "Lama", tekst: "…", bilde: "/bilder/lama.jpg" }
```

Bildet vises da i stedet for tegningen (4:3, beskjæres automatisk). Bilder bør være under ca. 300 kB hver.

## Sette opp på Vercel

1. Opprett et nytt Vercel-prosjekt fra repoet. Rotmappen skal være `./` (standard), og framework blir Next.js automatisk.
2. Legg til domenet `gusegard.no` under Domains.
3. Siden trenger ingen miljøvariabler.

## Sjekk før lansering

Innholdet er hentet fra teksten på dagens side og fra offentlige profiler (Bondens marked, Norske Gårder), siden dagens side ikke kunne leses direkte. Gå gjennom:

- **Adresse.** Står som «Åsevegen 896, 4480 Kvinesdal» (fra Bondens marked). Andre oppføringer sier «FV551 Guse». Rett opp i `src/lib/site.ts` om det ikke stemmer.
- **Tall som kan være utdaterte.** Teksten om dyra stammer fra 2011: antall sauer (ca. 50), lamaflokken (to hopper og en hingst) og storfe (to limousin). Oppdater i `src/lib/dyr.ts` og `src/app/om-garden/page.tsx`.
- **Besøksgård og Villmark.** Lagd av teksten om bursdag og av opplysninger om at gården tar imot grupper etter avtale. Bytt inn originalteksten fra dagens sider om den er mer detaljert (priser, åpningstider, bestilling).
- **Overnatting.** Siden bygger på oppføringene på Booking.com og Airbnb (to soverom, plass til fem). Sjekk at hytta fortsatt leies ut og at lenkene i `src/lib/site.ts` stemmer. Vil dere ikke ha siden, fjern `src/app/overnatting/`, menypunktet i `src/lib/site.ts` og linjen i `src/app/sitemap.ts`.
- **Fedabua og kjøtt og vilt.** Produktlisten er fra Bondens marked. Legg til åpningstider, priser og eventuelt flere produkter (`src/app/gardsbutikk/page.tsx` og `src/app/kjott-og-vilt/page.tsx`). Bestilling går til gårdens vanlige telefon og e-post (`src/lib/site.ts`). Skal bestillinger til en bestemt person, endre det der.
- **Historien.** «Familiegård» og kapittelet «I dag» (slakteri, produksjonskjøkken og Fedabua) bygger på offentlige profiler, ikke på den gamle siden. Rett det i `src/app/om-garden/page.tsx` om det ikke stemmer.
- **Bilder.** Dagens side har ca. 38 bilder av dyra som ikke er med her.
