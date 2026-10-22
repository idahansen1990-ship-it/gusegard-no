// Faste opplysninger om gården. Endres de, endres de overalt på siden.
export const site = {
  navn: "Guse Gård",
  butikk: "Fedabua",
  url: "https://gusegard.no",
  beskrivelse:
    "Guse Gård i Kvinesdal: gårdsbutikken Fedabua med viltkjøtt, speket vilt, saft, syltetøy og honning, dyr å besøke, bursdag på gården, villmark og hytte til leie.",
  telefon: [
    { vis: "99 36 10 65", href: "tel:+4799361065" },
    { vis: "92 41 87 51", href: "tel:+4792418751" },
  ],
  epost: "mail@gusegard.no",
  adresse: { gate: "Åsevegen 896", postnummer: "4480", sted: "Kvinesdal" },
  kart: "https://www.google.com/maps/search/?api=1&query=%C3%85sevegen+896%2C+4480+Kvinesdal",
  facebook: "https://www.facebook.com/p/Guse-G%C3%A5rd-100064846714656/",
  instagram: "https://www.instagram.com/gusegard/",
  bondensMarked: "https://www.bondensmarked.no/produsenter/guse-gard",
  booking: "https://www.booking.com/hotel/no/guse-gard.html",
  airbnb: "https://www.airbnb.com/rooms/13713485",
} as const;

export type MenyPunkt = { href: string; tekst: string; kunMobil?: boolean };

// «Hjem» vises bare i mobilmenyen. På bred skjerm er logoen veien til forsiden.
export const meny: readonly MenyPunkt[] = [
  { href: "/", tekst: "Hjem", kunMobil: true },
  { href: "/om-garden", tekst: "Om gården" },
  { href: "/dyr", tekst: "Dyr på gården" },
  { href: "/aktiviteter", tekst: "Aktiviteter" },
  { href: "/overnatting", tekst: "Overnatting" },
  { href: "/gardsbutikk", tekst: "Fedabua" },
  { href: "/kjott-og-vilt", tekst: "Kjøtt og vilt" },
];

export function mailto(emne: string, tekst?: string) {
  const body = tekst ? `&body=${encodeURIComponent(tekst)}` : "";
  return `mailto:${site.epost}?subject=${encodeURIComponent(emne)}${body}`;
}
