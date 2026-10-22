import type { Metadata } from "next";
import { SideTopp } from "@/components/SideTopp";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gårdsbutikk",
  description:
    "Viltkjøtt, speket vilt, saft, syltetøy, krydderoljer, edikk, urtesalt og honning fra Guse Gård i Kvinesdal.",
  alternates: { canonical: "/gardsbutikk" },
};

const grupper = [
  {
    tittel: "Kjøtt",
    tekst: "Vilt i godt utvalg.",
    varer: ["Viltkjøtt", "Speket vilt"],
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

export default function Gardsbutikk() {
  return (
    <>
      <SideTopp
        overtittel="Gårdsbutikk"
        tittel="Mat fra egen gård"
        ingress="Det meste av råvarene kommer fra gården vår. Av og til setter vi bort produksjon til samarbeidspartnere."
      />

      <section className="seksjon">
        <div className="container">
          <div className="rutenett rutenett--3">
            {grupper.map((g) => (
              <article key={g.tittel} className="fakta fakta--produkt">
                <h2>{g.tittel}</h2>
                {g.tekst ? <p>{g.tekst}</p> : null}
                <ul className="chips chips--mork">
                  {g.varer.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seksjon seksjon--tone">
        <div className="container todeler">
          <div>
            <p className="overtittel">Slik lager vi det</p>
            <h2>Eget slakteri og produksjonskjøkken</h2>
          </div>
          <div className="tekst">
            <p>
              Et nybygd slakteri og produksjonskjøkken på gården gjør at vi kan
              bruke enda mer av våre egne råvarer til foredling.
            </p>
            <p>
              Vi er produsent hos Bondens marked.{" "}
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
      </section>

      <section className="band band--lys">
        <div className="container smal sentrert">
          <h2>Spør oss hva vi har på lager</h2>
          <p className="ingress">
            Ring eller send en e-post, så sier vi hva som er tilgjengelig og
            avtaler henting.
          </p>
          <div className="knapperad knapperad--midt">
            <a href={site.telefon[0].href} className="btn btn--primary">
              Ring {site.telefon[0].vis}
            </a>
            <a href={mailto("Spørsmål om gårdsbutikken")} className="btn btn--ghost">
              Send e-post
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
