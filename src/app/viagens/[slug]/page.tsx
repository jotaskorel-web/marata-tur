import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container, Section } from '@/components/ui/Layout'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CATEGORY_LABELS } from '@/components/trips/TripCard'
import { trips } from '@/data'
import { formatBRL, generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { Calendar, MapPin, Clock, Bus, CheckCircle, MessageCircle, XCircle, Instagram } from 'lucide-react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const trip = trips.find((t) => t.slug === params.slug)
  if (!trip) return {}
  return {
    title: trip.title,
    description: trip.description,
    openGraph: { title: trip.title, description: trip.description, images: [trip.image] },
  }
}

function dateText(trip: (typeof trips)[number]): string {
  if (trip.dateLabel) return trip.dateLabel
  if (!trip.startDate) return 'Consulte datas'
  const start = new Date(`${trip.startDate}T12:00:00`).toLocaleDateString('pt-BR')
  return trip.endDate ? `${start} a ${new Date(`${trip.endDate}T12:00:00`).toLocaleDateString('pt-BR')}` : start
}

export default function TripDetailPage({ params }: PageProps) {
  const trip = trips.find((t) => t.slug === params.slug)
  if (!trip) notFound()

  const departures = trip.departureCities?.join(', ') || trip.departureCity
  const reserveLink = generateWhatsAppLink(WHATSAPP_MESSAGES.tripReserve(trip.title))

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative mt-16 h-[380px] w-full md:h-[460px]">
          <Image src={trip.image} alt={trip.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/40" />
          <Container className="relative z-10 flex h-full flex-col justify-end pb-10">
            <Breadcrumb
              className="mb-4 [&_*]:text-gray-200"
              items={[
                { label: 'Início', href: '/' },
                { label: 'Viagens', href: '/viagens' },
                { label: trip.title },
              ]}
            />
            <span className="mb-3 inline-block w-fit rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
              {CATEGORY_LABELS[trip.category]}
            </span>
            <h1 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">{trip.title}</h1>
            <p className="mt-2 text-lg text-gray-200">{trip.destination}</p>
          </Container>
        </section>

        <Section>
          {/* Informações rápidas */}
          <div className="mb-12 grid grid-cols-2 gap-6 rounded-xl bg-gray-50 p-6 md:grid-cols-4">
            {[
              { icon: Calendar, label: 'Data', value: dateText(trip) },
              { icon: Clock, label: 'Duração', value: trip.duration },
              { icon: Bus, label: 'Saída de', value: departures },
              { icon: MapPin, label: 'Destino', value: trip.destination },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label}>
                <div className="mb-2 flex items-center gap-2 font-semibold text-orange-500">
                  <Icon className="h-5 w-5" />
                  {label}
                </div>
                <p className="text-sm text-gray-700">{value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {/* Sobre */}
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold md:text-3xl">Sobre essa viagem</h2>
                <p className="text-lg text-gray-600">{trip.description}</p>
              </div>

              {/* Destaques */}
              {trip.highlights && trip.highlights.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Destaques</h2>
                  <div className="flex flex-wrap gap-2">
                    {trip.highlights.map((h, i) => (
                      <span key={i} className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-500">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Incluso */}
              {trip.included && trip.included.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">O que está incluso</h2>
                  <ul className="space-y-3">
                    {trip.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {trip.notIncluded && trip.notIncluded.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-4 text-2xl font-bold md:text-3xl">Não está incluso</h2>
                  <ul className="space-y-3">
                    {trip.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Roteiro */}
              {trip.itinerary && trip.itinerary.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold md:text-3xl">Roteiro</h2>
                  <div className="space-y-6">
                    {trip.itinerary.map((day) => (
                      <div key={day.day} className="border-l-4 border-orange-500 pl-6">
                        <h3 className="mb-2 text-lg font-bold text-orange-500">
                          Dia {day.day} — {day.title}
                        </h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Galeria */}
              {trip.gallery && trip.gallery.length > 0 && (
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold md:text-3xl">Galeria</h2>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {trip.gallery.map((img, i) => (
                      <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                        <Image src={img} alt={`${trip.title} — foto ${i + 1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Informações importantes */}
              <div className="mb-12 rounded-xl border border-gray-200 bg-white p-6">
                <h2 className="mb-3 text-xl font-bold">Informações importantes</h2>
                <p className="text-gray-600">
                  Vagas limitadas e sujeitas à disponibilidade. Valores, datas e condições podem
                  sofrer alterações — confirme os detalhes atualizados diretamente com a nossa
                  equipe pelo WhatsApp antes de reservar.
                </p>
              </div>

              {/* Tire dúvidas */}
              <div className="rounded-xl bg-orange-500/5 p-6">
                <h2 className="mb-2 text-xl font-bold">Tire suas dúvidas</h2>
                <p className="mb-4 text-gray-600">
                  Ficou com alguma pergunta sobre essa viagem? Fale com o nosso atendimento
                  especializado.
                </p>
                <a
                  href={reserveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar sticky */}
            <aside>
              <div className="sticky top-28 rounded-xl bg-orange-500 p-8 text-white">
                {trip.price ? (
                  <div className="mb-6">
                    {trip.originalPrice && (
                      <p className="text-sm text-gray-200 line-through">{formatBRL(trip.originalPrice)}</p>
                    )}
                    <p className="text-xs text-gray-200">
                      {trip.priceLabel || (trip.perPerson ? 'Por pessoa' : 'Valor divulgado')}
                    </p>
                    <p className="text-4xl font-bold">{formatBRL(trip.price)}</p>
                    {trip.priceDetails && trip.priceDetails.length > 0 && (
                      <ul className="mt-3 space-y-1 border-t border-white/20 pt-3 text-sm text-gray-100">
                        {trip.priceDetails.map((detail) => <li key={detail}>{detail}</li>)}
                      </ul>
                    )}
                    {trip.installments && trip.installmentValue && (
                      <p className="mt-2 text-sm text-gray-100">
                        ou {trip.installments}x de {formatBRL(trip.installmentValue)}
                      </p>
                    )}
                    {trip.entryValue && (
                      <p className="text-sm text-gray-100">Entrada de {formatBRL(trip.entryValue)}</p>
                    )}
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className="text-2xl font-bold">Consulte valores</p>
                    <p className="mt-1 text-sm text-gray-100">Condições especiais pelo WhatsApp</p>
                  </div>
                )}

                <a
                  href={reserveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-orange-500 transition-all hover:bg-gray-100"
                >
                  Quero reservar esta viagem
                </a>
                <p className="text-center text-sm text-gray-200">
                  Atendimento especializado pelo WhatsApp
                </p>
                {trip.sourceUrl && (
                  <a
                    href={trip.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 border-t border-white/20 pt-4 text-sm font-medium text-white/90 hover:text-white"
                  >
                    <Instagram className="h-4 w-4" />
                    Ver publicação original
                  </a>
                )}
              </div>
            </aside>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }))
}
