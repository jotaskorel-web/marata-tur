import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container, Section } from '@/components/ui/Layout'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { PHOTOS } from '@/data/photos'
import { MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre nós — a Luzy Tour',
  description:
    'Conheça a Luzy Tour: excursões, bate-voltas e passeio de escuna saindo de Salvador e região. Cadastur e atendimento humanizado.',
}

const stats = [
  { value: 'Cadastur', label: 'Turismo legal e regularizado' },
  { value: '16,7 mil', label: 'Seguidores no Instagram' },
  { value: '5', label: 'Cidades de embarque na região' },
  { value: '@luzytour', label: 'Acompanhe no Instagram' },
]

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative mt-16 h-[360px] w-full md:h-[440px]">
          <Image src={PHOTOS.chapada} alt="Morro do Pai Inácio na Chapada Diamantina" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/40" />
          <Container className="relative z-10 flex h-full flex-col justify-end pb-10">
            <Breadcrumb
              className="mb-4 [&_*]:text-gray-200"
              items={[{ label: 'Início', href: '/' }, { label: 'Sobre nós' }]}
            />
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-200">Sobre a Luzy Tour</p>
            <h1 className="max-w-2xl text-3xl font-bold text-white md:text-5xl">
              Viajar é preciso
            </h1>
          </Container>
        </section>

        <Section>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
                <Image src={PHOTOS.ilhaDosFrades} alt="Ilha dos Frades, destino do passeio de escuna da Luzy Tour" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="mb-6 text-3xl font-bold">Nossa história</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    A Luzy Tour é uma agência de excursões de Salvador. Levamos grupos à Chapada
                    Diamantina, Itacaré, Maragogi, Aracaju, Natal, Foz do Iguaçu e até à neve no Chile.
                  </p>
                  <p>
                    Os pacotes combinam ônibus executivo, hospedagem com café da manhã, translado
                    aos passeios e coordenador de grupo. Também fazemos bate-voltas e o passeio de
                    escuna para Ilha dos Frades e Itaparica.
                  </p>
                  <p>
                    As saídas partem de Salvador, Camaçari, Feira de Santana, Santo Estevão e Dias
                    d&apos;Ávila. Somos cadastrados no Cadastur e o atendimento é humanizado, pelo WhatsApp.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

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
              Fale com a nossa equipe e comece a planejar a sua próxima experiência com a Luzy Tour.
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
