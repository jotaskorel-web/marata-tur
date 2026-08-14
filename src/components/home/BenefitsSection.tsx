import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { ClipboardCheck, HeartHandshake, CreditCard, Users, Map, Bus } from 'lucide-react'

// Diferenciais reais identificados nas publicações da Live Tur
const benefits = [
  {
    id: '1',
    icon: ClipboardCheck,
    title: 'Roteiros planejados',
    description: 'Pacotes completos com hotéis, city tours e taxas inclusas — é só embarcar.',
  },
  {
    id: '2',
    icon: HeartHandshake,
    title: 'Atendimento personalizado',
    description: 'Cada viagem é planejada com carinho e dedicação para o seu perfil.',
  },
  {
    id: '3',
    icon: CreditCard,
    title: 'Parcelamento facilitado',
    description: 'Entrada baixa e parcelamento no cartão e no PIX para caber no seu bolso.',
  },
  {
    id: '4',
    icon: Users,
    title: 'Acompanhamento na viagem',
    description: 'A equipe Live Tur acompanha o grupo do início ao fim da jornada.',
  },
  {
    id: '5',
    icon: Map,
    title: 'Guias e experiências locais',
    description: 'Guias credenciados e experiências autênticas em cada destino.',
  },
  {
    id: '6',
    icon: Bus,
    title: 'Saídas de várias cidades',
    description: 'Embarques de Areia, Alagoa Grande, João Pessoa, Recife e Rio de Janeiro.',
  },
]

export const BenefitsSection: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <SectionTitle
        eyebrow="Por que a Live Tur"
        title="Por que viajar com a Live Tur?"
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
