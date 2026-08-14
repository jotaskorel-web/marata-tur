'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Atraso em segundos para efeito cascata */
  delay?: number
  /** Direção da entrada */
  y?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Envolve conteúdo com uma animação sutil de fade + translate ao entrar na
 * viewport. Respeita prefers-reduced-motion: nesse caso, apenas renderiza sem
 * movimento.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  y = 24,
}) => {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
