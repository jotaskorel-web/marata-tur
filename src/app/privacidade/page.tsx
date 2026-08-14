import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container, Section } from '@/components/ui/Layout'

export const metadata: Metadata = {
  title: 'Política de Privacidade - LiveTur',
}

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main>
        <Section className="mt-20">
          <Container className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Informações que Coletamos</h2>
                <p>
                  A LiveTur coleta informações que você nos fornece diretamente, como nome,
                  email, telefone e dados de viagem quando você preenche formulários em nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Como Usamos Suas Informações</h2>
                <p>
                  Utilizamos suas informações para processar viagens, enviar confirmações,
                  responder a consultas e melhorar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Proteção de Dados</h2>
                <p>
                  Implementamos medidas de segurança para proteger suas informações pessoais
                  contra acesso não autorizado.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Compartilhamento de Informações</h2>
                <p>
                  Não compartilhamos suas informações com terceiros sem seu consentimento,
                  exceto quando necessário para processar sua viagem.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                <p>
                  Nosso site usa cookies para melhorar sua experiência. Você pode controlar
                  as configurações de cookies em seu navegador.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Contato</h2>
                <p>
                  Se tiver dúvidas sobre nossa política de privacidade, entre em contato
                  através do nosso formulário de contato.
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
