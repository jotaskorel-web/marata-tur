import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container, Section } from '@/components/ui/Layout'

export const metadata: Metadata = {
  title: 'Termos de Uso - Luzy Tour',
}

export default function TermosPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="mt-20">
          <Container className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar este website, você aceita estar vinculado por estes termos
                  de uso. Se você não concorda com alguma parte destes termos, não utilize o site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Uso do Site</h2>
                <p>
                  Você concorda em usar este site apenas para fins legítimos e de acordo com
                  todas as leis e regulamentações aplicáveis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Informações do Site</h2>
                <p>
                  As informações fornecidas neste site são apenas para fins informativos.
                  A Luzy Tour não garante a precisão, integridade ou atualidade de todas as informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Limitação de Responsabilidade</h2>
                <p>
                  A Luzy Tour não será responsável por quaisquer danos indiretos, incidentais,
                  especiais ou conseqüentes resultantes do uso de nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Links Externos</h2>
                <p>
                  Este site pode conter links para sites de terceiros. A Luzy Tour não é
                  responsável pelo conteúdo desses sites externos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Modificações dos Termos</h2>
                <p>
                  A Luzy Tour se reserva o direito de modificar estes termos a qualquer momento.
                  Alterações significativas serão notificadas no site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Lei Aplicável</h2>
                <p>
                  Estes termos são regidos pelas leis da República Federativa do Brasil.
                  Qualquer disputa será resolvida nos tribunais competentes.
                </p>
              </section>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
