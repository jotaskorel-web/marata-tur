// Configuração central de contato da Maratá Tur.
// Todos os CTAs de WhatsApp do site devem usar generateWhatsAppLink() daqui —
// nunca espalhar números soltos pelos componentes.

export const CONTACT = {
  // Números divulgados nas publicações e na bio pública do Instagram @marata_tur
  whatsappPrimary: '5551999279029', // (51) 99927-9029
  whatsappSecondary: '5551993360513', // (51) 99336-0513
  phoneDisplay: '(51) 99927-9029',
  phoneSecondaryDisplay: '(51) 99336-0513',
  instagram: '@marata_tur',
  instagramUrl: 'https://www.instagram.com/marata_tur/',
  address: {
    city: 'Maratá',
    state: 'RS',
    country: 'Brasil',
  },
  // Cidades de saída recorrentes das excursões
  departureCities: ['Maratá', 'Brochier', 'Montenegro'],
  businessHours: {
    note: 'Consulte a disponibilidade pelo WhatsApp',
  },
} as const

/**
 * Gera um link de WhatsApp (wa.me) com a mensagem já preenchida.
 * @param message Texto que será enviado.
 * @param phone Número no formato internacional (padrão: número principal).
 */
export const generateWhatsAppLink = (
  message: string,
  phone: string = CONTACT.whatsappPrimary
): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

// Mensagens contextualizadas por origem — ajudam a rastrear de onde vem o lead.
export const WHATSAPP_MESSAGES = {
  hero: 'Olá! Conheci a Maratá Tur pelo site e gostaria de conhecer os passeios e próximas viagens.',
  general: 'Olá! Conheci a Maratá Tur pelo site e gostaria de informações sobre os serviços.',
  quotation:
    'Olá! Gostaria de solicitar um orçamento de fretamento ou viagem com a Maratá Tur.',
  destination: (destination: string) =>
    `Olá! Estava vendo o destino ${destination} no site da Maratá Tur e gostaria de mais informações.`,
  trip: (destination: string, date?: string) =>
    `Olá! Vi no site da Maratá Tur a viagem para ${destination}${
      date ? ` (${date})` : ''
    } e gostaria de receber mais informações.`,
  tripReserve: (title: string) =>
    `Olá! Vi no site da Maratá Tur a viagem "${title}" e gostaria de reservar ou receber mais informações.`,
}

/** Formata um valor em reais no padrão brasileiro. */
export const formatBRL = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
