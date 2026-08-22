'use client'

import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { generateWhatsAppLink } from '@/config/contact'
import { Briefcase, Ticket, Bus, MapPin, Calendar } from 'lucide-react'
import clsx from 'clsx'

type SearchTab = 'passeios' | 'fretamento' | 'eventos' | 'destinos'

const TABS: { id: SearchTab; label: string; icon: typeof Briefcase }[] = [
  { id: 'passeios', label: 'Passeios', icon: Briefcase },
  { id: 'fretamento', label: 'Fretamento', icon: Bus },
  { id: 'eventos', label: 'Eventos', icon: Ticket },
  { id: 'destinos', label: 'Destinos', icon: MapPin },
]

const TAB_LABELS: Record<SearchTab, string> = {
  passeios: 'Passeios',
  fretamento: 'Fretamento',
  eventos: 'Eventos',
  destinos: 'Destinos',
}

const PLACEHOLDERS: Record<SearchTab, { destination: string; departure: string }> = {
  passeios: {
    destination: 'Ex.: Gramado, Termas Romanas, Rivera...',
    departure: 'Ex.: Maratá, Brochier, Montenegro',
  },
  fretamento: {
    destination: 'Conte o destino ou tipo de evento',
    departure: 'Cidade de saída',
  },
  eventos: {
    destination: 'Ex.: show, feira, evento corporativo...',
    departure: 'Ex.: Maratá, Brochier, Montenegro',
  },
  destinos: {
    destination: 'Ex.: Serra Gaúcha, Itá, Rivera...',
    departure: 'Ex.: Maratá, Brochier, Montenegro',
  },
}

interface TravelSearchData {
  destination: string
  departureCity: string
  date: string
}

const inputClass =
  'w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-800'

export const TravelSearchSection: React.FC = () => {
  const reduce = useReducedMotion()
  const [tab, setTab] = useState<SearchTab>('passeios')
  const [formData, setFormData] = useState<TravelSearchData>({
    destination: '',
    departureCity: '',
    date: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const dateLabel = formData.date
      ? new Date(`${formData.date}T00:00:00`).toLocaleDateString('pt-BR')
      : 'A combinar'

    const message = `Olá! Gostaria de solicitar um orçamento de ${TAB_LABELS[tab].toLowerCase()}:
- Destino ou roteiro: ${formData.destination}
- Cidade de embarque: ${formData.departureCity}
- Data: ${dateLabel}`

    window.open(generateWhatsAppLink(message), '_blank')
  }

  return (
    <section className="relative z-20 -mt-24 px-4 pb-6 sm:-mt-28 sm:px-6 lg:-mt-32 lg:px-8">
      <motion.div
        className="mx-auto max-w-6xl rounded-2xl bg-white px-5 py-6 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.22)] sm:px-8 sm:py-8"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-6 flex border-b border-gray-100">
          {TABS.map(({ id, label, icon: Icon }) => {
            const active = tab === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={clsx(
                  'flex min-w-0 flex-1 items-center justify-center gap-1.5 border-b-2 px-1 py-3 text-xs font-semibold transition-colors sm:gap-2 sm:px-4 sm:text-sm',
                  active
                    ? 'border-blue-800 text-blue-800'
                    : 'border-transparent text-gray-400 hover:text-blue-800'
                )}
              >
                <Icon className="hidden h-4 w-4 sm:block" />
                <span className="truncate">{label}</span>
              </button>
            )
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 items-end gap-4 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.9fr_auto]"
        >
          <div>
            <label htmlFor="destination" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Destino ou roteiro
            </label>
            <input
              id="destination"
              type="text"
              name="destination"
              placeholder={PLACEHOLDERS[tab].destination}
              value={formData.destination}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="departureCity" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Cidade de embarque
            </label>
            <input
              id="departureCity"
              type="text"
              name="departureCity"
              placeholder={PLACEHOLDERS[tab].departure}
              value={formData.departureCity}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-400">
              Data
            </label>
            <div className="relative">
              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={clsx(inputClass, 'date-input-custom pr-10')}
              />
              <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <button
            type="submit"
            className="h-[48px] rounded-lg bg-blue-800 px-6 text-sm font-bold text-white transition-all hover:bg-blue-900 lg:min-w-[200px]"
          >
            Solicitar orçamento
          </button>
        </form>
      </motion.div>
    </section>
  )
}
