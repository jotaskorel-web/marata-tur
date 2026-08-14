import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section, Grid } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Card, ImagePlaceholder, Badge } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { destinations } from '@/data'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Destinos',
  description:
    'Explore todos os destinos da Live Tur — do litoral brasileiro às serras de MG e SP e ao exterior. Viagens nacionais e internacionais.',
}

export default function DestinosPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-28">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Destinos' }]} />
          <SectionTitle
            eyebrow="Nossos destinos"
            title="Para onde a Live Tur pode te levar"
            subtitle="Destinos reais dos nossos roteiros — escolha o seu e fale com a gente."
          />

          <Grid cols={3}>
            {destinations.map((destination, i) => (
              <Reveal key={destination.id} delay={i * 0.06}>
                <Card className="group h-full">
                  <Link href={`/destinos/${destination.slug}`} className="relative block h-64 overflow-hidden">
                    <ImagePlaceholder src={destination.image} alt={destination.title} aspectRatio="auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge variant="primary" className="absolute right-4 top-4">
                      {destination.state}
                    </Badge>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs text-gray-200">{destination.country}</p>
                      <h3 className="text-xl font-bold drop-shadow">{destination.title}</h3>
                    </div>
                  </Link>
                  <div className="p-6">
                    <p className="mb-4 text-sm text-gray-600">{destination.description}</p>
                    <Link
                      href={`/destinos/${destination.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 transition-all hover:gap-2"
                    >
                      Conhecer
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>
      </main>
      <Footer />
    </>
  )
}
