import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { TripsExplorer } from '@/components/trips/TripsExplorer'
import { trips } from '@/data'

export const metadata: Metadata = {
  title: 'Próximas viagens, pacotes e excursões',
  description:
    'Confira cruzeiros, pacotes nacionais e internacionais, excursões e viagens religiosas da Live Tur. Filtre por categoria e fale conosco pelo WhatsApp.',
}

export default function ViagensPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-28">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Viagens' }]} />
          <SectionTitle
            eyebrow="Próximas viagens"
            title="Escolha a sua próxima experiência"
            subtitle="Cruzeiros, pacotes, excursões e roteiros internacionais — filtre por categoria e encontre a viagem ideal."
          />
          <TripsExplorer trips={trips} />
        </Section>
      </main>
      <Footer />
    </>
  )
}
