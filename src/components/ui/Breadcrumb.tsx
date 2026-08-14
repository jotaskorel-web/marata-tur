import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface Crumb {
  label: string
  href?: string
}

export const Breadcrumb: React.FC<{ items: Crumb[]; className?: string }> = ({ items, className }) => (
  <nav aria-label="Breadcrumb" className={className}>
    <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
      {items.map((item, i) => {
        const last = i === items.length - 1
        return (
          <li key={i} className="flex items-center gap-1">
            {item.href && !last ? (
              <Link href={item.href} className="text-gray-500 hover:text-orange-500">
                {item.label}
              </Link>
            ) : (
              <span className={last ? 'font-medium text-gray-700' : ''} aria-current={last ? 'page' : undefined}>
                {item.label}
              </span>
            )}
            {!last && <ChevronRight className="h-3.5 w-3.5 text-gray-400" />}
          </li>
        )
      })}
    </ol>
  </nav>
)
