"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { meny } from "@/lib/site";

function aktiv(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Nav() {
  const pathname = usePathname();
  const [apen, setApen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="nav__knapp"
        aria-expanded={apen}
        aria-controls="hovedmeny"
        onClick={() => setApen((v) => !v)}
      >
        <span className="nav__strek" aria-hidden="true" />
        <span className="sr-only">{apen ? "Lukk menyen" : "Åpne menyen"}</span>
      </button>
      <nav
        id="hovedmeny"
        className={`nav${apen ? " nav--apen" : ""}`}
        aria-label="Hovedmeny"
      >
        <ul className="nav__liste">
          {meny.map((punkt) => (
            <li key={punkt.href} className={punkt.kunMobil ? "nav__kunmobil" : undefined}>
              <Link
                href={punkt.href}
                className="nav__lenke"
                aria-current={aktiv(pathname, punkt.href) ? "page" : undefined}
                onClick={() => setApen(false)}
              >
                {punkt.tekst}
              </Link>
            </li>
          ))}
          <li className="nav__kontakt">
            <Link
              href="/kontakt"
              className="btn btn--primary btn--liten"
              aria-current={aktiv(pathname, "/kontakt") ? "page" : undefined}
              onClick={() => setApen(false)}
            >
              Kontakt oss
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
