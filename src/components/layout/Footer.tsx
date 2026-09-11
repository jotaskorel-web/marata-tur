import React from 'react'
import Link from 'next/link'
import { Instagram, MapPin, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Layout'
import { CONTACT, generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { BrandLogo } from '@/components/ui/BrandLogo'

const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Destinos', href: '/destinos' },
  { label: 'Excursões', href: '/viagens' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre nós', href: '/sobre' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

const destinationLinks = [
  { label: 'Chapada Diamantina', href: '/destinos/chapada-diamantina' },
  { label: 'Itacaré', href: '/destinos/itacare' },
  { label: 'Ilha dos Frades', href: '/destinos/ilha-dos-frades' },
  { label: 'Maragogi', href: '/destinos/maragogi' },
  { label: 'Natal', href: '/destinos/natal' },
]

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-gray-100">
      <div className="border-b border-gray-800">
        <Container className="py-12">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">
            {/* Marca */}
            <div>
              <BrandLogo className="mb-5" />
              <p className="mb-4 text-gray-400">
                Excursões, bate-voltas e passeio de escuna saindo de Salvador e região.
                Cadastur e atendimento humanizado.
              </p>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-300 transition-colors hover:bg-orange-500 hover:text-white"
                aria-label="Instagram da Luzy Tour"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Navegação</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 transition-colors hover:text-orange-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinos */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Destinos</h4>
              <ul className="space-y-2">
                {destinationLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 transition-colors hover:text-orange-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start justify-center gap-2 md:justify-start">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <div className="flex flex-col">
                    <a
                      href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-colors hover:text-orange-500"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start justify-center gap-2 md:justify-start">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <span className="text-gray-400">
                    {CONTACT.address.city}, {CONTACT.address.state} — {CONTACT.address.country}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
          <p>&copy; {currentYear} Luzy Tour. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/privacidade" className="hover:text-orange-500">
              Política de Privacidade
            </Link>
            <Link href="/termos" className="hover:text-orange-500">
              Termos de Uso
            </Link>
            <Link href="/creditos-imagens" className="hover:text-orange-500">
              Créditos das imagens
            </Link>
          </div>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://qeel.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              QeeL Tech
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
