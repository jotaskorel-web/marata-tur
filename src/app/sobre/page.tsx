import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container, Section } from '@/components/ui/Layout'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre nós — a história da Maratá Tur',
  description:
    'Conheça a Maratá Tur: mais de 30 anos de experiência em fretamento, transporte, passeios e turismo nacional.',
}

const stats = [
  { value: '+30 anos', label: 'Conectando pessoas e destinos' },
  { value: '131+', label: 'Publicações no Instagram' },
  { value: '3', label: 'Cidades de embarque recorrente' },
  { value: '@marata_tur', label: 'Acompanhe no Instagram' },
]

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative mt-16 h-[360px] w-full md:h-[440px]">
          <Image src="/images/marata/cambara-do-sul.jpg" alt="Viagens Maratá Tur" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/40" />
          <Container className="relative z-10 flex h-full flex-col justify-end pb-10">
            <Breadcrumb
              className="mb-4 [&_*]:text-gray-200"
              items={[{ label: 'Início', href: '/' }, { label: 'Sobre nós' }]}
            />
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-200">Sobre a Maratá Tur</p>
            <h1 className="max-w-2xl text-3xl font-bold text-white md:text-5xl">
              Mais de 30 anos na estrada
            </h1>
          </Container>
        </section>

        <Section>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
                <Image src="/images/marata/logo-marata-tur.jpg" alt="Ônibus da Maratá Tur" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="mb-6 text-3xl font-bold">Nossa história</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    A Maratá Tur atua há mais de 30 anos conectando pessoas com destinos. A empresa
                    reúne experiência em transporte rodoviário, fretamento e turismo nacional.
                  </p>
                  <p>
                    Os passeios divulgados combinam ônibus de turismo, guias credenciados,
                    experiências regionais, hospedagem e gastronomia, conforme cada roteiro.
                  </p>
                  <p>
                    Maratá, Brochier e Montenegro aparecem como pontos recorrentes de embarque,
                    facilitando a participação de viajantes da região.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Números reais */}
          <div className="mt-16 grid grid-cols-2 gap-6 rounded-2xl bg-gray-50 p-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-orange-500 md:text-3xl">{s.value}</p>
                <p className="mt-1 text-sm text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <BenefitsSection />

        <Section className="pt-0">
          <div className="rounded-2xl bg-orange-500 px-8 py-12 text-center text-white">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Vamos viajar juntos?</h2>
            <p className="mx-auto mb-6 max-w-xl text-gray-100">
              Fale com a nossa equipe e comece a planejar a sua próxima experiência com a Maratá Tur.
            </p>
            <a
              href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-orange-500 transition-all hover:bg-gray-100"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
