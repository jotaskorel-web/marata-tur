import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ContactForm } from '@/components/contact/ContactForm'
import { MessageCircle, MapPin, Clock, Instagram } from 'lucide-react'
import { CONTACT, generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'

export const metadata: Metadata = {
  title: 'Contato — fale com a Maratá Tur',
  description:
    'Fale com a Maratá Tur pelo WhatsApp, Instagram ou pelo formulário para reservar passeios e solicitar fretamentos.',
}

export default function ContatoPage() {
  type InfoItem = {
    icon: typeof MessageCircle
    title: string
    lines: { text: string; href?: string }[]
    note?: string
  }
  const infoItems: InfoItem[] = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      lines: [
        { text: CONTACT.phoneDisplay, href: generateWhatsAppLink(WHATSAPP_MESSAGES.general) },
        { text: CONTACT.phoneSecondaryDisplay, href: generateWhatsAppLink(WHATSAPP_MESSAGES.general, CONTACT.whatsappSecondary) },
      ],
      note: 'Resposta rápida e atendimento ágil',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      lines: [{ text: CONTACT.instagram, href: CONTACT.instagramUrl }],
      note: 'Acompanhe nossas viagens e promoções',
    },
    {
      icon: MapPin,
      title: 'Localização',
      lines: [{ text: `${CONTACT.address.city}, ${CONTACT.address.state} — ${CONTACT.address.country}` }],
      note: 'Embarques recorrentes em Maratá, Brochier e Montenegro',
    },
    {
      icon: Clock,
      title: 'Horário de atendimento',
      lines: [{ text: CONTACT.businessHours.note }],
    },
  ]

  return (
    <>
      <Header />
      <main>
        <Section className="pt-28">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Contato' }]} />
          <SectionTitle
            eyebrow="Contato"
            title="Vamos planejar a sua viagem?"
            subtitle="Estamos aqui para tirar suas dúvidas e montar o roteiro ideal para você."
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Info */}
            <div className="space-y-8 lg:col-span-1">
              {infoItems.map(({ icon: Icon, title, lines, note }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">{title}</h3>
                    {lines.map((line, i) =>
                      line.href ? (
                        <a
                          key={i}
                          href={line.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-medium text-orange-500 hover:underline"
                        >
                          {line.text}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-700">
                          {line.text}
                        </p>
                      )
                    )}
                    {note && <p className="mt-1 text-sm text-gray-500">{note}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-gray-50 p-8">
                <h3 className="mb-6 text-2xl font-bold">Envie uma mensagem</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
