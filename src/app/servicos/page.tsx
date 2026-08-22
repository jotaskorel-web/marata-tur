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
import { CalendarDays, Hotel, Utensils, Ticket, Bus, MapPin, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Serviços — o que a Maratá Tur oferece',
  description:
    'Fretamento, transporte para eventos, passeios de um dia e viagens rodoviárias em grupo com a Maratá Tur.',
}

const services = [
  {
    icon: Bus,
    title: 'Fretamento',
    image: '/images/marata/logo-marata-tur.jpg',
    description:
      'Transporte para grupos, empresas, escolas e eventos, com orçamento direto pelo WhatsApp.',
  },
  {
    icon: MapPin,
    title: 'Passeios de um dia',
    image: '/images/marata/rota-das-lavandas.jpg',
    description:
      'Bate-voltas com roteiro organizado, transporte, guia e experiências gastronômicas ou culturais.',
  },
  {
    icon: Hotel,
    title: 'Viagens com hospedagem',
    image: '/images/marata/trem-do-pampa.jpg',
    description:
      'Roteiros de mais dias com hotel, café da manhã e programação organizada conforme o pacote.',
  },
  {
    icon: Ticket,
    title: 'Transporte para eventos',
    image: '/images/marata/universo-alegria.jpg',
    description:
      'Ida e volta para shows, feiras e eventos em Porto Alegre, Esteio e outros destinos.',
  },
  {
    icon: Utensils,
    title: 'Turismo de experiência',
    image: '/images/marata/percorsi-anta-gorda.jpg',
    description:
      'Cultura, gastronomia, vinícolas, café colonial e contato com as tradições das comunidades visitadas.',
  },
  {
    icon: CalendarDays,
    title: 'Termas e resorts',
    image: '/images/marata/grand-suites-ita.jpg',
    description:
      'Hospedagem com lazer, piscinas, refeições e opções all inclusive em viagens selecionadas.',
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
            title="Tudo o que a Maratá Tur faz por você"
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
