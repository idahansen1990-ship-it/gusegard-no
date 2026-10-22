import type { Metadata } from "next";
import Link from "next/link";
import { Egenart } from "@/components/Egenart";
import { SideTopp } from "@/components/SideTopp";
import { mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Historien om Guse Gård",
  description:
    "Historien om Guse Gård i Kvinesdal: fra hanen Tarzan og fire høner til høner, sau, lamaer og storfe, og til gårdsbutikken Fedabua.",
  alternates: { canonical: "/om-garden" },
};

const historie = [
  {
    ar: "2004",
    tittel: "Vi overtok gården",
    tekst:
      "Vi hadde startet med hanen Tarzan og hans fire høner i hagen, i et tettbebygd strøk. Da vi overtok gården var vi alle enige om at det var fjærfe og sau vi ville drive med. De første dyra som flyttet inn i fjøset var noen forskjellige raser med høns, noen kalkuner, en påfugl og fem sauer.",
  },
  {
    ar: "Etter hvert",
    tittel: "Fjærfeholdet vokser",
    tekst:
      "Vi har vært i stadig utvikling med fjærfeholdet. Nye raser med høns har kommet, og andre har måttet vike. Senere kom også fasaner, vaktler, ender og gjess.",
  },
  {
    ar: "2008",
    tittel: "De første lamaene",
    tekst:
      "De to første lamaene reiste vi helt til Haukeli i Telemark for å hente. Året etter kom to nye hopper. Flokken består hovedsakelig av to hopper og en hingst.",
  },
  {
    ar: "2010",
    tittel: "Sauebesetningen dobles",
    tekst:
      "Etter å ha drevet i det små siden 2004 utvidet vi besetningen fra rundt 20 til ca. 50 vinterfôrede sauer. Vi har tre norske raser: norsk hvit sau, blæset sau og gammel norsk spelsau. De to siste er bevaringsverdige raser i Norge.",
  },
  {
    ar: "2011",
    tittel: "Storfe på gården",
    tekst:
      "Siste ankomst var to storfe av rasen limousin, som kom høsten 2011.",
  },
  {
    ar: "I dag",
    tittel: "Fra dyr til mat: Fedabua",
    tekst:
      "Et nybygd slakteri og produksjonskjøkken på gården gjør at vi kan bruke enda mer av våre egne råvarer til foredling. Det vi lager selger vi i gårdsbutikken Fedabua: viltkjøtt, speket vilt, saft, syltetøy, krydderoljer, edikk, urtesalt og honning.",
  },
];

export default function OmGarden() {
  return (
    <>
      <SideTopp
        overtittel="Historien om Guse Gård"
        tittel="Fra hanen Tarzan til hele flokken"
        ingress="Guse Gård er en familiegård i Kvinesdal. Vår hovedproduksjon er fjærfe og sau, og vi legger vekt på at dyra skal ha det godt."
      />

      <section className="seksjon">
        <div className="container smal">
          <ol className="tidslinje">
            {historie.map((h) => (
              <li key={h.ar} className="tidslinje__punkt">
                <p className="tidslinje__ar">{h.ar}</p>
                <div>
                  <h2>{h.tittel}</h2>
                  <p>{h.tekst}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="hurtiglenker">
            <Link className="tekstlenke" href="/dyr">
              Møt dyra på gården →
            </Link>
            <Link className="tekstlenke" href="/gardsbutikk">
              Besøk Fedabua →
            </Link>
          </p>
        </div>
      </section>

      <Egenart tone tittel="Derfor smaker det av Guse Gård" />

      <section className="seksjon">
        <div className="container todeler">
          <div>
            <p className="overtittel">Ved siden av gården</p>
            <h2>Sagbruk</h2>
          </div>
          <div className="tekst">
            <p>
              Vi har også et sagbruk, der det produseres materialer og ved.
              Spør oss gjerne om hva vi har tilgjengelig.
            </p>
            <p>
              <a className="tekstlenke" href={mailto("Spørsmål om sagbruket")}>
                Send oss en e-post →
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
