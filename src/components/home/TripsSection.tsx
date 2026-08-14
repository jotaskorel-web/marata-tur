'use client'

import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { CardsCarousel } from '@/components/ui/CardsCarousel'
import { TripCard } from '@/components/trips/TripCard'
import { trips } from '@/data'

export const TripsSection: React.FC = () => {
  const packages = [...trips].sort(
    (a, b) => Number(b.promo) - Number(a.promo) || Number(!!b.price) - Number(!!a.price)
  )

  return (
    <Section id="trips" className="bg-gray-50">
      <SectionTitle
        eyebrow="Próximas viagens"
        title="Embarque na sua próxima aventura"
        subtitle="Confira os pacotes, cruzeiros e excursões com saídas confirmadas e vagas limitadas."
      />

      <div className="mb-12">
        <CardsCarousel
          items={packages}
          getKey={(trip) => trip.id}
          ariaLabel="Pacotes de viagem"
          prevLabel="Pacotes anteriores"
          nextLabel="Próximos pacotes"
          renderItem={(trip) => <TripCard trip={trip} />}
        />
      </div>

      <div className="text-center">
        <Button href="/viagens" variant="primary" size="lg" className="!bg-blue-900 hover:!bg-blue-950 focus-visible:!outline-blue-900">
          Ver todas as viagens
        </Button>
      </div>
    </Section>
  )
}
