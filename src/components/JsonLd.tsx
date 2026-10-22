import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.navn,
    url: site.url,
    description: site.beskrivelse,
    telephone: "+4799361065",
    email: site.epost,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.adresse.gate,
      postalCode: site.adresse.postnummer,
      addressLocality: site.adresse.sted,
      addressCountry: "NO",
    },
    sameAs: [site.facebook],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
