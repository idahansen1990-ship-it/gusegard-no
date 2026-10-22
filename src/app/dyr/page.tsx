import type { Metadata } from "next";
import Link from "next/link";
import { SideTopp } from "@/components/SideTopp";
import { DyrKort } from "@/components/DyrKort";
import { dyr } from "@/lib/dyr";

export const metadata: Metadata = {
  title: "Dyr på gården",
  description:
    "Møt høns, ender, gjess, kalkuner, sauer, lamaer og storfe på Guse Gård i Kvinesdal.",
  alternates: { canonical: "/dyr" },
};

export default function Dyrene() {
  return (
    <>
      <SideTopp
        overtittel="Dyr på gården"
        tittel="Her bor de"
        ingress="Fjærfe og sau er hovedproduksjonen vår, men på Guse Gård bor også lamaer og storfe. Her er de du kan møte."
      />

      <section className="seksjon">
        <div className="container">
          <div className="rutenett rutenett--3">
            {dyr.map((d) => (
              <DyrKort key={d.id} dyr={d} />
            ))}
            <article className="dyrkort dyrkort--annet">
              <div className="dyrkort__tekst">
                <h3>Og flere til</h3>
                <p>
                  Det bor også katter og hunder på gården, og i fjøset har det
                  vært kyllinger, fasaner, vaktler og en påfugl.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--lys">
        <div className="container sentrert smal">
          <h2>Vil du møte dyra?</h2>
          <p className="ingress">
            Du kan kose med og mate dyra på en gårdsbursdag eller et besøk.
          </p>
          <div className="knapperad knapperad--midt">
            <Link href="/aktiviteter/besoksgard" className="btn btn--primary">
              Besøk gården
            </Link>
            <Link href="/aktiviteter/bursdag" className="btn btn--ghost">
              Bursdag på gården
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
