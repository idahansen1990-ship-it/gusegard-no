import Image from "next/image";
import { DyrIkon } from "./DyrIkon";
import type { Dyr } from "@/lib/dyr";

export function DyrKort({ dyr, kort = false }: { dyr: Dyr; kort?: boolean }) {
  return (
    <article className={`dyrkort${kort ? " dyrkort--kompakt" : ""}`}>
      <div className={`dyrkort__bilde dyrkort__bilde--${dyr.id}`}>
        {dyr.bilde ? (
          <Image
            src={dyr.bilde}
            alt={dyr.alt ?? dyr.navn}
            fill
            sizes="(min-width: 900px) 360px, 100vw"
            style={{ objectFit: "cover", objectPosition: dyr.fokus ?? "50% 50%" }}
          />
        ) : (
          <DyrIkon id={dyr.id} />
        )}
      </div>
      <div className="dyrkort__tekst">
        <h3>{dyr.navn}</h3>
        {kort ? null : <p>{dyr.tekst}</p>}
      </div>
    </article>
  );
}
