import Link from 'next/link'
import { Quote, Dna } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lần đầu tiên có một lịch trình thực sự hợp gu mình. Cảm giác như Wonderplan hiểu mình hơn cả mình.',
    name: 'Minh Anh',
    role: 'Du lịch một mình · Nhật Bản',
  },
  {
    quote:
      'Gia đình mình đi Bali mà không phải lo nghĩ gì. Mọi thứ vừa vặn cho cả người lớn lẫn các bé.',
    name: 'Hoàng & Lan',
    role: 'Gia đình · Bali',
  },
  {
    quote:
      'Đường bay được sắp xếp rất thông minh, tiết kiệm thời gian mà vẫn trọn vẹn trải nghiệm.',
    name: 'Quốc Bảo',
    role: 'Nhóm bạn · Hạ Long',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-aqua">
            Cảm nhận
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
            Hàng nghìn hành trình được giải mã
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="size-7 text-gold" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5">
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-midnight px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="relative mx-auto max-w-2xl">
            <Dna className="mx-auto size-10 text-aqua" />
            <h2 className="mt-5 font-heading text-3xl font-bold text-background text-balance sm:text-4xl">
              Sẵn sàng khám phá Travel DNA của bạn?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/70 text-pretty">
              Bắt đầu miễn phí ngay hôm nay và để Wonderplan biến sở thích của
              bạn thành chuyến đi đáng nhớ.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/lien-he"
                className="inline-flex items-center rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-midnight transition-opacity hover:opacity-90"
              >
                Bắt đầu lập kế hoạch
              </Link>
              <Link
                href="/gioi-thieu"
                className="inline-flex items-center rounded-full border border-background/30 px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-background/10"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
