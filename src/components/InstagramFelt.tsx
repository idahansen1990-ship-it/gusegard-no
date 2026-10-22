import Image from "next/image";
import { hentInstagramInnlegg, type InstagramInnlegg } from "@/lib/instagram";
import { site } from "@/lib/site";

export function InstagramRutenett({ innlegg }: { innlegg: InstagramInnlegg[] }) {
  return (
    <section className="seksjon">
      <div className="container">
        <div className="seksjonstopp">
          <div>
            <p className="overtittel">Instagram</p>
            <h2>Siste fra gården</h2>
          </div>
          <a
            className="tekstlenke"
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Følg @gusegard →
          </a>
        </div>
        <ul className="insta">
          {innlegg.map((i) => (
            <li key={i.id}>
              <a
                className="insta__rute"
                href={i.lenke}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  i.tekst
                    ? `Se innlegget på Instagram: ${i.tekst}`
                    : "Se innlegget på Instagram"
                }
              >
                <Image
                  src={i.bilde}
                  alt={i.tekst || "Innlegg fra Guse Gård på Instagram"}
                  fill
                  sizes="(min-width: 960px) 180px, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Viser de nyeste innleggene. Uten nøkkel, eller hvis Instagram ikke svarer, vises ingenting.
export async function InstagramFelt() {
  const innlegg = await hentInstagramInnlegg(6);
  if (innlegg.length === 0) return null;
  return <InstagramRutenett innlegg={innlegg} />;
}
