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
    'Confira excursões, bate-voltas e pacotes da Luzy Tour. Veja datas, valores e fale conosco pelo WhatsApp.',
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
            subtitle="Excursões, bate-voltas, passeio de escuna e pacotes com aéreo — informações publicadas pela agência."
          />
          <TripsExplorer trips={trips} />
        </Section>
      </main>
      <Footer />
    </>
  )
}
