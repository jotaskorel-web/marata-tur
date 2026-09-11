// Type definitions for the Luzy Tour application

export interface Destination {
  id: string
  slug: string
  title: string
  state: string
  country: string
  description: string
  image: string
  featured: boolean
  region?: string
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  highlights?: string[]
}

export type TripCategory =
  | 'cruzeiro'
  | 'nacional'
  | 'internacional'
  | 'religioso'
  | 'excursao'
  | 'praia'

export interface Trip {
  id: string
  slug: string
  title: string
  destination: string
  departureCity: string
  /** Cidades de saída adicionais, quando houver mais de um embarque */
  departureCities?: string[]
  startDate: string
  endDate?: string
  /** Data já formatada para exibição quando a data exata não é pública */
  dateLabel?: string
  duration: string
  image: string
  /** Arte oficial da oferta, usada em banners promocionais quando diferente da capa */
  posterImage?: string
  gallery?: string[]
  description: string
  highlights?: string[]
  included?: string[]
  notIncluded?: string[]
  itinerary?: ItineraryDay[]
  category: TripCategory
  featured: boolean
  /** Valor à vista por pessoa (R$) */
  price?: number
  /** Preço "de" para promoções (R$) */
  originalPrice?: number
  /** Número de parcelas */
  installments?: number
  /** Valor de cada parcela (R$) */
  installmentValue?: number
  /** Entrada / sinal (R$) */
  entryValue?: number
  perPerson?: boolean
  /** Contexto do valor principal, como "adulto" ou "apartamento duplo" */
  priceLabel?: string
  /** Demais faixas de preço divulgadas na publicação oficial */
  priceDetails?: string[]
  /** Link para a publicação original no Instagram */
  sourceUrl?: string
  /** Marca promoção relâmpago / vagas limitadas */
  promo?: boolean
}

export interface Testimonial {
  id: string
  name: string
  /** Texto público (repost/legenda) — sem notas fictícias */
  text: string
  destination?: string
  /** Link para a publicação original no Instagram */
  sourceUrl?: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: 'destinations' | 'tips' | 'itineraries' | 'documentation' | 'tourism' | 'news'
  date: string
  author: string
  readTime: number
}

export interface SocialPost {
  id: string
  image: string
  caption: string
  url: string
}
