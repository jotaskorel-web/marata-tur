import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Layout'
import { Breadcrumb } from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Créditos das imagens',
  description: 'Créditos e licenças das fotografias de destinos usadas no site da Maratá Tur.',
}

const credits = [
  {
    title: 'Cânion Itaimbezinho VIII',
    author: 'Vinicios de Moura',
    source: 'https://commons.wikimedia.org/wiki/File:Canyon_Itaimbezinho_VIII.jpg',
    license: 'CC BY-SA 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    title: 'Lago Negro em Gramado',
    author: 'Leone Melo',
    source: 'https://commons.wikimedia.org/wiki/File:Lago_Negro_em_Gramado.jpg',
    license: 'CC BY-SA 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  },
  {
    title: 'Santana do Livramento from the border',
    author: 'Mx. Granger',
    source: 'https://commons.wikimedia.org/wiki/File:Santana_do_Livramento_from_the_border.jpg',
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
  },
  {
    title: 'Torres da antiga igreja de Itá',
    author: 'Leonardo Gregianin',
    source: 'https://commons.wikimedia.org/wiki/File:Towers_It%C3%A1.jpg',
    license: 'Domínio público',
    licenseUrl: 'https://commons.wikimedia.org/wiki/Commons:Licensing#Public_domain',
  },
  {
    title: 'Campo de lavandas',
    author: 'Simon Spring',
    source: 'https://unsplash.com/photos/ixpsXG-RMBQ',
    license: 'Licença Unsplash',
    licenseUrl: 'https://unsplash.com/license',
  },
]

export default function CreditosImagensPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-28">
        <Container className="pb-20">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Créditos das imagens' }]} />
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm md:p-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-orange-500">Transparência</p>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Créditos das imagens</h1>
            <p className="mb-8 text-gray-600">
              Fotografias de destinos utilizadas sob licenças livres ou gratuitas. As imagens foram
              redimensionadas e recortadas automaticamente conforme o espaço disponível no site.
            </p>
            <ul className="space-y-6">
              {credits.map((credit) => (
                <li key={credit.source} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <h2 className="font-semibold text-gray-900">{credit.title}</h2>
                  <p className="mt-1 text-sm text-gray-600">Foto: {credit.author}</p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm">
                    <a className="font-medium text-orange-500 hover:underline" href={credit.source} target="_blank" rel="noopener noreferrer">
                      Ver original
                    </a>
                    <a className="font-medium text-orange-500 hover:underline" href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">
                      {credit.license}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
