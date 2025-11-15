import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
      // Специальные правила для Yandex
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://teamnorth.ru/sitemap.xml",
  };
}

