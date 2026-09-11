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
              Sobre a Luzy Tour
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Viajar é preciso</h2>

            <p className="mb-4 text-lg text-gray-600">
              A Luzy Tour é uma agência de excursões de Salvador que leva grupos à Chapada
              Diamantina, ao litoral baiano, a Maragogi, Natal e até à neve no Chile.
            </p>

            <p className="mb-8 text-lg text-gray-600">
              Trabalhamos com ônibus executivo, coordenador de grupo, Cadastur e saídas de
              Salvador, Camaçari, Feira de Santana, Santo Estevão e Dias d&apos;Ávila.
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
