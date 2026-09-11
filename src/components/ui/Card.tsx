import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  isClickable?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  onClick,
  isClickable = false,
}) => (
  <div
    onClick={onClick}
    className={clsx(
      'bg-white rounded-lg overflow-hidden transition-all duration-300',
      'shadow-subtle hover:shadow-md',
      isClickable && 'cursor-pointer hover:transform hover:scale-105',
      className
    )}
  >
    {children}
  </div>
)

interface ImageProps {
  src: string
  alt: string
  aspectRatio?: 'square' | 'video' | 'portrait' | 'auto'
  className?: string
  sizes?: string
  priority?: boolean
}

/**
 * Imagem otimizada (next/image) com aspect-ratio controlado, lazy loading,
 * object-cover e leve zoom no hover do card. O grupo de hover é herdado do
 * card pai (adicione `group` no card para ativar o zoom).
 */
export const ImagePlaceholder: React.FC<ImageProps> = ({
  src,
  alt,
  aspectRatio = 'video',
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    auto: 'h-full',
  }

  return (
    <div className={clsx('relative w-full overflow-hidden bg-gray-100', aspectRatioClasses[aspectRatio])}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={clsx(
          'object-cover transition-transform duration-700 ease-out group-hover:scale-105',
          className
        )}
      />
    </div>
  )
}

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', className }) => {
  const variants = {
    primary: 'bg-orange-500 text-white',
    secondary: 'bg-brand-secondary text-white',
    outline: 'border border-orange-500 text-orange-500',
  }

  return (
    <span className={clsx('inline-block px-3 py-1 rounded-full text-sm font-medium', variants[variant], className)}>
      {children}
    </span>
  )
}
