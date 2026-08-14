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
  title: 'Sobre nós — a história da Live Tur',
  description:
    'Conheça a Live Tur: agência de turismo que realiza sonhos desde 2004, com atendimento personalizado e acompanhamento em cada viagem.',
}

const stats = [
  { value: '2004', label: 'Realizando sonhos desde' },
  { value: 'Nac. + Int.', label: 'Destinos que operamos' },
  { value: '5', label: 'Cidades de saída' },
  { value: '@live.tur', label: 'Acompanhe no Instagram' },
]

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative mt-16 h-[360px] w-full md:h-[440px]">
          <Image src="/images/gallery/paisagem.jpg" alt="Viagens Live Tur" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/40" />
          <Container className="relative z-10 flex h-full flex-col justify-end pb-10">
            <Breadcrumb
              className="mb-4 [&_*]:text-gray-200"
              items={[{ label: 'Início', href: '/' }, { label: 'Sobre nós' }]}
            />
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gray-200">Sobre a Live Tur</p>
            <h1 className="max-w-2xl text-3xl font-bold text-white md:text-5xl">
              Realizamos sonhos desde 2004
            </h1>
          </Container>
        </section>

        <Section>
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div className="relative h-[420px] w-full overflow-hidden rounded-xl">
                <Image src="/images/gallery/bariloche.jpg" alt="Grupo de viajantes Live Tur" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="mb-6 text-3xl font-bold">Nossa história</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    A Live Tur nasceu do propósito de transformar sonhos em viagens inesquecíveis.
                    Desde 2004, planejamos cada roteiro com carinho, dedicação e compromisso —
                    porque acreditamos que viajar é colecionar momentos que o tempo jamais apaga.
                  </p>
                  <p>
                    Trabalhamos com cruzeiros, pacotes nacionais e internacionais, excursões
                    regionais e viagens religiosas, sempre com atendimento personalizado e
                    acompanhamento da nossa equipe do início ao fim.
                  </p>
                  <p>
                    Nosso destino é a sua melhor viagem. Ver nossos clientes felizes é a certeza de
                    que estamos no caminho certo.
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
              Fale com a nossa equipe e comece a planejar a sua próxima experiência com a Live Tur.
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
