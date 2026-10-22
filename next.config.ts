import path from "node:path";
import type { NextConfig } from "next";

// Adressene fra den gamle siden (gusegard.no/Guse_Gard/...) sendes videre til de nye,
// så lenker fra Google, Facebook og andre nettsteder fortsatt virker.
const gamleSider: Record<string, string> = {
  "/Guse_Gard/Hovedside.html": "/",
  "/Guse_Gard/Om_garden.html": "/om-garden",
  "/Guse_Gard/Kontakt_oss.html": "/kontakt",
  "/Guse_Gard/Dyr_pa_garden/Dyr_pa_garden.html": "/dyr",
  "/Guse_Gard/Aktiviteter.html": "/aktiviteter",
  "/Guse_Gard/Bursdag.html": "/aktiviteter/bursdag",
  "/Guse_Gard/Besksgard.html": "/aktiviteter/besoksgard",
  "/Guse_Gard/Villmark.html": "/aktiviteter/villmark",
};

const nextConfig: NextConfig = {
  // Bilder fra Instagram vises via vår egen bildetjeneste, så besøkende laster dem ikke fra Meta.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
    ],
  },
  // Roten må være denne mappen, ellers leter Turbopack etter lockfiler og kode i mapper over.
  turbopack: { root: path.join(__dirname) },
  async redirects() {
    return Object.entries(gamleSider).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
