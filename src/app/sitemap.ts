import type { MetadataRoute } from 'next'
import { destinations, trips, blogPosts } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://livetur.com.br'

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/bio`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/destinos`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/viagens`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Destination pages
  const destinationPages: MetadataRoute.Sitemap = destinations.map((destination) => ({
    url: `${baseUrl}/destinos/${destination.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Trip pages
  const tripPages: MetadataRoute.Sitemap = trips.map((trip) => ({
    url: `${baseUrl}/viagens/${trip.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog pages
  const blogPagesMap: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    lastModified: new Date(post.date),
  }))

  return [...mainPages, ...destinationPages, ...tripPages, ...blogPagesMap]
}
