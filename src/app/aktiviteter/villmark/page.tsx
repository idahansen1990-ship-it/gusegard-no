import type { Metadata } from "next";
import Link from "next/link";
import { SideTopp } from "@/components/SideTopp";
import { mailto } from "@/lib/site";

export const metadata: Metadata = {
  title: "Villmark",
  description:
    "Stort skogsområde med flere fiskevann, bålplass, båter og kajakker, tilrettelagt for villmarksaktiviteter ved Guse Gård i Kvinesdal.",
  alternates: { canonical: "/aktiviteter/villmark" },
};

const muligheter = [
  { tittel: "Fiskevann", tekst: "Flere fiskevann i skogsområdet." },
  { tittel: "Bålplass", tekst: "Bålplass i skogen." },
  { tittel: "Båter", tekst: "Vi har båter." },
  { tittel: "Kajakker", tekst: "Vi har kajakker." },
];

export default function Villmark() {
  return (
    <>
      <SideTopp
        brodsmule={{ href: "/aktiviteter", tekst: "Alle aktiviteter" }}
        overtittel="Villmark"
        tittel="Ut i skogen"
        ingress="Vi har et stort skogsområde som er tilrettelagt for villmarksaktiviteter."
      />

      <section className="seksjon">
        <div className="container">
          <div className="rutenett rutenett--4">
            {muligheter.map((m) => (
              <article key={m.tittel} className="fakta">
                <h2>{m.tittel}</h2>
                <p>{m.tekst}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--lys">
        <div className="container smal sentrert">
          <h2>Villmarksbursdag</h2>
          <p className="ingress">
            Skogen passer også til bursdagsfeiring. Vi tilrettelegger ut fra
            deres ønsker, fra 200 kr per person.
          </p>
          <div className="knapperad knapperad--midt">
            <Link href="/aktiviteter/bursdag" className="btn btn--primary">
              Les om bursdag
            </Link>
            <a href={mailto("Villmark på Guse Gård")} className="btn btn--ghost">
              Send forespørsel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
