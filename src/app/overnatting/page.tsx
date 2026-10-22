import type { Metadata } from "next";
import Link from "next/link";
import { SideTopp } from "@/components/SideTopp";
import { Strukturert } from "@/components/Strukturert";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Overnatting på gården",
  description:
    "Bo på Guse Gård i Kvinesdal: hytte med to soverom og plass til fem, parkering og grill. Møt dyra, gå på tur og fisk i nærheten. Bestill på Booking.com eller Airbnb.",
  alternates: { canonical: "/overnatting" },
};

const fakta = [
  { tittel: "Plass til fem", tekst: "To soverom og plass til inntil fem gjester." },
  { tittel: "Parkering og grill", tekst: "Parkering og grill er med." },
  { tittel: "Tur og fiske", tekst: "Turmuligheter og fiske i nærheten." },
];

const opplevelser = [
  {
    href: "/dyr",
    tittel: "Møt dyra",
    tekst: "Høner, lamaer, sauer og kuer bor på gården. Avtal et besøk.",
  },
  {
    href: "/aktiviteter/villmark",
    tittel: "Ut i skogen",
    tekst: "Stort skogsområde med flere fiskevann, bålplass, båter og kajakker.",
  },
  {
    href: "/gardsbutikk",
    tittel: "Ta med mat hjem",
    tekst: "Fedabua selger viltkjøtt, saft, syltetøy og honning fra egen gård.",
  },
];

const overnattingData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Overnatting på Guse Gård",
  description:
    "Hytte på Guse Gård i Kvinesdal med to soverom og plass til fem gjester, parkering og grill.",
  url: `${site.url}/overnatting`,
  telephone: "+4799361065",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.adresse.gate,
    postalCode: site.adresse.postnummer,
    addressLocality: site.adresse.sted,
    addressCountry: "NO",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Parkering", value: true },
    { "@type": "LocationFeatureSpecification", name: "Grill", value: true },
  ],
};

export default function Overnatting() {
  return (
    <>
      <Strukturert data={overnattingData} />
      <SideTopp
        overtittel="Overnatting"
        tittel="Våkn opp på gården"
        ingress="Hytte på Guse Gård med plass til fem, på en gård med dyr og natur rundt seg."
        handling={
          <>
            <a
              href={site.booking}
              className="btn btn--honey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bestill overnatting
            </a>
            <a
              href={site.airbnb}
              className="btn btn--lys"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se på Airbnb
            </a>
          </>
        }
      />

      <section className="seksjon">
        <div className="container">
          <div className="seksjonstopp">
            <div>
              <p className="overtittel">Hytta</p>
              <h2>Dette får du</h2>
            </div>
          </div>
          <div className="rutenett rutenett--3">
            {fakta.map((f) => (
              <article key={f.tittel} className="fakta">
                <h3>{f.tittel}</h3>
                <p>{f.tekst}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="seksjon seksjon--tone">
        <div className="container">
          <div className="seksjonstopp">
            <div>
              <p className="overtittel">Bo, opplev og smak</p>
              <h2>Mer enn en overnatting</h2>
            </div>
          </div>
          <div className="rutenett rutenett--3">
            {opplevelser.map((o) => (
              <Link key={o.href} href={o.href} className="aktivitet">
                <h3>{o.tittel}</h3>
                <p>{o.tekst}</p>
                <span className="aktivitet__pil" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container smal sentrert">
          <p className="overtittel overtittel--lys">Bestill</p>
          <h2>Se priser og ledige datoer</h2>
          <p className="ingress band__tekst">
            Hytta er lagt ut på Booking.com og Airbnb, der du ser ledige datoer
            og pris. Du kan også spørre oss direkte.
          </p>
          <div className="knapperad knapperad--midt">
            <a
              href={site.booking}
              className="btn btn--honey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bestill på Booking.com
            </a>
            <a
              href={site.airbnb}
              className="btn btn--lys"
              target="_blank"
              rel="noopener noreferrer"
            >
              Se på Airbnb
            </a>
            <a href={mailto("Overnatting på Guse Gård")} className="btn btn--lys">
              Spør oss direkte
            </a>
          </div>
        </div>
      </section>

      <div className="bestillingsfelt">
        <a
          href={site.booking}
          className="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bestill overnatting
        </a>
      </div>
    </>
  );
}
