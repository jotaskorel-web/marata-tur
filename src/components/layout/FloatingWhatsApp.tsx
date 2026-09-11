'use client'

import React, { useEffect, useState } from 'react'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

/**
 * Botão flutuante de WhatsApp, principal canal de conversão. Aparece após um
 * leve scroll e tem destaque no mobile.
 */
export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const getScrollY = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0

    const onScroll = () => setVisible(getScrollY() > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <a
      href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Luzy Tour no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
