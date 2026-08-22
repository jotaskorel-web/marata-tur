import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Layout'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { Compass } from 'lucide-react'

export const CTASection: React.FC = () => {
  return (
    <section className="relative flex min-h-[680px] items-center overflow-hidden md:min-h-[780px]">
      <Image
        src="/images/marata/cambara-do-sul.jpg"
        alt="Viajantes da Maratá Tur em Cambará do Sul"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <Container className="relative z-10 py-28 text-center text-white md:py-36">
        <Reveal>
          <h2 className="mx-auto mb-6 max-w-3xl text-3xl font-bold md:text-5xl">
            Seu próximo destino pode começar agora.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-100">
            Escolha um passeio ou solicite seu fretamento diretamente com a equipe da Maratá Tur.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/viagens"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-orange-500 transition-all hover:bg-gray-100 sm:w-auto"
          >
            <Compass className="h-5 w-5" />
            Encontrar minha próxima viagem
          </Link>
          <a
            href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white/15 sm:w-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
