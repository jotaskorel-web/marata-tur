// Configuração central de contato da Luzy Tour.
// Todos os CTAs de WhatsApp do site devem usar generateWhatsAppLink() daqui —
// nunca espalhar números soltos pelos componentes.

export const CONTACT = {
  // Número divulgado na bio pública do Instagram @luzytour
  whatsappPrimary: '5571991855015', // (71) 99185-5015
  phoneDisplay: '(71) 99185-5015',
  instagram: '@luzytour',
  instagramUrl: 'https://www.instagram.com/luzytour/',
  slogan: 'Viajar é Preciso!',
  address: {
    city: 'Salvador',
    state: 'BA',
    country: 'Brasil',
  },
  departureCities: ['Salvador', 'Camaçari', 'Feira de Santana', 'Santo Estevão', "Dias d'Ávila"],
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
  hero: 'Olá! Conheci a Luzy Tour pelo site e gostaria de conhecer as excursões e próximas viagens.',
  general: 'Olá! Conheci a Luzy Tour pelo site e gostaria de informações sobre os passeios.',
  quotation:
    'Olá! Gostaria de solicitar um orçamento de excursão ou viagem com a Luzy Tour.',
  destination: (destination: string) =>
    `Olá! Estava vendo o destino ${destination} no site da Luzy Tour e gostaria de mais informações.`,
  trip: (destination: string, date?: string) =>
    `Olá! Vi no site da Luzy Tour a viagem para ${destination}${
      date ? ` (${date})` : ''
    } e gostaria de receber mais informações.`,
  tripReserve: (title: string) =>
    `Olá! Vi no site da Luzy Tour a viagem "${title}" e gostaria de reservar ou receber mais informações.`,
}

/** Formata um valor em reais no padrão brasileiro. */
export const formatBRL = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
