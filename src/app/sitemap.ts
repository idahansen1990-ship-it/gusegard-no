import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const sider = [
  "/",
  "/om-garden",
  "/dyr",
  "/aktiviteter",
  "/aktiviteter/bursdag",
  "/aktiviteter/besoksgard",
  "/aktiviteter/villmark",
  "/overnatting",
  "/gardsbutikk",
  "/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return sider.map((sti) => ({
    url: `${site.url}${sti === "/" ? "" : sti}`,
    changeFrequency: sti === "/" ? "monthly" : "yearly",
    priority: sti === "/" ? 1 : 0.7,
  }));
}
