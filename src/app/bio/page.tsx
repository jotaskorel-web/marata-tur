import type { Metadata } from 'next'
import Image from 'next/image'
import {
  MapPin,
  Plane,
  MessageCircle,
  Star,
  Instagram,
  Globe,
  ChevronRight,
} from 'lucide-react'
import { CONTACT, generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'

export const metadata: Metadata = {
  title: 'Links — Live Tur',
  description: 'Todos os links da Live Tur em um só lugar: viagens, destinos, WhatsApp e Instagram.',
  robots: 'index, follow',
}

const links = [
  {
    icon: Plane,
    emoji: '🌎',
    label: 'Conheça nossas próximas viagens',
    href: '/viagens',
    external: false,
  },
  {
    icon: MapPin,
    emoji: '📍',
    label: 'Nossos destinos',
    href: '/destinos',
    external: false,
  },
  {
    icon: Star,
    emoji: '⭐',
    label: 'Depoimentos dos clientes',
    href: '/#depoimentos',
    external: false,
  },
  {
    icon: Globe,
    emoji: '🌐',
    label: 'Acesse nosso site completo',
    href: '/',
    external: false,
  },
]

export default function BioPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center bg-gradient-to-b from-orange-500/10 via-white to-white px-5 py-10">
      <div className="flex w-full max-w-md flex-1 flex-col">
        {/* Cabeçalho */}
        <div className="mb-8 text-center">
          <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
            <Image src="/livetur.png" alt="Live Tur" fill sizes="80px" className="object-contain p-2" priority />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Live Tur</h1>
          <p className="mt-1 text-sm font-medium text-orange-500">@live.tur</p>
          <p className="mx-auto mt-3 max-w-xs text-sm text-gray-600">
            Realizamos sonhos desde 2004 · Cruzeiros, pacotes e excursões nacionais e internacionais.
          </p>
        </div>

        {/* WhatsApp em destaque */}
        <a
          href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-3 flex items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="flex-1 font-semibold">💬 Fale conosco pelo WhatsApp</span>
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Demais links */}
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-500/40 hover:shadow-md active:translate-y-0"
            >
              <link.icon className="h-5 w-5 text-orange-500" />
              <span className="flex-1 font-medium">
                {link.emoji} {link.label}
              </span>
              <ChevronRight className="h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-500" />
            </a>
          ))}
        </div>

        {/* Instagram */}
        <a
          href={CONTACT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-4 text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
        >
          <Instagram className="h-6 w-6" />
          <span className="flex-1 font-semibold">📸 Instagram @live.tur</span>
          <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Rodapé */}
        <div className="mt-auto pt-10 text-center text-xs text-gray-500">
          <p>{CONTACT.phoneDisplay} · {CONTACT.phoneSecondaryDisplay}</p>
          <p className="mt-1">
            {CONTACT.address.city}, {CONTACT.address.state}
          </p>
        </div>
      </div>
    </div>
  )
}
