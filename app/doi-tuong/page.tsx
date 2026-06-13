import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CategoryListing } from '@/components/category-listing'
import { audiences } from '@/lib/data'

export const metadata = {
  title: 'Plan theo đối tượng | Wonderplan',
  description:
    'Hành trình du lịch được thiết kế riêng cho cặp đôi, gia đình, nhóm bạn hay người đi một mình.',
}

export default function DoiTuongPage() {
  const names = audiences.map((a) => a.name)

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Theo đối tượng"
          title="Plan du lịch theo đối tượng"
          description="Mỗi nhóm du khách có một nhịp đi riêng. Chọn kiểu đồng hành của bạn để nhận hành trình phù hợp nhất."
        />
        <CategoryListing
          items={audiences}
          basePath="/doi-tuong"
          filters={names}
        />
      </main>
      <SiteFooter />
    </>
  )
}
