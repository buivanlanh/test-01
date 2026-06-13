import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CategoryListing } from '@/components/category-listing'
import { destinations } from '@/lib/data'

export const metadata = {
  title: 'Plan theo địa điểm | Wonderplan',
  description:
    'Khám phá các plan du lịch được tuyển chọn theo từng điểm đến trên khắp thế giới.',
}

export default function DiaDiemPage() {
  const regions = Array.from(new Set(destinations.map((d) => d.region)))

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Theo địa điểm"
          title="Plan du lịch theo điểm đến"
          description="Chọn vùng đất bạn mơ ước và để Wonderplan gợi ý những hành trình phù hợp nhất với Travel DNA của bạn."
        />
        <CategoryListing
          items={destinations}
          basePath="/dia-diem"
          filters={regions}
        />
      </main>
      <SiteFooter />
    </>
  )
}
