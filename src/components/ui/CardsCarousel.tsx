'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

function getVisibleCount() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 768) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

const SLIDE_GAP = 24

interface CardsCarouselProps<T> {
  items: T[]
  getKey: (item: T) => string
  renderItem: (item: T) => React.ReactNode
  ariaLabel: string
  prevLabel: string
  nextLabel: string
  loop?: boolean
  className?: string
}

export function CardsCarousel<T>({
  items,
  getKey,
  renderItem,
  ariaLabel,
  prevLabel,
  nextLabel,
  loop = false,
  className,
}: CardsCarouselProps<T>) {
  const [visible, setVisible] = useState(1)
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  const count = items.length
  const looping = loop && count > 1
  const slides = looping ? [...items, ...items] : items
  const maxIndex = looping ? count : Math.max(0, count - visible)
  const canGoPrev = looping || index > 0
  const canGoNext = looping || index < maxIndex
  const showArrows = looping ? count > 1 : count > visible

  useEffect(() => {
    const update = () => setVisible(getVisibleCount())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    if (looping) return
    setIndex((current) => Math.min(current, maxIndex))
  }, [looping, maxIndex])

  useEffect(() => {
    if (!looping || index !== count || !animate) return
    const timer = window.setTimeout(() => {
      setAnimate(false)
      setIndex(0)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setAnimate(true))
      })
    }, 500)
    return () => window.clearTimeout(timer)
  }, [animate, count, index, looping])

  const goPrev = useCallback(() => {
    if (!looping) {
      setIndex((current) => Math.max(0, current - 1))
      return
    }
    if (index === 0) {
      setAnimate(false)
      setIndex(count)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setAnimate(true)
          setIndex(count - 1)
        })
      })
      return
    }
    setIndex((current) => current - 1)
  }, [count, index, looping])

  const goNext = useCallback(() => {
    if (!looping) {
      setIndex((current) => Math.min(maxIndex, current + 1))
      return
    }
    setIndex((current) => current + 1)
  }, [looping, maxIndex])

  return (
    <div className={clsx('relative', className ?? 'px-4 lg:px-5')}>
      {showArrows && (
        <>
          <button
            type="button"
            onClick={goPrev}
            disabled={!canGoPrev}
            aria-label={prevLabel}
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canGoNext}
            aria-label={nextLabel}
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      <div
        className="overflow-x-clip overflow-y-visible py-2"
        aria-roledescription="carrossel"
        aria-label={ariaLabel}
      >
        <div
          className={`flex items-stretch ease-out motion-reduce:transition-none ${
            animate ? 'transition-transform duration-500' : ''
          }`}
          style={{
            gap: SLIDE_GAP,
            transform: `translateX(calc(-${index} * (100% + ${SLIDE_GAP}px) / ${visible}))`,
          }}
        >
          {slides.map((item, slideIndex) => (
            <div
              key={`${getKey(item)}-${slideIndex}`}
              className="flex min-h-0 flex-shrink-0"
              style={{ width: `calc((100% - ${(visible - 1) * SLIDE_GAP}px) / ${visible})` }}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
