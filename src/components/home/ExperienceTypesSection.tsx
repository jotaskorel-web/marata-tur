import Link from 'next/link'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Card, ImagePlaceholder } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'

// Tipos de experiências divulgados pela Maratá Tur
const experienceTypes = [
  { id: '1', title: 'Passeios de um dia', description: 'Cultura, gastronomia e natureza', image: '/images/marata/rota-das-lavandas.jpg' },
  { id: '2', title: 'Termas e resorts', description: 'Hospedagem, lazer e pensão completa', image: '/images/marata/termas-romanas.jpg' },
  { id: '3', title: 'Experiências regionais', description: 'Roteiros especiais pelo Sul do Brasil', image: '/images/marata/percorsi-anta-gorda.jpg' },
  { id: '4', title: 'Viagens em grupo', description: 'Novos lugares e boas companhias', image: '/images/marata/cambara-do-sul.jpg' },
  { id: '5', title: 'Transporte para eventos', description: 'Shows, feiras e eventos', image: '/images/marata/universo-alegria.jpg' },
  { id: '6', title: 'Fretamento', description: 'Transporte para seu grupo ou empresa', image: '/images/marata/logo-marata-tur.jpg' },
]

export const ExperienceTypesSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-orange-500/5 to-white">
      <SectionTitle
        eyebrow="Tipos de experiência"
        title="Que tipo de viagem você quer viver?"
        subtitle="A Maratá Tur oferece passeios, viagens em grupo, transporte para eventos e fretamento."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {experienceTypes.map((type, i) => (
          <Reveal key={type.id} delay={i * 0.06}>
            <Link href="/viagens">
              <Card className="group relative h-56 overflow-hidden">
                <ImagePlaceholder src={type.image} alt={type.title} aspectRatio="auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-colors group-hover:from-black/85" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-lg font-bold">{type.title}</h3>
                  <p className="text-sm text-gray-200">{type.description}</p>
                </div>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
