import { Section } from '@/components/ui/Layout'
import { Reveal } from '@/components/ui/Reveal'
import { AboutImageSlider } from '@/components/home/AboutImageSlider'
import { WHATSAPP_MESSAGES, generateWhatsAppLink } from '@/config/contact'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const AboutSection: React.FC = () => {
  return (
    <Section id="sobre">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Reveal>
          <AboutImageSlider />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center md:text-left">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Sobre a Live Tur
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Realizamos sonhos desde 2004</h2>

            <p className="mb-4 text-lg text-gray-600">
              A Live Tur é uma agência de turismo que planeja cada viagem com carinho, dedicação e
              compromisso — transformando sonhos em momentos inesquecíveis. Ver nossos clientes
              felizes é a certeza de que estamos no caminho certo.
            </p>

            <p className="mb-8 text-lg text-gray-600">
              De cruzeiros e pacotes nacionais a roteiros internacionais e viagens religiosas,
              cuidamos de cada detalhe com acompanhamento da nossa equipe do início ao fim.
            </p>

            <a
              href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fale com a nossa equipe
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
