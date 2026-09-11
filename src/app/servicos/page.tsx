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
import { PHOTOS } from '@/data/photos'
import { CalendarDays, Hotel, Utensils, Ticket, Bus, MapPin, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Serviços — o que a Luzy Tour oferece',
  description:
    'Excursões, bate-voltas, passeio de escuna e pacotes com aéreo. Saídas de Salvador e região com a Luzy Tour.',
}

const services = [
  {
    icon: Bus,
    title: 'Excursões',
    image: PHOTOS.chapada,
    description:
      'Viagens de dois a quatro dias com transporte executivo, hospedagem, translado e coordenador de grupo.',
  },
  {
    icon: MapPin,
    title: 'Bate-voltas',
    image: PHOTOS.salvador,
    description:
      'Passeios de um dia saindo de Salvador, para quem quer viajar sem precisar de hospedagem.',
  },
  {
    icon: Hotel,
    title: 'Passeio de escuna',
    image: PHOTOS.ilhaDosFrades,
    description:
      'Ilha dos Frades e Itaparica todos os dias da semana, com paisagens da Baía de Todos-os-Santos.',
  },
  {
    icon: Ticket,
    title: 'Pacotes com aéreo',
    image: PHOTOS.natal,
    description:
      'Natal, Foz do Iguaçu e Chile com aéreo, transfer, hospedagem e city tour.',
  },
  {
    icon: Utensils,
    title: 'Litoral nordestino',
    image: PHOTOS.maragogi,
    description:
      'Itacaré, Morro de São Paulo, Maragogi, Maceió e Aracaju — mar, sol e boas companhias.',
  },
  {
    icon: CalendarDays,
    title: 'Grupos e feriadões',
    image: PHOTOS.aracaju,
    description:
      'Saídas em datas especiais, com ônibus executivo, pulseira de identificação e coordenador.',
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
            title="Tudo o que a Luzy Tour faz por você"
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
