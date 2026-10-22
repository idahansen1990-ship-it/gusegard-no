import type { Metadata } from "next";
import Link from "next/link";
import { SideTopp } from "@/components/SideTopp";

export const metadata: Metadata = {
  title: "Aktiviteter",
  description:
    "Bursdag, besøksgård og villmark: aktiviteter for barn og voksne på Guse Gård i Kvinesdal.",
  alternates: { canonical: "/aktiviteter" },
};

const aktiviteter = [
  {
    href: "/aktiviteter/bursdag",
    tittel: "Bursdag",
    tekst:
      "Lyst til å oppleve en annerledes bursdag? Velg mellom gårdsbursdag med dyra og villmarksbursdag med bål, fiskevann og kajakker.",
    merke: "Fra 200 kr per person",
  },
  {
    href: "/aktiviteter/besoksgard",
    tittel: "Besøksgård",
    tekst:
      "Møt dyra, mat og kos med dem, gå natursti og grill over bål. For enkeltpersoner og grupper.",
    merke: "Etter avtale",
  },
  {
    href: "/aktiviteter/villmark",
    tittel: "Villmark",
    tekst:
      "Et stort skogsområde tilrettelagt for villmarksaktiviteter, med flere fiskevann, bålplass, båter og kajakker.",
    merke: "Skog og vann",
  },
];

export default function Aktiviteter() {
  return (
    <>
      <SideTopp
        overtittel="Aktiviteter"
        tittel="Vi arrangerer mye forskjellig"
        ingress="Velg en aktivitet for å se hva vi tilbyr. Alt avtales på forhånd, og vi tilpasser etter ønskene deres."
      />
      <section className="seksjon">
        <div className="container">
          <div className="rutenett rutenett--3">
            {aktiviteter.map((a) => (
              <Link key={a.href} href={a.href} className="aktivitet aktivitet--stor">
                <span className="aktivitet__merke">{a.merke}</span>
                <h2>{a.tittel}</h2>
                <p>{a.tekst}</p>
                <span className="aktivitet__pil" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
