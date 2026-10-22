import Link from "next/link";

type Props = {
  overtittel: string;
  tittel: string;
  ingress: string;
  brodsmule?: { href: string; tekst: string };
};

export function SideTopp({ overtittel, tittel, ingress, brodsmule }: Props) {
  return (
    <section className="sidetopp">
      <div className="container sidetopp__inner">
        {brodsmule ? (
          <p className="sidetopp__brodsmule">
            <Link href={brodsmule.href}>← {brodsmule.tekst}</Link>
          </p>
        ) : null}
        <p className="overtittel">{overtittel}</p>
        <h1>{tittel}</h1>
        <p className="ingress">{ingress}</p>
      </div>
      <svg
        className="sidetopp__bolge"
        viewBox="0 0 1600 60"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M0 60 L0 34 C260 6 520 6 800 30 C1080 54 1340 54 1600 22 L1600 60 Z" />
      </svg>
    </section>
  );
}
