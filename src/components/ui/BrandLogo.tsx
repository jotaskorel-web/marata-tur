import Image from 'next/image'
import clsx from 'clsx'

interface BrandLogoProps {
  className?: string
  compact?: boolean
  light?: boolean
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className, compact = false }) => (
  <span className={clsx('inline-flex items-center overflow-hidden rounded-lg', className)} aria-label="Luzy Tour">
    <Image
      src="/images/brand/luzy-tour-logo.png"
      alt="Luzy Tour — Viagens e Turismo"
      width={compact ? 220 : 320}
      height={compact ? 72 : 104}
      className={clsx(
        'w-auto object-contain object-left',
        compact ? 'h-11' : 'h-12 sm:h-14 md:h-16'
      )}
      priority
    />
  </span>
)
