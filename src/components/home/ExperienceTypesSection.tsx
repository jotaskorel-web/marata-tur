import Link from 'next/link'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Card, ImagePlaceholder } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { PHOTOS } from '@/data/photos'

const experienceTypes = [
  { id: '1', title: 'Excursões', description: 'Chapada, Itacaré, Aracaju e mais', image: PHOTOS.chapada },
  { id: '2', title: 'Bate-voltas', description: 'Passeios de um dia saindo de Salvador', image: PHOTOS.salvador },
  { id: '3', title: 'Passeio de escuna', description: 'Ilha dos Frades e Itaparica', image: PHOTOS.ilhaDosFrades },
  { id: '4', title: 'Praias do Nordeste', description: 'Maragogi, Maceió, Natal e MSP', image: PHOTOS.maragogi },
  { id: '5', title: 'Natureza e chapada', description: 'Cachoeiras, grutas e mirantes', image: PHOTOS.pocoAzul },
  { id: '6', title: 'Pacotes aéreos', description: 'Natal, Foz do Iguaçu e Chile', image: PHOTOS.chile },
]

export const ExperienceTypesSection: React.FC = () => {
  return (
    <Section className="bg-gradient-to-b from-orange-500/10 to-transparent">
      <SectionTitle
        eyebrow="Tipos de experiência"
        title="Que tipo de viagem você quer viver?"
        subtitle="A Luzy Tour oferece excursões, bate-voltas, passeio de escuna e pacotes com aéreo."
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
