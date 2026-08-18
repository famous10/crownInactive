import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.crowninteractive.com"

  const staticRoutes = [
    "",
    "/solutions",
    "/solutions/1gov",
    "/solutions/cuboss",
    "/solutions/cicod",
    "/industries",
    "/industries/government",
    "/industries/utilities",
    "/industries/banking",
    "/industries/oil-gas",
    "/industries/enterprise",
    "/why-crown",
    "/case-studies",
    "/company",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
  ]

  const routes = staticRoutes.map((route): MetadataRoute.Sitemap[0] => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.includes("/solutions/") || route.includes("/industries/") ? 0.8 : 0.6,
  }))

  return routes
}