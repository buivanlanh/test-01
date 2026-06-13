import Image from 'next/image'
import Link from 'next/link'
import { Dna, Target, HeartHandshake, Compass } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata = {
  title: 'Giới thiệu | Wonderplan',
  description:
    'Câu chuyện về Wonderplan - nền tảng giúp bạn khám phá Travel DNA và lập kế hoạch du lịch cá nhân hóa.',
}

const values = [
  {
    icon: Dna,
    title: 'Cá nhân hóa',
    desc: 'Mỗi hành trình được thiết kế dựa trên "ADN du lịch" độc nhất của bạn.',
  },
  {
    icon: Target,
    title: 'Chính xác',
    desc: 'Lịch trình tối ưu theo thời gian, ngân sách và sở thích thực tế.',
  },
  {
    icon: HeartHandshake,
    title: 'Tận tâm',
    desc: 'Đồng hành cùng bạn từ lúc lên ý tưởng đến khi trở về nhà.',
  },
  {
    icon: Compass,
    title: 'Truyền cảm hứng',
    desc: 'Gợi mở những vùng đất và trải nghiệm bạn chưa từng nghĩ tới.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Về Wonderplan"
          title="Chúng tôi biến sở thích thành những chuyến đi"
          description="Wonderplan tin rằng mỗi người mang trong mình một chuỗi ADN du lịch riêng. Sứ mệnh của chúng tôi là giải mã nó và chuyển hóa thành những đường bay hoàn hảo."
        />

        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/aud-solo.png"
                alt="Du khách ngắm cảnh núi"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground text-balance">
                Câu chuyện của chúng tôi
              </h2>
              <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wonderplan ra đời từ một câu hỏi đơn giản: tại sao việc lên kế
                  hoạch du lịch lại mệt mỏi đến vậy? Hàng giờ tìm kiếm, so sánh,
                  ghép nối - mà kết quả vẫn chưa thật sự hợp gu.
                </p>
                <p>
                  Chúng tôi xây dựng một nền tảng phân tích "Travel DNA" - bộ
                  gen sở thích của mỗi người - để tạo ra hành trình đo ni đóng
                  giày. Từ điểm đến, đối tượng đồng hành đến nhịp độ chuyến đi,
                  tất cả đều xoay quanh chính bạn.
                </p>
                <p>
                  Đến nay, hơn 12.000 du khách đã tin tưởng Wonderplan cho những
                  kỳ nghỉ đáng nhớ. Và đây mới chỉ là khởi đầu của đường bay.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
                Giá trị cốt lõi
              </h2>
              <p className="mt-4 text-muted-foreground text-pretty">
                Những điều định hình mỗi hành trình chúng tôi tạo ra.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-card p-7"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-midnight">
                    <v.icon className="size-6 text-aqua" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 text-center sm:grid-cols-3 sm:p-12">
              {[
                { value: '12.000+', label: 'Du khách tin dùng' },
                { value: '40+', label: 'Điểm đến trên thế giới' },
                { value: '98%', label: 'Khách hài lòng' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-4xl font-extrabold text-aqua">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-midnight px-6 py-14 text-center sm:px-12">
              <h2 className="font-heading text-3xl font-bold text-background text-balance">
                Cùng Wonderplan viết nên chuyến đi của bạn
              </h2>
              <Link
                href="/lien-he"
                className="mt-7 inline-flex items-center rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-midnight transition-opacity hover:opacity-90"
              >
                Liên hệ với chúng tôi
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
