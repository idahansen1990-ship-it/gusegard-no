import Link from "next/link";

export default function NotFound() {
  return (
    <section className="seksjon">
      <div className="container smal">
        <p className="overtittel">404</p>
        <h1>Her var det tomt for dyr</h1>
        <p className="ingress">
          Siden du leter etter finnes ikke, eller den har flyttet. Gå tilbake til
          forsiden, så finner du det meste derfra.
        </p>
        <p>
          <Link className="btn btn--primary" href="/">
            Til forsiden
          </Link>
        </p>
      </div>
    </section>
  );
}
