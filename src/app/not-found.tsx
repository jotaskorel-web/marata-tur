import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'A página que você procura não foi encontrada.',
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-orange-500">404</h1>
        <p className="mb-2 text-2xl font-bold text-gray-900">Página não encontrada</p>
        <p className="mb-8 text-gray-600">Desculpe, a página que você procura não existe.</p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}
