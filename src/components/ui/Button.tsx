import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  external?: boolean
  whatsapp?: boolean
  whatsappMessage?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      href,
      external = false,
      whatsapp = false,
      whatsappMessage,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-medium transition-all duration-300 rounded-lg inline-flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2'

    const variants = {
      primary: 'bg-orange-500 text-white hover:bg-opacity-90 focus-visible:outline-orange-500',
      secondary: 'bg-brand-secondary text-white hover:bg-opacity-90 focus-visible:outline-brand-secondary',
      outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:!text-white',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

    if (whatsapp && whatsappMessage) {
      const whatsappUrl = generateWhatsAppLink(whatsappMessage)
      return (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          {children}
          <ArrowRight className="w-4 h-4" />
        </a>
      )
    }

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            {children}
            <ArrowRight className="w-4 h-4" />
          </a>
        )
      }
      return (
        <Link href={href} className={buttonClass}>
          {children}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )
    }

    return (
      <button ref={ref} className={buttonClass} {...props}>
        {children}
        <ArrowRight className="w-4 h-4" />
      </button>
    )
  }
)

Button.displayName = 'Button'
