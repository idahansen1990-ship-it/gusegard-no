import type { Metadata } from "next";
import { SideTopp } from "@/components/SideTopp";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt oss",
  description:
    "Kontakt Guse Gård i Kvinesdal: telefon 99 36 10 65 eller 92 41 87 51, e-post mail@gusegard.no.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return (
    <>
      <SideTopp
        overtittel="Kontakt oss"
        tittel="Ta kontakt"
        ingress="Ring eller send en e-post om bursdag, besøk, villmark, gårdsbutikken eller sagbruket."
      />

      <section className="seksjon">
        <div className="container">
          <div className="rutenett rutenett--3">
            <article className="fakta">
              <h2>Ring oss</h2>
              <ul className="kontaktliste">
                {site.telefon.map((t) => (
                  <li key={t.href}>
                    <a href={t.href}>{t.vis}</a>
                  </li>
                ))}
              </ul>
            </article>
            <article className="fakta">
              <h2>Send e-post</h2>
              <ul className="kontaktliste">
                <li>
                  <a href={`mailto:${site.epost}`}>{site.epost}</a>
                </li>
              </ul>
            </article>
            <article className="fakta">
              <h2>Finn oss</h2>
              <address className="kontaktliste">
                {site.navn}
                <br />
                {site.adresse.gate}
                <br />
                {site.adresse.postnummer} {site.adresse.sted}
              </address>
              <p>
                <a
                  className="tekstlenke"
                  href={site.kart}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Åpne i kart →
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--lys">
        <div className="container smal sentrert">
          <h2>Følg oss</h2>
          <p className="ingress">
            Du finner oss også på Facebook.
          </p>
          <div className="knapperad knapperad--midt">
            <a
              href={site.facebook}
              className="btn btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guse Gård på Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
