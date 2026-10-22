import Link from "next/link";
import { Logomerke } from "./Logo";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="topp">
      <div className="container topp__inner">
        <Link href="/" className="merke" aria-label="Guse Gård, til forsiden">
          <Logomerke />
          <span className="merke__tekst">
            Guse Gård
            <small>Kvinesdal</small>
          </span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
