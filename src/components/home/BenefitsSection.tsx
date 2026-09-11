import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { ClipboardCheck, HeartHandshake, CreditCard, Users, Map, Bus } from 'lucide-react'

// Diferenciais identificados nas publicações públicas da Luzy Tour
const benefits = [
  {
    id: '1',
    icon: ClipboardCheck,
    title: 'Roteiros planejados',
    description: 'Passeios com programação, horários, itens inclusos e valores apresentados com clareza.',
  },
  {
    id: '2',
    icon: HeartHandshake,
    title: 'Atendimento personalizado',
    description: 'Atendimento humanizado pelo WhatsApp, com reservas e dúvidas no mesmo canal.',
  },
  {
    id: '3',
    icon: CreditCard,
    title: 'Ônibus executivo',
    description: 'Transporte executivo completo, pulseira de identificação e translado aos passeios.',
  },
  {
    id: '4',
    icon: Users,
    title: 'Cadastur e coordenador',
    description: 'Agência cadastrada e coordenador de grupo em todas as excursões divulgadas.',
  },
  {
    id: '5',
    icon: Map,
    title: 'Guias e experiências locais',
    description: 'Experiências regionais com gastronomia, cultura, natureza e lazer.',
  },
  {
    id: '6',
    icon: Bus,
    title: 'Saídas de Salvador e região',
    description: 'Embarques em Salvador, Camaçari, Feira de Santana, Santo Estevão e Dias d’Ávila.',
  },
]

export const BenefitsSection: React.FC = () => {
  return (
    <Section className="bg-[#1B4F82]/[0.045]">
      <SectionTitle
        eyebrow="Por que a Luzy Tour"
        title="Por que viajar com a Luzy Tour?"
        subtitle="Os diferenciais que fazem cada viagem valer a pena."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ id, icon: Icon, title, description }, i) => (
          <Reveal key={id} delay={i * 0.06}>
            <Card className="h-full p-8 transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
                <Icon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
