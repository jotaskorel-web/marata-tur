'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Container } from '@/components/ui/Layout'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { WHATSAPP_MESSAGES, generateWhatsAppLink } from '@/config/contact'
import clsx from 'clsx'
import { BrandLogo } from '@/components/ui/BrandLogo'

const navigationLinks = [
  { label: 'Início', href: '/' },
  { label: 'Destinos', href: '/destinos' },
  { label: 'Excursões', href: '/viagens' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre nós', href: '/sobre' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const getScrollY = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0

    const handleScroll = () => setIsScrolled(getScrollY() > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Fundo sólido também quando o menu mobile está aberto
  const solid = isScrolled || isOpen

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        solid
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-gradient-to-b from-black/40 to-transparent py-5'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Maratá Tur — página inicial">
            <span
              className={clsx(
                'relative block transition-all',
                !solid && 'rounded-md bg-white/95 px-3 py-2'
              )}
            >
              <BrandLogo />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  'relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full',
                  solid ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={generateWhatsAppLink(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="header-whatsapp-cta hidden sm:inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold !text-white transition-all hover:!bg-orange-500 hover:!text-white hover:brightness-110 hover:shadow-md"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com a Maratá Tur
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={clsx(
                'lg:hidden rounded-lg p-2 transition-colors',
                solid ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              )}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={clsx(
            'lg:hidden overflow-hidden transition-[max-height,opacity] duration-300',
            isOpen ? 'max-h-[32rem] opacity-100 mt-4' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col gap-1 border-t border-gray-200 pt-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={generateWhatsAppLink(WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="header-whatsapp-cta mt-2 flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-center font-semibold !text-white transition-all hover:!bg-orange-500 hover:!text-white hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com a Maratá Tur
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}
