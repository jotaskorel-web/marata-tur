import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/globals.css'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Luzy Tour — Excursões, Bate-voltas e Turismo em Salvador',
    template: '%s | Luzy Tour',
  },
  description:
    'Excursões, bate-voltas e passeio de escuna com saídas de Salvador e região. Cadastur e atendimento humanizado. Viajar é preciso!',
  keywords:
    'luzy tour, luzytour, turismo salvador, excursões bahia, chapada diamantina, itacaré, escuna ilha dos frades, maragogi, bate volta salvador',
  authors: [{ name: 'Luzy Tour' }],
  creator: 'QeeL Tech',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Luzy Tour',
    title: 'Luzy Tour — Viajar é Preciso!',
    description:
      'Excursões, bate-voltas e passeio de escuna saindo de Salvador, Camaçari, Feira de Santana e região.',
    images: [{ url: '/images/destinations/chapada-diamantina.jpg', width: 1280, height: 960, alt: 'Chapada Diamantina — Luzy Tour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luzy Tour — Viajar é Preciso!',
    description: 'Descubra as próximas excursões da Luzy Tour.',
    images: ['/images/destinations/chapada-diamantina.jpg'],
  },
  robots: 'index, follow',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export const viewport = {
  themeColor: '#1B4F82',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-[#F3F1EC] text-gray-900">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
