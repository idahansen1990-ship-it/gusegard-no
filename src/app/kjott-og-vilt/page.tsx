import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Egenart } from "@/components/Egenart";
import { SideTopp } from "@/components/SideTopp";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kjøtt og vilt",
  description:
    "Viltkjøtt og speket vilt fra Guse Gård i Kvinesdal. Se utvalget og bestill på telefon eller e-post.",
  alternates: { canonical: "/kjott-og-vilt" },
};

const bestillingsmal = `Hei!

Jeg vil gjerne bestille:
- Produkt:
- Mengde:

Navn:
Telefon:
Ønsket tidspunkt:
`;

const produkter = [
  {
    merke: "Fra Fedabua",
    tittel: "Viltkjøtt",
    tekst: "Viltkjøtt i godt utvalg, fra Guse Gård.",
  },
  {
    merke: "Fra Fedabua",
    tittel: "Speket vilt",
    tekst: "Speket vilt i godt utvalg, fra Guse Gård.",
  },
];

const steg = [
  {
    tittel: "Ta kontakt",
    tekst: "Ring eller send en e-post og si hva du ønsker og hvor mye.",
  },
  {
    tittel: "Vi svarer",
    tekst: "Vi sier hva vi har, hva det koster, og når det kan være klart.",
  },
  {
    tittel: "Du får varene",
    tekst: "Vi avtaler når og hvordan du får dem, helst fra Fedabua på gården.",
  },
];

export default function KjottOgVilt() {
  return (
    <>
      <SideTopp
        brodsmule={{ href: "/gardsbutikk", tekst: "Fedabua" }}
        overtittel="Kjøtt og vilt"
        tittel="Kjøtt og vilt fra Guse Gård"
        ingress="Se hva vi tilbyr, og ta kontakt for å bestille. Vi svarer på telefon og e-post."
        handling={
          <>
            <a
              href={mailto("Bestilling: kjøtt og vilt", bestillingsmal)}
              className="btn btn--honey"
            >
              Bestill på e-post
            </a>
            <a href={site.telefon[0].href} className="btn btn--lys">
              Ring {site.telefon[0].vis}
            </a>
          </>
        }
      />

      <section className="seksjon">
        <div className="container todeler todeler--topp">
          <figure className="bilde">
            <Image
              src="/bilder/elgkalv-kjottdeig.jpg"
              alt="Vakuumpakket elgkalv-kjøttdeig med Guse Gård-etikett, 500 gram"
              fill
              sizes="(min-width: 820px) 480px, 100vw"
              style={{ objectFit: "cover", objectPosition: "50% 45%" }}
            />
            <figcaption>
              Vakuumpakket elgkjøtt, merket med Guse Gård, navn og vekt.
            </figcaption>
          </figure>
          <div>
            <p className="overtittel">Utvalget</p>
            <h2>Dette tilbyr vi</h2>
            <div className="produktliste">
              {produkter.map((p) => (
                <article key={p.tittel} className="produkt">
                  <span className="produkt__merke">{p.merke}</span>
                  <h3>{p.tittel}</h3>
                  <p>{p.tekst}</p>
                  <a
                    className="tekstlenke"
                    href={mailto(`Bestilling: ${p.tittel.toLowerCase()}`, bestillingsmal)}
                  >
                    Bestill {p.tittel.toLowerCase()} →
                  </a>
                </article>
              ))}
              <article className="produkt produkt--annet">
                <span className="produkt__merke">Mer fra Fedabua</span>
                <h3>Saft, syltetøy og honning</h3>
                <p>Krydderoljer, edikk og urtesalt finner du også i gårdsbutikken.</p>
                <Link className="tekstlenke" href="/gardsbutikk">
                  Se hele utvalget →
                </Link>
              </article>
            </div>
            <p className="notis">
              Utvalg og priser avtaler vi når du tar kontakt. Spør oss hva vi har
              på lager akkurat nå.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <div className="seksjonstopp">
            <div>
              <p className="overtittel overtittel--lys">Slik bestiller du</p>
              <h2>Bestilling i tre steg</h2>
            </div>
          </div>
          <ol className="steg">
            {steg.map((s, i) => (
              <li key={s.tittel}>
                <span className="steg__nr" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{s.tittel}</h3>
                  <p>{s.tekst}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="knapperad">
            <a
              href={mailto("Bestilling: kjøtt og vilt", bestillingsmal)}
              className="btn btn--honey"
            >
              Bestill på e-post
            </a>
            {site.telefon.map((t) => (
              <a key={t.href} href={t.href} className="btn btn--lys">
                Ring {t.vis}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Egenart overtittel="Hvorfor Guse Gård" tittel="Det som gjør kjøttet og viltet spesielt" />
    </>
  );
}
