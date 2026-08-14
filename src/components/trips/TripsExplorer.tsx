'use client'

import { useMemo, useState } from 'react'
import { Grid } from '@/components/ui/Layout'
import { TripCard, CATEGORY_LABELS } from '@/components/trips/TripCard'
import { Trip, TripCategory } from '@/types'

type Filter = 'todas' | TripCategory

export const TripsExplorer: React.FC<{ trips: Trip[] }> = ({ trips }) => {
  const [filter, setFilter] = useState<Filter>('todas')

  // Só mostra filtros de categorias que realmente existem nos dados
  const categories = useMemo(() => {
    const present = Array.from(new Set(trips.map((t) => t.category)))
    return ['todas' as const, ...present]
  }, [trips])

  const filtered = filter === 'todas' ? trips : trips.filter((t) => t.category === filter)

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => {
          const active = filter === cat
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                active
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat === 'todas' ? 'Todas' : CATEGORY_LABELS[cat]}
            </button>
          )
        })}
      </div>

      <Grid cols={3}>
        {filtered.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </Grid>
    </div>
  )
}
