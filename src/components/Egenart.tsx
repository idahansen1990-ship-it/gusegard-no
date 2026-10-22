// Det som gjør maten og dyra fra Guse Gård spesielle. Brukes på flere sider.
const punkter = [
  {
    tittel: "Gamle norske raser",
    tekst:
      "Vi satser på gamle norske husdyrraser. To av saueraser våre, blæset sau og gammel norsk spelsau, er bevaringsverdige i Norge.",
  },
  {
    tittel: "Dyr som har det godt",
    tekst:
      "Vi legger vekt på at dyra skal ha det godt. De går på beite fra tidlig vår til sein høst, på ca. 2000 mål utmark fra fjorden og opp til 300 meter over havet.",
  },
  {
    tittel: "Fra vår egen gård",
    tekst:
      "Det meste av råvarene kommer fra gården. Med eget slakteri og produksjonskjøkken kan vi foredle mer av dem selv.",
  },
];

export function Egenart({
  overtittel = "Det som gjør oss spesielle",
  tittel = "Mat fra dyr vi kjenner",
  tone = false,
}: {
  overtittel?: string;
  tittel?: string;
  tone?: boolean;
}) {
  return (
    <section className={`seksjon${tone ? " seksjon--tone" : ""}`}>
      <div className="container">
        <div className="seksjonstopp">
          <div>
            <p className="overtittel">{overtittel}</p>
            <h2>{tittel}</h2>
          </div>
        </div>
        <div className="rutenett rutenett--3">
          {punkter.map((p, i) => (
            <article key={p.tittel} className="egenart">
              <span className="egenart__nr" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{p.tittel}</h3>
              <p>{p.tekst}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
