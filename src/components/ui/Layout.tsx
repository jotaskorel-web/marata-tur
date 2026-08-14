import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={clsx('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>{children}</div>
)

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  yPadding?: 'small' | 'medium' | 'large'
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  yPadding = 'large',
}) => {
  const paddingClasses = {
    small: 'py-8 md:py-12',
    medium: 'py-12 md:py-20',
    large: 'py-16 md:py-24',
  }

  return (
    <section id={id} className={clsx(paddingClasses[yPadding], className)}>
      <Container>{children}</Container>
    </section>
  )
}

interface GridProps {
  children: React.ReactNode
  cols?: number
  className?: string
  gap?: 'sm' | 'md' | 'lg'
}

export const Grid: React.FC<GridProps> = ({ children, cols = 3, className, gap = 'lg' }) => {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  }

  return (
    <div
      className={clsx(
        `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols}`,
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  )
}
