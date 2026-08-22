import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Section, Grid } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Card, ImagePlaceholder, Badge } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { blogPosts } from '@/data'
import { BLOG_CATEGORY_LABELS } from '@/components/blog/labels'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — dicas e roteiros de viagem',
  description: 'Dicas, roteiros e novidades da Maratá Tur sobre os destinos divulgados.',
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-28">
          <Breadcrumb className="mb-6" items={[{ label: 'Início', href: '/' }, { label: 'Blog' }]} />
          <SectionTitle
            eyebrow="Blog"
            title="Dicas, roteiros e novidades"
            subtitle="Conteúdo para inspirar e ajudar a planejar a sua próxima viagem."
          />

          <Grid cols={3}>
            {blogPosts.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.06}>
                <Card className="group flex h-full flex-col">
                  <Link href={`/blog/${post.slug}`} className="relative block h-48 overflow-hidden">
                    <ImagePlaceholder src={post.image} alt={post.title} aspectRatio="auto" />
                    <Badge variant="primary" className="absolute left-4 top-4">
                      {BLOG_CATEGORY_LABELS[post.category]}
                    </Badge>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 line-clamp-2 text-lg font-bold">{post.title}</h3>
                    <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-600">{post.excerpt}</p>
                    <div className="mb-4 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(`${post.date}T12:00:00`).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime} min
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 transition-all hover:gap-2"
                    >
                      Ler mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Card>
              </Reveal>
            ))}
          </Grid>
        </Section>
      </main>
      <Footer />
    </>
  )
}
