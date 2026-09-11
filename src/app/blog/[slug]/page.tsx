import type { Metadata } from 'next'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container, Section } from '@/components/ui/Layout'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { blogPosts } from '@/data'
import { BLOG_CATEGORY_LABELS } from '@/components/blog/labels'
import { generateWhatsAppLink, WHATSAPP_MESSAGES } from '@/config/contact'
import { Calendar, Clock, User, MessageCircle } from 'lucide-react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <>
      <Header />
      <main>
        <section className="relative mt-16 h-[360px] w-full md:h-[420px]">
          <Image src={post.image} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/40" />
          <Container className="relative z-10 flex h-full flex-col justify-end pb-10">
            <Breadcrumb
              className="mb-4 [&_*]:text-gray-200"
              items={[
                { label: 'Início', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: BLOG_CATEGORY_LABELS[post.category] },
              ]}
            />
            <p className="mb-2 text-sm font-semibold uppercase text-gray-200">
              {BLOG_CATEGORY_LABELS[post.category]}
            </p>
            <h1 className="max-w-3xl text-3xl font-bold text-white md:text-4xl">{post.title}</h1>
          </Container>
        </section>

        <Section>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-gray-200 pb-8 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(`${post.date}T12:00:00`).toLocaleDateString('pt-BR')}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime} minutos de leitura
              </span>
            </div>

            <article>
              <p className="mb-6 text-xl text-gray-700">{post.excerpt}</p>
              <div className="space-y-4 text-gray-700">
                {post.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </article>

            <div className="mt-12 rounded-xl bg-gray-50 p-8">
              <h3 className="mb-3 text-2xl font-bold">Quer viver essa experiência?</h3>
              <p className="mb-6 text-gray-600">
                Fale com a Luzy Tour e descubra as próximas saídas para esse e outros destinos.
              </p>
              <a
                href={generateWhatsAppLink(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}
