import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Guse Gård – dyr, natur og lokalmat i Kvinesdal",
    template: "%s · Guse Gård",
  },
  description: site.beskrivelse,
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: site.navn,
    title: "Guse Gård – dyr, natur og lokalmat i Kvinesdal",
    description: site.beskrivelse,
  },
};

export const viewport: Viewport = {
  themeColor: "#2f4a36",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body>
        <a className="hopp" href="#innhold">
          Hopp til innholdet
        </a>
        <Header />
        <main id="innhold">{children}</main>
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
