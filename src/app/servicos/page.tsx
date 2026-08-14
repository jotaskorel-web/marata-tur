import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section, Grid } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Card, ImagePlaceholder } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { Ship, Plane, Globe2, Church, Bus, Sun, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Serviços — o que a Live Tur oferece',
  description:
    'Cruzeiros, pacotes nacionais e internacionais, viagens religiosas, excursões e pacotes de praia all inclusive. Conheça os serviços da Live Tur.',
}

const services = [
  {
    icon: Ship,
    title: 'Cruzeiros',
    image: '/images/trips/carnaval-msc.jpg',
    description:
      'Temporadas e Carnaval em alto-mar com a MSC Cruzeiros, pensão completa e roteiros pelo litoral brasileiro.',
  },
  {
    icon: Plane,
    title: 'Pacotes nacionais',
    image: '/images/trips/circuito-montanhas.jpg',
    description:
      'Aéreo + hotel com city tours e guias locais para os principais destinos do Brasil, com voos diretos da Paraíba.',
  },
  {
    icon: Globe2,
    title: 'Turismo internacional',
    image: '/images/gallery/bariloche.jpg',
    description:
      'Roteiros internacionais como o Circuito Andino entre Chile e Argentina, passando por Bariloche e Córdoba.',
  },
  {
    icon: Church,
    title: 'Viagens religiosas',
    image: '/images/trips/religioso.jpg',
    description:
      'Romarias e jornadas de fé por Aparecida, Canção Nova, santuários e destinos de peregrinação.',
  },
  {
    icon: Bus,
    title: 'Excursões regionais',
    image: '/images/trips/taquaritinga.jpg',
    description:
      'Bate-voltas e passeios curtos pela região, como a Tur das Uvas em Natuba e a Rota dos Mirantes em Taquaritinga.',
  },
  {
    icon: Sun,
    title: 'Praias & All-Inclusive',
    image: '/images/trips/natal-marsol.jpg',
    description:
      'Pacotes de praia com sistema all inclusive, como o Marsol Beach Resort em Natal e o litoral de Pernambuco.',
  },
]

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-28">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Serviços' }]} />
          <SectionTitle
            eyebrow="Serviços"
            title="Tudo o que a Live Tur faz por você"
            subtitle="Do sonho ao embarque: cuidamos de cada detalhe da sua viagem, seja qual for o estilo."
          />

          <Grid cols={3} className="mb-16">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <Card className="group flex h-full flex-col overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <ImagePlaceholder src={service.image} alt={service.title} aspectRatio="auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/95 text-orange-500">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                    <p className="mb-4 flex-1 text-sm text-gray-600">{service.description}</p>
                    <Link
                      href="/viagens"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 transition-all hover:gap-2"
                    >
                      Ver viagens
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </Grid>

          <div className="rounded-2xl bg-orange-500 px-8 py-12 text-center text-white">
            <h2 className="mb-3 text-2xl font-bold md:text-3xl">Não encontrou o que procurava?</h2>
            <p className="mx-auto mb-6 max-w-xl text-gray-100">
              Montamos roteiros sob medida. Conte para a nossa equipe o que você tem em mente.
            </p>
            <a
              href={generateWhatsAppLink(WHATSAPP_MESSAGES.quotation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-orange-500 transition-all hover:bg-gray-100"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar orçamento
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
