import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { ClipboardCheck, HeartHandshake, CreditCard, Users, Map, Bus } from 'lucide-react'

// Diferenciais identificados nas publicações públicas da Maratá Tur
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
    description: 'Contato direto com a equipe pelos dois canais oficiais de WhatsApp.',
  },
  {
    id: '3',
    icon: CreditCard,
    title: 'Transporte confortável',
    description: 'Ônibus de turismo e, em roteiros selecionados, veículos semi-leito climatizados.',
  },
  {
    id: '4',
    icon: Users,
    title: 'Acompanhamento na viagem',
    description: 'Guias Cadastur acompanham os grupos nos roteiros divulgados.',
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
    title: 'Saídas de várias cidades',
    description: 'Embarques recorrentes em Maratá, Brochier e Montenegro.',
  },
]

export const BenefitsSection: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <SectionTitle
        eyebrow="Por que a Maratá Tur"
        title="Por que viajar com a Maratá Tur?"
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
