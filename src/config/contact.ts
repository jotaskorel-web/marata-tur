// Configuração central de contato da Live Tur.
// Todos os CTAs de WhatsApp do site devem usar generateWhatsAppLink() daqui —
// nunca espalhar números soltos pelos componentes.

export const CONTACT = {
  // Números reais divulgados no Instagram @live.tur
  whatsappPrimary: '5583991577779', // (83) 99157-7779
  whatsappSecondary: '5583991144230', // (83) 99114-4230
  phoneDisplay: '(83) 99157-7779',
  phoneSecondaryDisplay: '(83) 99114-4230',
  instagram: '@live.tur',
  instagramUrl: 'https://www.instagram.com/live.tur',
  email: 'contato@livetur.com.br',
  address: {
    city: 'Areia',
    state: 'PB',
    country: 'Brasil',
  },
  // Cidades de saída recorrentes das excursões
  departureCities: ['Areia', 'Alagoa Grande', 'João Pessoa', 'Recife', 'Rio de Janeiro'],
  businessHours: {
    weekday: '08:00 - 18:00',
    saturday: '08:00 - 12:00',
    sunday: 'Fechado',
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
  hero: 'Olá! Conheci a Live Tur pelo site e gostaria de conhecer os pacotes e próximas viagens.',
  general: 'Olá! Conheci a Live Tur pelo site e gostaria de informações sobre os serviços.',
  quotation:
    'Olá! Gostaria de solicitar um orçamento de viagem com a Live Tur.',
  destination: (destination: string) =>
    `Olá! Estava vendo o destino ${destination} no site da Live Tur e gostaria de mais informações.`,
  trip: (destination: string, date?: string) =>
    `Olá! Vi no site da Live Tur a viagem para ${destination}${
      date ? ` (${date})` : ''
    } e gostaria de receber mais informações.`,
  tripReserve: (title: string) =>
    `Olá! Vi no site da Live Tur a viagem "${title}" e gostaria de reservar / receber mais informações.`,
}

/** Formata um valor em reais no padrão brasileiro. */
export const formatBRL = (value: number): string =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
