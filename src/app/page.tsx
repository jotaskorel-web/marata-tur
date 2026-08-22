import { HeroSection } from '@/components/home/HeroSection'
import { TravelSearchSection } from '@/components/home/TravelSearchSection'
import { PromotionsBannerSection } from '@/components/home/PromotionsBannerSection'
import { DestinationsSection } from '@/components/home/DestinationsSection'
import { TripsSection } from '@/components/home/TripsSection'
import { ExperienceTypesSection } from '@/components/home/ExperienceTypesSection'
import { AboutSection } from '@/components/home/AboutSection'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { InstagramSection } from '@/components/home/InstagramSection'
import { CTASection } from '@/components/home/CTASection'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <TravelSearchSection />
      <PromotionsBannerSection />
      <TripsSection />
      <DestinationsSection />
      <ExperienceTypesSection />
      <AboutSection />
      <BenefitsSection />
      <InstagramSection />
      <CTASection />
      <Footer />
    </>
  )
}
