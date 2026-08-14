import Link from 'next/link'
import { Card, ImagePlaceholder, Badge } from '@/components/ui/Card'
import { Trip } from '@/types'
import { formatBRL, generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react'

export const CATEGORY_LABELS: Record<Trip['category'], string> = {
  cruzeiro: 'Cruzeiro',
  nacional: 'Nacional',
  internacional: 'Internacional',
  religioso: 'Religioso',
  excursao: 'Excursão',
  praia: 'Praia',
}

function tripDateLabel(trip: Trip): string {
  if (trip.dateLabel) return trip.dateLabel
  if (!trip.startDate) return 'Consulte datas'
  const start = new Date(trip.startDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
  if (trip.endDate) {
    const end = new Date(trip.endDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
    return `${start} a ${end}`
  }
  return new Date(trip.startDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export const TripCard: React.FC<{ trip: Trip }> = ({ trip }) => {
  return (
    <Card className="group flex h-full flex-col">
      <Link href={`/viagens/${trip.slug}`} className="relative block h-52 overflow-hidden">
        <ImagePlaceholder src={trip.image} alt={trip.title} aspectRatio="auto" />
        <Badge variant="primary" className="absolute left-4 top-4">
          {CATEGORY_LABELS[trip.category]}
        </Badge>
        {trip.promo && (
          <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
            Promoção
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900">
          <Link href={`/viagens/${trip.slug}`} className="text-gray-900 hover:text-blue-900">
            {trip.title}
          </Link>
        </h3>

        <div className="mb-4 space-y-1.5 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 flex-shrink-0 text-blue-900" />
            <span className="line-clamp-1">{trip.destination}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 flex-shrink-0 text-blue-900" />
            <span>{tripDateLabel(trip)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 flex-shrink-0 text-blue-900" />
            <span>{trip.duration}</span>
          </div>
        </div>

        <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-600">{trip.description}</p>

        {/* Preço real */}
        {trip.price ? (
          <div className="mb-4 border-t border-gray-100 pt-4">
            {trip.originalPrice && (
              <span className="mr-2 text-sm text-gray-400 line-through">
                {formatBRL(trip.originalPrice)}
              </span>
            )}
            <span className="text-xl font-bold text-blue-900">{formatBRL(trip.price)}</span>
            {trip.perPerson && <span className="text-sm text-gray-500"> /pessoa</span>}
            {trip.installments && trip.installmentValue && (
              <p className="text-xs text-gray-500">
                ou {trip.installments}x de {formatBRL(trip.installmentValue)}
              </p>
            )}
          </div>
        ) : (
          <div className="mb-4 border-t border-gray-100 pt-4">
            <span className="text-sm font-semibold text-gray-700">Consulte valores</span>
          </div>
        )}

        <div className="mt-auto flex gap-3">
          <Link
            href={`/viagens/${trip.slug}`}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg border-2 border-blue-900 px-4 py-2.5 text-sm font-medium text-blue-900 transition-all hover:bg-blue-900 hover:!text-white"
          >
            Ver detalhes
          </Link>
          <a
            href={generateWhatsAppLink(WHATSAPP_MESSAGES.tripReserve(trip.title))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-blue-900 px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-opacity-90"
          >
            Quero viajar
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Card>
  )
}
