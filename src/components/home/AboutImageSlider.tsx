'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PHOTOS } from '@/data/photos'

const SLIDES = [
  { src: PHOTOS.chapada, alt: 'Morro do Pai Inácio na Chapada Diamantina' },
  { src: PHOTOS.itacare, alt: 'Praia da Concha em Itacaré' },
  { src: PHOTOS.ilhaDosFrades, alt: 'Ilha dos Frades na Baía de Todos-os-Santos' },
  { src: PHOTOS.maragogi, alt: 'Praia do Peroba em Maragogi' },
  { src: PHOTOS.gunga, alt: 'Praia do Gunga em Alagoas' },
  { src: PHOTOS.fozIguacu, alt: 'Cataratas do Iguaçu' },
  { src: PHOTOS.salvador, alt: 'Farol da Barra ao entardecer em Salvador' },
]

const AUTOPLAY_MS = 5000

export const AboutImageSlider: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => goTo(index + 1), AUTOPLAY_MS)
    return () => window.clearInterval(timer)
  }, [goTo, index, paused])

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carrossel"
      aria-label="Fotos dos destinos da Luzy Tour"
    >
      <div
        className="flex h-[420px] transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SLIDES.map((slide, i) => (
          <div key={slide.src} className="relative h-full w-full flex-shrink-0" aria-hidden={i !== index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md transition-all hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Próxima foto"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md transition-all hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir para foto ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
