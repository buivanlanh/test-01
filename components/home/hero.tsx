import Image from 'next/image'
import Link from 'next/link'
import { Dna, Plane, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-foreground">
            <Dna className="size-4 text-aqua" />
            Discover Your Travel DNA
          </span>
          <h1 className="mt-6 font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Mỗi người là một{' '}
            <span className="text-aqua">chuỗi ADN</span> du lịch riêng biệt
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            Wonderplan giải mã sở thích của bạn và chuyển hóa thành những đường
            bay hoàn hảo. Lập kế hoạch du lịch cá nhân hóa theo địa điểm và theo
            đối tượng chỉ trong vài phút.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dia-diem"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
            >
              <Plane className="size-4" />
              Khám phá điểm đến
            </Link>
            <Link
              href="/doi-tuong"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Sparkles className="size-4 text-gold" />
              Plan theo đối tượng
            </Link>
          </div>

          <div className="mt-10 flex gap-8">
            {[
              { value: '120+', label: 'Mẫu hành trình' },
              { value: '40+', label: 'Điểm đến' },
              { value: '12k', label: 'Du khách tin dùng' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-travel.png"
              alt="Bờ biển nhiệt đới với làn nước trong xanh"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-background p-4 shadow-lg sm:block">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-aqua/15">
                <Dna className="size-5 text-aqua" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Travel DNA của bạn
                </div>
                <div className="text-xs text-muted-foreground">
                  Phiêu lưu · Ẩm thực · Văn hóa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
