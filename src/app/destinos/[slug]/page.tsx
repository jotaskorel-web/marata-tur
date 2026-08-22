import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container, Section, Grid } from '@/components/ui/Layout'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { TripCard } from '@/components/trips/TripCard'
import { destinations, trips } from '@/data'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { MessageCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const destination = destinations.find((d) => d.slug === params.slug)
  if (!destination) return {}
  return {
    title: `${destination.title}`,
    description: destination.description,
    openGraph: {
      title: `${destination.title} — Maratá Tur`,
      description: destination.description,
      images: [destination.image],
    },
  }
}

export default function DestinationPage({ params }: PageProps) {
  const destination = destinations.find((d) => d.slug === params.slug)
  if (!destination) notFound()

  // Viagens relacionadas: mesmo destino mencionado no título/destino
  const related = trips.filter(
    (t) =>
      t.destination.toLowerCase().includes(destination.title.toLowerCase()) ||
      t.title.toLowerCase().includes(destination.title.toLowerCase())
  )

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative mt-16 h-[380px] w-full md:h-[440px]">
          <Image src={destination.image} alt={destination.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />
          <Container className="relative z-10 flex h-full flex-col justify-end pb-10">
            <Breadcrumb
              className="mb-4 [&_*]:text-gray-200"
              items={[
                { label: 'Início', href: '/' },
                { label: 'Destinos', href: '/destinos' },
                { label: destination.title },
              ]}
            />
            <p className="mb-1 text-lg text-gray-200">{destination.country}</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">{destination.title}</h1>
          </Container>
        </section>

        <Section>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-3xl font-bold">Sobre {destination.title}</h2>
              <p className="mb-6 text-lg text-gray-600">{destination.description}</p>
              <p className="text-gray-600">
                Fale com a Maratá Tur para confirmar as próximas saídas, vagas e condições para{' '}
                {destination.title}. Os detalhes de cada passeio são atualizados pelo WhatsApp.
              </p>
            </div>

            <aside>
              <div className="sticky top-28 rounded-xl bg-gray-50 p-8">
                <h3 className="mb-6 text-xl font-bold">Informações</h3>
                <dl className="mb-8 space-y-4">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">País</dt>
                    <dd className="text-lg text-gray-900">{destination.country}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Estado / Região</dt>
                    <dd className="text-lg text-gray-900">{destination.state}</dd>
                  </div>
                  {destination.region && (
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Área</dt>
                      <dd className="text-lg text-gray-900">{destination.region}</dd>
                    </div>
                  )}
                </dl>
                <a
                  href={generateWhatsAppLink(WHATSAPP_MESSAGES.destination(destination.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar sobre {destination.title}
                </a>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold">Viagens para {destination.title}</h2>
              <Grid cols={3}>
                {related.map((trip) => (
                  <TripCard key={trip.id} trip={trip} />
                ))}
              </Grid>
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }))
}
