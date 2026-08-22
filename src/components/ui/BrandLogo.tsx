import clsx from 'clsx'

interface BrandLogoProps {
  className?: string
  compact?: boolean
  light?: boolean
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className, compact = false, light = false }) => (
  <span className={clsx('inline-flex items-center gap-2.5', className)} aria-label="Maratá Tur">
    <span
      aria-hidden="true"
      className={clsx(
        'relative block h-9 w-9 shrink-0 border-[2px]',
        light ? 'border-white' : 'border-[#13233a]'
      )}
    >
      <span className={clsx('absolute -right-[3px] top-2 h-4 w-4 border-y-[2px] border-r-[2px]', light ? 'border-white' : 'border-[#13233a]')} />
    </span>
    {!compact && (
      <span className="flex flex-col leading-none">
        <span className={clsx('whitespace-nowrap text-lg font-semibold uppercase tracking-[0.24em]', light ? 'text-white' : 'text-[#13233a]')}>
          Maratá Tur
        </span>
        <span className={clsx('mt-1 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.25em]', light ? 'text-white/70' : 'text-[#5d6470]')}>
          Fretamento e turismo
        </span>
      </span>
    )}
  </span>
)
