import { Section } from '@/components/ui/Layout'
import { SectionTitle } from '@/components/ui/Typography'
import { ImagePlaceholder } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { Instagram } from 'lucide-react'
import { CONTACT } from '@/config/contact'
import { socialPosts } from '@/data'

export const InstagramSection: React.FC = () => {
  return (
    <Section className="bg-gray-50">
      <SectionTitle
        eyebrow="Nas redes"
        title="Acompanhe nossas viagens"
        subtitle="Momentos reais das experiências vividas com a Live Tur. Siga @live.tur no Instagram."
      />

      <div className="mx-auto mb-10 grid max-w-3xl grid-cols-3 gap-1 sm:gap-2">
        {socialPosts.slice(0, 6).map((post, i) => (
          <Reveal key={post.id} delay={i * 0.05}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-[12px]"
              aria-label={post.caption}
            >
              <ImagePlaceholder
                src={post.image}
                alt={post.caption}
                aspectRatio="auto"
                sizes="(max-width: 768px) 33vw, 320px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                <Instagram className="h-7 w-7 text-white opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="text-center">
        <a
          href={CONTACT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition-all hover:bg-opacity-90"
        >
          <Instagram className="h-5 w-5" />
          Seguir no Instagram
        </a>
      </div>
    </Section>
  )
}
