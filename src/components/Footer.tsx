import Link from "next/link";
import { meny, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bunn">
      <div className="container bunn__rutenett">
        <div>
          <p className="bunn__navn">Guse Gård</p>
          <p className="bunn__tekst">
            Dyr, natur og lokalmat i Kvinesdal. Gårdsbutikken Fedabua, bursdag,
            besøk og villmark.
          </p>
        </div>
        <div>
          <h2 className="bunn__tittel">Kontakt</h2>
          <ul className="bunn__liste">
            {site.telefon.map((t) => (
              <li key={t.href}>
                <a href={t.href}>{t.vis}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.epost}`}>{site.epost}</a>
            </li>
            <li>
              {site.adresse.gate}, {site.adresse.postnummer} {site.adresse.sted}
            </li>
          </ul>
        </div>
        <div>
          <h2 className="bunn__tittel">På siden</h2>
          <ul className="bunn__liste">
            {meny.slice(1).map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.tekst}</Link>
              </li>
            ))}
            <li>
              <Link href="/kontakt">Kontakt oss</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="bunn__tittel">Følg oss</h2>
          <ul className="bunn__liste">
            <li>
              <a href={site.instagram} rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href={site.facebook} rel="noopener noreferrer" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href={site.bondensMarked} rel="noopener noreferrer" target="_blank">
                Bondens marked
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container bunn__linje">
        <p>© {new Date().getFullYear()} Guse Gård</p>
      </div>
    </footer>
  );
}
