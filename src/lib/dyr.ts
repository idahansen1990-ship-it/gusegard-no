export type DyrId =
  | "hons"
  | "ender"
  | "gjess"
  | "kalkun"
  | "sau"
  | "lama"
  | "storfe";

export type Dyr = {
  id: DyrId;
  navn: string;
  tekst: string;
  /** Sti under /public, f.eks. "/bilder/lama.jpg". Vises i stedet for tegningen. */
  bilde?: string;
};

export const dyr: Dyr[] = [
  {
    id: "hons",
    navn: "Høns",
    tekst:
      "Høns har alltid vært en lidenskap for oss. Vi startet med hanen Tarzan og hans fire høner i en hage i et tettbebygd strøk. Siden har fjærfeholdet vært i stadig utvikling: nye raser har kommet og andre har måttet vike. Her finner du også fasaner og vaktler.",
  },
  {
    id: "ender",
    navn: "Ender",
    tekst:
      "Etter hvert som fjærfeholdet utviklet seg, kom endene til gards sammen med fasaner, vaktler og gjess.",
  },
  {
    id: "gjess",
    navn: "Gjess",
    tekst:
      "Gjessene kom til senere, sammen med fasaner, vaktler og ender, da vi videreutviklet fjærfeholdet.",
  },
  {
    id: "kalkun",
    navn: "Kalkun",
    tekst:
      "Noen kalkuner var blant de aller første dyra som flyttet inn i fjøset da vi overtok gården i 2004, sammen med høns, en påfugl og fem sauer.",
  },
  {
    id: "sau",
    navn: "Sau",
    tekst:
      "Vi har tre norske raser: norsk hvit sau, blæset sau og gammel norsk spelsau. De to siste er bevaringsverdige raser i Norge. I 2010 doblet vi besetningen fra rundt 20 til ca. 50 vinterfôrede sauer.",
  },
  {
    id: "lama",
    navn: "Lama",
    tekst:
      "De to første lamaene kom i 2008, og dem reiste vi helt til Haukeli i Telemark for å hente. Året etter kom to nye hopper. Flokken består hovedsakelig av to hopper og en hingst.",
  },
  {
    id: "storfe",
    navn: "Storfe",
    tekst:
      "Siste ankomst på gården var to storfe av rasen limousin, høsten 2011.",
  },
];
