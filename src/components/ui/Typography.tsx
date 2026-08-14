import { Container } from './Layout'

export const SectionTitle: React.FC<{
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}> = ({ eyebrow, title, subtitle, centered = true }) => (
  <div className={centered ? 'text-center mb-12' : 'mb-12'}>
    {eyebrow && (
      <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider mb-2">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
)
