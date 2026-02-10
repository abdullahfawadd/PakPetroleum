import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pakpetroleum.com"; // Replace with actual domain

  // In a real app, this would fetch dynamic routes from a CMS or DB
  const routes = [
    "",
    "/about",
    "/services",
    "/sustainability",
    "/insights",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
