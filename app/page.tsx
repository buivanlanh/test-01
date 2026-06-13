import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/home/hero'
import { HowItWorks } from '@/components/home/how-it-works'
import { FeaturedGrid } from '@/components/home/featured-grid'
import { Testimonials, CtaBanner } from '@/components/home/testimonials'
import { destinations, audiences } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedGrid
          eyebrow="Theo địa điểm"
          title="Điểm đến truyền cảm hứng"
          description="Những hành trình được yêu thích nhất, tuyển chọn theo từng vùng đất đáng để khám phá."
          items={destinations}
          basePath="/dia-diem"
          viewAllHref="/dia-diem"
        />
        <FeaturedGrid
          eyebrow="Theo đối tượng"
          title="Hành trình cho mọi kiểu người"
          description="Dù bạn đi một mình, cùng người thương hay cả gia đình, luôn có một plan phù hợp."
          items={audiences}
          basePath="/doi-tuong"
          viewAllHref="/doi-tuong"
        />
        <Testimonials />
        <CtaBanner />
      </main>
      <SiteFooter />
    </>
  )
}
