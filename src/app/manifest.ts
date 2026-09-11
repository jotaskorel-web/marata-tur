import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luzy Tour - Excursões e Turismo',
    short_name: 'Luzy Tour',
    description:
      'Excursões, bate-voltas e passeio de escuna saindo de Salvador',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1B4F82',
    icons: [
      {
        src: '/images/brand/luzy-tour-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
