import type { Metadata } from "next";
import Link from "next/link";
import { SideTopp } from "@/components/SideTopp";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Besøksgård",
  description:
    "Besøk Guse Gård i Kvinesdal: møt kuer, lamaer, sauer og fjærfe, gå natursti og grill over bål. Etter avtale.",
  alternates: { canonical: "/aktiviteter/besoksgard" },
};

export default function Besoksgard() {
  return (
    <>
      <SideTopp
        brodsmule={{ href: "/aktiviteter", tekst: "Alle aktiviteter" }}
        overtittel="Besøksgård"
        tittel="Velkommen til Guse Gård"
        ingress="Vi tar imot grupper og enkeltpersoner etter avtale, blant annet familier, barnehager og skoleklasser."
      />

      <section className="seksjon">
        <div className="container todeler todeler--topp">
          <div>
            <p className="overtittel">På besøk</p>
            <h2>Nærkontakt med dyra</h2>
            <div className="tekst">
              <p>
                På gården bor det mange dyr som er glade for besøk. Du møter
                kuer, lamaer, sauer, høner, kyllinger, ender, gjess, kalkuner,
                katter og hunder.
              </p>
              <p>
                <Link className="tekstlenke" href="/dyr">
                  Se hvem som bor her →
                </Link>
              </p>
            </div>
          </div>
          <ul className="hakeliste hakeliste--stor">
            <li>Kose med og mate dyra</li>
            <li>Natursti, eventuelt med guide</li>
            <li>Grilling og bålkos</li>
            <li>Sesongbaserte aktiviteter</li>
            <li>Stort uteareal</li>
          </ul>
        </div>
      </section>

      <section className="band band--lys">
        <div className="container smal sentrert">
          <h2>Avtal et besøk</h2>
          <p className="ingress">
            Ring eller send en e-post, så finner vi en dag og et opplegg som
            passer for dere.
          </p>
          <div className="knapperad knapperad--midt">
            <a href={site.telefon[0].href} className="btn btn--primary">
              Ring {site.telefon[0].vis}
            </a>
            <a href={mailto("Besøk på Guse Gård")} className="btn btn--ghost">
              Send e-post
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
