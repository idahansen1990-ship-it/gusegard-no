import type { Metadata } from "next";
import Link from "next/link";
import { Egenart } from "@/components/Egenart";
import { SideTopp } from "@/components/SideTopp";
import { Strukturert } from "@/components/Strukturert";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fedabua, gårdsbutikken på Guse Gård",
  description:
    "Fedabua er gårdsbutikken på Guse Gård i Kvinesdal: viltkjøtt, speket vilt, saft, syltetøy, krydderoljer, edikk, urtesalt og honning fra egen gård.",
  alternates: { canonical: "/gardsbutikk" },
};

const grupper = [
  {
    tittel: "Kjøtt",
    tekst: "Vilt i godt utvalg.",
    varer: ["Viltkjøtt", "Speket vilt"],
    lenke: { href: "/kjott-og-vilt", tekst: "Se utvalget og bestill →" },
  },
  {
    tittel: "På glass og flaske",
    varer: ["Saft", "Syltetøy", "Krydderoljer", "Edikk"],
  },
  {
    tittel: "Fra naturen",
    varer: ["Urtesalt", "Honning"],
  },
];

const butikkData = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.butikk,
  description:
    "Fedabua er gårdsbutikken på Guse Gård i Kvinesdal, med viltkjøtt, speket vilt, saft, syltetøy, krydderoljer, edikk, urtesalt og honning.",
  url: `${site.url}/gardsbutikk`,
  telephone: "+4799361065",
  email: site.epost,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.adresse.gate,
    postalCode: site.adresse.postnummer,
    addressLocality: site.adresse.sted,
    addressCountry: "NO",
  },
  parentOrganization: { "@type": "Organization", name: site.navn, url: site.url },
  sameAs: [site.bondensMarked],
};

export default function Gardsbutikk() {
  return (
    <>
      <Strukturert data={butikkData} />
      <SideTopp
        overtittel="Gårdsbutikken på Guse Gård"
        tittel="Fedabua"
        ingress="Mat fra egen gård: vilt, saft, syltetøy, honning og mer. Kom innom, eller ring og bestill."
        handling={
          <>
            <a href={site.telefon[0].href} className="btn btn--honey">
              Ring {site.telefon[0].vis}
            </a>
            <a
              href={site.kart}
              className="btn btn--lys"
              target="_blank"
              rel="noopener noreferrer"
            >
              Finn oss i kart
            </a>
          </>
        }
      />

      <section className="seksjon">
        <div className="container">
          <div className="seksjonstopp">
            <div>
              <p className="overtittel">Hva du finner</p>
              <h2>Utvalget i Fedabua</h2>
            </div>
          </div>
          <div className="rutenett rutenett--3">
            {grupper.map((g) => (
              <article key={g.tittel} className="fakta fakta--produkt">
                <h3>{g.tittel}</h3>
                {g.tekst ? <p>{g.tekst}</p> : null}
                <ul className="chips chips--mork">
                  {g.varer.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
                {g.lenke ? (
                  <p>
                    <Link className="tekstlenke" href={g.lenke.href}>
                      {g.lenke.tekst}
                    </Link>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
          <p className="notis">
            Spør oss hva vi har på lager akkurat nå. Utvalget kan variere.
          </p>
        </div>
      </section>

      <Egenart tone />

      <section className="seksjon">
        <div className="container todeler todeler--topp">
          <div>
            <p className="overtittel">Slik handler du</p>
            <h2>Kom innom Fedabua</h2>
            <div className="tekst">
              <p>
                Fedabua ligger på Guse Gård i Kvinesdal. Ring eller send en
                e-post før du kommer, så avtaler vi tidspunkt og sørger for at
                det du vil ha er på lager.
              </p>
              <p>
                Vi er også produsent hos Bondens marked.{" "}
                <a
                  className="tekstlenke"
                  href={site.bondensMarked}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Se profilen vår →
                </a>
              </p>
            </div>
          </div>
          <div className="fakta">
            <h3>Fedabua, Guse Gård</h3>
            <address className="kontaktliste">
              {site.adresse.gate}
              <br />
              {site.adresse.postnummer} {site.adresse.sted}
            </address>
            <ul className="kontaktliste">
              {site.telefon.map((t) => (
                <li key={t.href}>
                  <a href={t.href}>{t.vis}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.epost}`}>{site.epost}</a>
              </li>
            </ul>
            <div className="knapperad">
              <a
                href={site.kart}
                className="btn btn--primary btn--liten"
                target="_blank"
                rel="noopener noreferrer"
              >
                Åpne i kart
              </a>
              <a
                href={mailto("Spørsmål om Fedabua")}
                className="btn btn--ghost btn--liten"
              >
                Send e-post
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
