import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://searchos.tech";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Calendar/Schedule/Demo pages
    {
      url: `${baseUrl}/agendar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/schedule`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/demo`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Spanish Landing Pages
    {
      url: `${baseUrl}/servicios/sistema-operativo-personalizado`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/servicios/software-empresarial-baja-california-sur`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // English Landing Pages
    {
      url: `${baseUrl}/en/services/custom-operating-system`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/en/services/business-software-cabo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Blog index pages
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    // Resources / FAQ pages
    {
      url: `${baseUrl}/recursos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // About pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Products pages
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/en/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Individual product pages (Spanish)
    {
      url: `${baseUrl}/productos/golf-cart-os`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/productos/cabo-concierge`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/productos/batchcraft-os`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/productos/cabo-tails`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/productos/experience-os`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Individual product pages (English)
    {
      url: `${baseUrl}/en/products/golf-cart-os`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/products/cabo-concierge`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/products/batchcraft-os`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/products/cabo-tails`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/en/products/experience-os`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  // Dynamic blog posts
  const spanishBlogPosts = blogPosts
    .filter((post) => post.locale === "es")
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const englishBlogPosts = blogPosts
    .filter((post) => post.locale === "en")
    .map((post) => ({
      url: `${baseUrl}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...spanishBlogPosts, ...englishBlogPosts];
}

