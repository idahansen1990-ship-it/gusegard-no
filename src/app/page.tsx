import type { Metadata } from "next";
import Link from "next/link";
import { Landskap } from "@/components/Landskap";
import { DyrKort } from "@/components/DyrKort";
import { dyr } from "@/lib/dyr";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const tall = [
  { stor: "2004", liten: "overtok vi gården" },
  { stor: "7", liten: "slags dyr å møte" },
  { stor: "2", liten: "bevaringsverdige saueraser" },
  { stor: "fra 200 kr", liten: "per person for bursdag" },
];

const aktiviteter = [
  {
    href: "/aktiviteter/bursdag",
    tittel: "Bursdag",
    tekst:
      "Gårdsbursdag eller villmarksbursdag, med mat, drikke og nærkontakt med dyra eller bål og fiskevann.",
  },
  {
    href: "/aktiviteter/besoksgard",
    tittel: "Besøksgård",
    tekst:
      "Kom på besøk, mat og kos med dyra, gå natursti og grill over bål. For familier, barnehager og skoleklasser.",
  },
  {
    href: "/aktiviteter/villmark",
    tittel: "Villmark",
    tekst:
      "Eget skogsområde med flere fiskevann, bålplass, båter og kajakker.",
  },
];

const produkter = [
  "Viltkjøtt",
  "Speket vilt",
  "Saft",
  "Syltetøy",
  "Krydderoljer",
  "Edikk",
  "Urtesalt",
  "Honning",
];

export default function Forside() {
  return (
    <>
      <section className="hero">
        <div className="container hero__tekst">
          <p className="overtittel">Gård i Kvinesdal</p>
          <h1>Dyr, natur og lokalmat på Guse Gård</h1>
          <p className="ingress">
            Hos oss møter du høner, lamaer, sauer og kuer, og kan smake på maten
            fra egen gård. Kom på besøk, hold bursdag eller ta en tur i skogen.
          </p>
          <div className="knapperad">
            <Link href="/aktiviteter" className="btn btn--primary">
              Se aktivitetene
            </Link>
            <Link href="/gardsbutikk" className="btn btn--ghost">
              Gårdsbutikken
            </Link>
          </div>
        </div>
        <Landskap className="hero__landskap" />
      </section>

      <section className="tallrad" aria-label="Guse Gård i tall">
        <ul className="container tallrad__liste">
          {tall.map((t) => (
            <li key={t.liten}>
              <strong>{t.stor}</strong>
              <span>{t.liten}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="seksjon">
        <div className="container todeler">
          <div>
            <p className="overtittel">Velkommen til gården</p>
            <h2>Fjærfe og sau har vært planen siden dag én</h2>
          </div>
          <div className="tekst">
            <p>
              Høns har alltid vært en lidenskap for oss. Vi startet med hanen
              Tarzan og hans fire høner i hagen, i et tettbebygd strøk. Da vi
              overtok Guse Gård i 2004, var vi alle enige om at det var fjærfe og
              sau vi ville drive med.
            </p>
            <p>
              Siden har dyreflokken vokst med ender, gjess, kalkuner, lamaer og
              storfe. Ved siden av gården driver vi også et sagbruk med
              produksjon av materialer og ved.
            </p>
            <p>
              <Link className="tekstlenke" href="/om-garden">
                Les historien vår →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="seksjon seksjon--tone">
        <div className="container">
          <div className="seksjonstopp">
            <div>
              <p className="overtittel">Dyr på gården</p>
              <h2>Bli kjent med dyra</h2>
            </div>
            <Link className="tekstlenke" href="/dyr">
              Se alle dyra →
            </Link>
          </div>
          <div className="rutenett rutenett--4">
            {dyr
              .filter((d) => ["hons", "sau", "lama", "storfe"].includes(d.id))
              .map((d) => (
                <DyrKort key={d.id} dyr={d} kort />
              ))}
          </div>
        </div>
      </section>

      <section className="seksjon">
        <div className="container">
          <div className="seksjonstopp">
            <div>
              <p className="overtittel">Aktiviteter</p>
              <h2>Opplev gården</h2>
            </div>
            <Link className="tekstlenke" href="/aktiviteter">
              Alle aktiviteter →
            </Link>
          </div>
          <div className="rutenett rutenett--3">
            {aktiviteter.map((a) => (
              <Link key={a.href} href={a.href} className="aktivitet">
                <h3>{a.tittel}</h3>
                <p>{a.tekst}</p>
                <span className="aktivitet__pil" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container todeler">
          <div>
            <p className="overtittel overtittel--lys">Gårdsbutikken</p>
            <h2>Mat fra egen gård</h2>
            <p className="band__tekst">
              Det meste av råvarene kommer fra gården vår, og med eget slakteri
              og produksjonskjøkken kan vi bruke enda mer av dem selv.
            </p>
            <Link href="/gardsbutikk" className="btn btn--honey">
              Se hva vi lager
            </Link>
          </div>
          <ul className="chips" aria-label="Produkter">
            {produkter.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="seksjon">
        <div className="container smal sentrert">
          <p className="overtittel">Ta kontakt</p>
          <h2>Lyst til å komme på besøk?</h2>
          <p className="ingress">
            Bursdag, gruppebesøk og turer avtaler vi på forhånd. Ring eller send
            en e-post, så finner vi en dag som passer.
          </p>
          <div className="knapperad knapperad--midt">
            <a href={site.telefon[0].href} className="btn btn--primary">
              Ring {site.telefon[0].vis}
            </a>
            <a href={`mailto:${site.epost}`} className="btn btn--ghost">
              {site.epost}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
