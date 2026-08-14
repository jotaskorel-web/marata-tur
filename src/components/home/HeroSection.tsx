import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Layout'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pb-28 pt-24 md:pb-32">
      {/* Imagem de fundo otimizada */}
      <Image
        src="/images/cities/iguazu.jpg"
        alt="Cataratas do Iguaçu"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Viaje. Descubra. Viva.
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-100 md:text-xl">
            Cruzeiros, pacotes e excursões planejados para você viver novos destinos com conforto,
            segurança e experiências inesquecíveis.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/destinos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F97316] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#EA580C] hover:shadow-lg sm:w-auto"
            >
              Conhecer destinos
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={generateWhatsAppLink(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/15 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </Container>

    </section>
  )
}
