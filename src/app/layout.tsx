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
    default: 'Live Tur — Agência de Turismo | Viagens, Pacotes e Excursões',
    template: '%s | Live Tur',
  },
  description:
    'A Live Tur realiza sonhos desde 2004. Cruzeiros, pacotes nacionais e internacionais, excursões e viagens em grupo com conforto, segurança e parcelamento facilitado.',
  keywords:
    'live tur, turismo, viagens, pacotes turísticos, excursões, cruzeiros, viagens em grupo, agência de turismo Paraíba, Areia PB',
  authors: [{ name: 'Live Tur' }],
  creator: 'Pedro Riquelme',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://livetur.com.br',
    siteName: 'Live Tur',
    title: 'Live Tur — Agência de Turismo',
    description:
      'Cruzeiros, pacotes e excursões com conforto, segurança e experiências inesquecíveis. Realizamos sonhos desde 2004.',
    images: [{ url: '/livetur.png', width: 1200, height: 630, alt: 'Live Tur' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Tur — Agência de Turismo',
    description: 'Descubra seus próximos destinos com a Live Tur.',
    images: ['/livetur.png'],
  },
  robots: 'index, follow',
  metadataBase: new URL('https://livetur.com.br'),
}

export const viewport = {
  themeColor: '#F97316',
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
