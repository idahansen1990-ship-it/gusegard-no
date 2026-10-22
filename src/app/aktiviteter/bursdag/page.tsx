import type { Metadata } from "next";
import { SideTopp } from "@/components/SideTopp";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bursdag på gården",
  description:
    "Gårdsbursdag eller villmarksbursdag på Guse Gård i Kvinesdal. Fra 200 kr per person, inkludert mat og drikke i ca. to timer.",
  alternates: { canonical: "/aktiviteter/bursdag" },
};

export default function Bursdag() {
  return (
    <>
      <SideTopp
        brodsmule={{ href: "/aktiviteter", tekst: "Alle aktiviteter" }}
        overtittel="Bursdagsfeiring"
        tittel="En annerledes bursdag"
        ingress="Enten det skal være gårdsbursdag eller villmarksbursdag, tilrettelegger vi ut fra deres ønsker."
      />

      <section className="seksjon">
        <div className="container todeler todeler--topp">
          <article className="panel">
            <p className="overtittel">Alternativ 1</p>
            <h2>Gårdsbursdag</h2>
            <p>
              På gården bor det mange dyr som er glade for besøk. Gårdsbursdag er
              midt i blinken for alle barn som er glade i dyr. Mange foreldre
              ønsker å gi barna sine gode opplevelser med dyr og natur, og det er
              nettopp dette vi arbeider for.
            </p>
            <p>
              Du møter kuer, lamaer, sauer, høner, kyllinger, ender, gjess,
              kalkuner, katter og hunder.
            </p>
            <ul className="hakeliste">
              <li>Kose med og mate dyra</li>
              <li>Natursti, eventuelt med guide</li>
              <li>Grilling og bålkos</li>
              <li>Sesongbaserte aktiviteter</li>
            </ul>
            <p>Stort uteareal stilles til disposisjon, og nærkontakt med dyra er en selvfølge.</p>
          </article>

          <article className="panel">
            <p className="overtittel">Alternativ 2</p>
            <h2>Villmarksbursdag</h2>
            <p>
              Vi har et stort skogsområde som er tilrettelagt for
              villmarksaktiviteter.
            </p>
            <ul className="hakeliste">
              <li>Flere fiskevann</li>
              <li>Bålplass</li>
              <li>Båter og kajakker</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="band">
        <div className="container todeler">
          <div>
            <p className="overtittel overtittel--lys">Pris</p>
            <h2>Fra 200 kr per person</h2>
          </div>
          <div className="band__tekst">
            <p>
              Prisen inkluderer en bursdagsfeiring på ca. to timer, og vi ordner
              noe å spise og drikke. Kake og godteri kan dere ta med hvis dere
              vil.
            </p>
            <div className="knapperad">
              <a href={mailto("Bursdag på Guse Gård")} className="btn btn--honey">
                Send forespørsel
              </a>
              <a href={site.telefon[0].href} className="btn btn--lys">
                Ring {site.telefon[0].vis}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
