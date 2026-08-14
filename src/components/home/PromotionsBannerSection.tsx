'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { trips } from '@/data'
import { Trip } from '@/types'
import { formatBRL, generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'

const AUTOPLAY_MS = 6000

function tripDateLabel(trip: Trip): string {
  if (trip.dateLabel) return trip.dateLabel
  if (!trip.startDate) return 'Consulte datas'
  const start = new Date(trip.startDate).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
  })
  if (trip.endDate) {
    const end = new Date(trip.endDate).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
    return `${start} a ${end}`
  }
  return new Date(trip.startDate).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function discountPercent(trip: Trip): number | null {
  if (!trip.originalPrice || !trip.price) return null
  return Math.round((1 - trip.price / trip.originalPrice) * 100)
}

export const PromotionsBannerSection: React.FC = () => {
  const promos = trips.filter((trip) => trip.promo)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback(
    (next: number) => {
      if (promos.length === 0) return
      setIndex((next + promos.length) % promos.length)
    },
    [promos.length]
  )

  useEffect(() => {
    if (paused || promos.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => goTo(index + 1), AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [goTo, index, paused, promos.length])

  if (promos.length === 0) return null

  return (
    <Section id="promocoes" className="overflow-x-hidden bg-white !pt-8 md:!pt-12">
      <SectionTitle
        eyebrow="Promoções"
        title="Ofertas para embarcar agora"
        subtitle="Vagas limitadas nos pacotes mais procurados da Live Tur. Reserve pelo site ou pelo WhatsApp."
      />

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
        aria-roledescription="carrossel"
        aria-label="Banners de promoções"
      >
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
          {promos.map((trip, i) => {
            const discount = discountPercent(trip)

            return (
              <article
                key={trip.id}
                className="relative h-[560px] w-full flex-shrink-0 overflow-hidden md:h-[460px]"
                aria-hidden={i !== index}
                aria-label={`${i + 1} de ${promos.length}: ${trip.title}`}
              >
                <Image
                  src={trip.image}
                  alt={`Vista de ${trip.destination} — ${trip.title}`}
                  fill
                  sizes="100vw"
                  className="z-0 object-cover"
                  priority={i === 0}
                />
                <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/40 via-50% to-transparent" />

                <div className="relative z-20 flex h-full max-w-xl flex-col justify-end p-6 text-white sm:p-10 md:p-14">
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      {discount ? `${discount}% OFF` : 'Promoção'}
                    </span>
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                      {tripDateLabel(trip)} · {trip.duration}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold leading-tight md:text-4xl">{trip.title}</h3>
                  <p className="mb-5 line-clamp-2 text-sm text-white/85 md:text-base">{trip.description}</p>

                  {trip.price && (
                    <div className="mb-6 text-white">
                      {trip.originalPrice && (
                        <p className="text-sm font-medium text-white line-through">{formatBRL(trip.originalPrice)}</p>
                      )}
                      <p className="text-3xl font-extrabold text-white md:text-4xl">
                        {formatBRL(trip.price)}
                        {trip.perPerson && (
                          <span className="ml-1 text-base font-medium text-white">/pessoa</span>
                        )}
                      </p>
                      {trip.installments && trip.installmentValue && (
                        <p className="text-sm font-medium text-white">
                          ou {trip.installments}x de {formatBRL(trip.installmentValue)}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/viagens/${trip.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-opacity-90"
                    >
                      Ver oferta
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a
                      href={generateWhatsAppLink(WHATSAPP_MESSAGES.tripReserve(trip.title))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Reservar no WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
          </div>
        </div>

        {promos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Promoção anterior"
              className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg ring-1 ring-black/10 transition-all hover:bg-gray-50 md:flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Próxima promoção"
              className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg ring-1 ring-black/10 transition-all hover:bg-gray-50 md:flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {promos.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {promos.map((trip, i) => (
            <button
              key={trip.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para ${trip.title}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-orange-500' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </Section>
  )
}
