import type { Metadata } from "next";
import Link from "next/link";
import { Landskap } from "@/components/Landskap";
import { DyrKort } from "@/components/DyrKort";
import { Egenart } from "@/components/Egenart";
import { dyr } from "@/lib/dyr";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const tall = [
  { stor: "2004", liten: "overtok vi gården" },
  { stor: String(dyr.length), liten: "slags dyr å møte" },
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
            Hos oss møter du høner, lamaer, sauer og kuer, og kan handle lokalmat
            i gårdsbutikken Fedabua. Kom på besøk, hold bursdag, bo på gården
            eller ta en tur i skogen.
          </p>
          <div className="knapperad">
            <Link href="/gardsbutikk" className="btn btn--primary">
              Besøk Fedabua
            </Link>
            <Link href="/aktiviteter" className="btn btn--ghost">
              Se aktivitetene
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
              storfe, og i dag lager vi også mat av egne råvarer. Ved siden av
              gården driver vi et sagbruk med produksjon av materialer og ved.
            </p>
            <p>
              <Link className="tekstlenke" href="/om-garden">
                Les historien vår →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container todeler">
          <div>
            <p className="overtittel overtittel--lys">Gårdsbutikken</p>
            <h2>Fedabua: mat fra egen gård</h2>
            <p className="band__tekst">
              Det meste av råvarene kommer fra gården vår, og med eget slakteri
              og produksjonskjøkken kan vi bruke enda mer av dem selv. Kom innom
              Fedabua, eller bestill kjøtt og vilt på telefon eller e-post.
            </p>
            <div className="knapperad">
              <Link href="/gardsbutikk" className="btn btn--honey">
                Besøk Fedabua
              </Link>
              <Link href="/kjott-og-vilt" className="btn btn--lys">
                Bestill kjøtt og vilt
              </Link>
            </div>
          </div>
          <ul className="chips" aria-label="Produkter">
            {produkter.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <Egenart tone />

      <section className="seksjon">
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

      <section className="seksjon seksjon--tone">
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

      <section className="seksjon">
        <div className="container todeler">
          <div>
            <p className="overtittel">Overnatting</p>
            <h2>Bo på gården</h2>
          </div>
          <div className="tekst">
            <p>
              Vi leier ut en hytte på Guse Gård, med to soverom og plass til
              fem. Kombiner oppholdet med et besøk hos dyra, en tur i skogen og
              mat fra Fedabua.
            </p>
            <div className="knapperad">
              <Link href="/overnatting" className="btn btn--primary">
                Se hytta og bestill
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="seksjon seksjon--tone">
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
          <p className="hurtiglenker hurtiglenker--midt">
            <span>Følg oss også på</span>
            <a
              className="tekstlenke"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="tekstlenke"
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
