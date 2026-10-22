import type { Metadata } from "next";
import Link from "next/link";
import { SideTopp } from "@/components/SideTopp";
import { mailto, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Overnatting",
  description:
    "Leie hytte på Guse Gård i Kvinesdal: to soverom og plass til fem gjester, med turmuligheter og fiske i nærheten.",
  alternates: { canonical: "/overnatting" },
};

const fakta = [
  "To soverom og plass til inntil fem gjester",
  "Parkering og grill",
  "Turmuligheter og fiske i nærheten",
];

export default function Overnatting() {
  return (
    <>
      <SideTopp
        overtittel="Overnatting"
        tittel="Bo på gården"
        ingress="Vi leier ut en hytte på Guse Gård, for deg som vil våkne til dyr og natur."
      />

      <section className="seksjon">
        <div className="container todeler todeler--topp">
          <div>
            <p className="overtittel">Hytta</p>
            <h2>Hytte på en gård i Kvinesdal</h2>
            <div className="tekst">
              <p>
                Hytta ligger på Guse Gård ved fv. 551 i Kvinesdal. Kombiner gjerne
                oppholdet med et besøk hos dyra eller en tur i villmarka vår.
              </p>
              <p>
                <Link className="tekstlenke" href="/aktiviteter">
                  Se aktivitetene våre →
                </Link>
              </p>
            </div>
          </div>
          <ul className="hakeliste hakeliste--stor">
            {fakta.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--lys">
        <div className="container smal sentrert">
          <h2>Se priser og ledige datoer</h2>
          <p className="ingress">
            Hytta er lagt ut på Booking.com og Airbnb. Du kan også spørre oss
            direkte.
          </p>
          <div className="knapperad knapperad--midt">
            <a
              href={site.booking}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Booking.com
            </a>
            <a
              href={site.airbnb}
              className="btn btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Airbnb
            </a>
            <a href={mailto("Overnatting på Guse Gård")} className="btn btn--ghost">
              Send e-post
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
