'use client'

import Link from 'next/link'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Card, ImagePlaceholder, Badge } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { CardsCarousel } from '@/components/ui/CardsCarousel'
import { destinations } from '@/data'
import { ArrowRight } from 'lucide-react'

export const DestinationsSection: React.FC = () => {
  const items = destinations.filter((destination) => destination.featured)

  return (
    <Section id="destinations" className="bg-gradient-to-b from-[#1B4F82]/[0.06] to-transparent">
      <SectionTitle
        eyebrow="Destinos em destaque"
        title="Seu próximo destino começa aqui"
        subtitle="Da Chapada Diamantina às praias do Nordeste — conheça os roteiros divulgados pela Luzy Tour."
      />

      <div className="mb-12">
        <CardsCarousel
          items={items}
          getKey={(destination) => destination.id}
          ariaLabel="Destinos em destaque"
          prevLabel="Destinos anteriores"
          nextLabel="Próximos destinos"
          renderItem={(destination) => (
            <Card className="group flex h-full w-full flex-col !shadow-md hover:!shadow-lg">
              <Link href={`/destinos/${destination.slug}`} className="relative block h-64 overflow-hidden">
                <ImagePlaceholder src={destination.image} alt={`Vista de ${destination.title}`} aspectRatio="auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <Badge variant="primary" className="absolute right-4 top-4">
                  {destination.state}
                </Badge>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white drop-shadow">
                  {destination.title}
                </h3>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-4 line-clamp-3 flex-1 text-sm text-gray-600">{destination.description}</p>
                <Link
                  href={`/destinos/${destination.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:gap-2 transition-all"
                >
                  Conhecer
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          )}
        />
      </div>

      <div className="text-center">
        <Button href="/destinos" variant="primary" size="lg">
          Ver todos os destinos
        </Button>
      </div>
    </Section>
  )
}
