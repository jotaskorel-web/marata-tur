'use client'

import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { generateWhatsAppLink } from '@/config/contact'

const subjects = [
  { value: 'Informações sobre pacotes', label: 'Informações sobre pacotes' },
  { value: 'Reserva de viagem', label: 'Reserva de viagem' },
  { value: 'Solicitação de orçamento', label: 'Solicitação de orçamento' },
  { value: 'Outro assunto', label: 'Outro assunto' },
]

export const ContactForm: React.FC = () => {
  const [data, setData] = useState({ name: '', whatsapp: '', email: '', subject: '', message: '' })

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Vim pelo site da Maratá Tur.
*Nome:* ${data.name}
*WhatsApp:* ${data.whatsapp}
*E-mail:* ${data.email}
*Assunto:* ${data.subject || 'Não informado'}
*Mensagem:* ${data.message}`
    window.open(generateWhatsAppLink(message), '_blank')
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Nome completo *
          </label>
          <input id="name" name="name" required value={data.name} onChange={update} className={inputClass} placeholder="Seu nome" />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-gray-700">
            WhatsApp *
          </label>
          <input id="whatsapp" name="whatsapp" type="tel" required value={data.whatsapp} onChange={update} className={inputClass} placeholder="(51) 99999-9999" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
          E-mail *
        </label>
        <input id="email" name="email" type="email" required value={data.email} onChange={update} className={inputClass} placeholder="seu@email.com" />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
          Assunto *
        </label>
        <select id="subject" name="subject" required value={data.subject} onChange={update} className={inputClass}>
          <option value="">Selecione um assunto</option>
          {subjects.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Mensagem *
        </label>
        <textarea id="message" name="message" required rows={5} value={data.message} onChange={update} className={inputClass} placeholder="Conte para onde quer viajar, datas e número de pessoas..." />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
      >
        <Send className="h-5 w-5" />
        Enviar pelo WhatsApp
      </button>
      <p className="text-center text-sm text-gray-500">
        Ao enviar, abriremos o WhatsApp com a sua mensagem já preenchida.
      </p>
    </form>
  )
}
