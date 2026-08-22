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
    default: 'Maratá Tur — Fretamento, Transporte e Turismo',
    template: '%s | Maratá Tur',
  },
  description:
    'Há mais de 30 anos conectando pessoas com destinos. Fretamento, transporte, passeios e turismo nacional com saídas de Maratá e região.',
  keywords:
    'maratá tur, turismo, viagens, passeios, excursões, fretamento, transporte, turismo Rio Grande do Sul, Maratá RS',
  authors: [{ name: 'Maratá Tur' }],
  creator: 'Pedro Riquelme',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Maratá Tur',
    title: 'Maratá Tur — Fretamento e Turismo',
    description:
      'Passeios, viagens em grupo, transporte e fretamento com mais de 30 anos de experiência.',
    images: [{ url: '/images/marata/trem-do-pampa.jpg', width: 1080, height: 1440, alt: 'Maratá Tur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maratá Tur — Fretamento e Turismo',
    description: 'Descubra os próximos passeios da Maratá Tur.',
    images: ['/images/marata/trem-do-pampa.jpg'],
  },
  robots: 'index, follow',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export const viewport = {
  themeColor: '#13233A',
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
      <body className="bg-white text-gray-900">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
