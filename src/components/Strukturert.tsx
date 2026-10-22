// Strukturerte data (schema.org) for én side. Hjelper Google å vise butikken og overnattingen riktig.
export function Strukturert({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
