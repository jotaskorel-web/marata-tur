'use client'

import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { CardsCarousel } from '@/components/ui/CardsCarousel'
import { testimonials } from '@/data'
import { Quote, Instagram } from 'lucide-react'

export const TestimonialsSection: React.FC = () => {
  return (
    <Section id="depoimentos" className="bg-gray-100">
      <SectionTitle
        eyebrow="Depoimentos"
        title="Quem viaja com a Luzy Tour conta melhor essa história"
        subtitle="Falas reais publicadas por clientes e viajantes nas nossas redes sociais."
      />

      <CardsCarousel
        items={testimonials}
        getKey={(testimonial) => testimonial.id}
        ariaLabel="Depoimentos de viajantes"
        prevLabel="Depoimentos anteriores"
        nextLabel="Próximos depoimentos"
        loop
        className="px-12 lg:px-5"
        renderItem={(testimonial) => (
          <article className="flex h-full min-h-[300px] w-full flex-col rounded-2xl bg-white p-6 text-center shadow-lg ring-1 ring-black/10 md:min-h-[320px] md:p-7 md:text-left">
            <Quote className="mx-auto mb-4 h-8 w-8 shrink-0 text-orange-500 md:mx-0" strokeWidth={1.75} />
            <p className="mb-6 flex-1 text-sm italic leading-relaxed text-gray-800 md:text-base">
              &ldquo;{testimonial.text}&rdquo;
            </p>
            <div className="mt-auto border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              {testimonial.destination && (
                <p className="text-sm text-gray-500">{testimonial.destination}</p>
              )}
              {testimonial.sourceUrl && (
                <a
                  href={testimonial.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-1 text-xs font-medium text-orange-500 hover:text-orange-600 md:justify-start"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  Ver publicação
                </a>
              )}
            </div>
          </article>
        )}
      />
    </Section>
  )
}
