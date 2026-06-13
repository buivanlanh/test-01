import { ClipboardList, Dna, Plane } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Chia sẻ sở thích',
    desc: 'Trả lời vài câu hỏi ngắn về phong cách, ngân sách và bạn đồng hành.',
  },
  {
    icon: Dna,
    title: 'Giải mã Travel DNA',
    desc: 'Wonderplan phân tích và tạo nên hồ sơ du lịch độc nhất của bạn.',
  },
  {
    icon: Plane,
    title: 'Nhận đường bay hoàn hảo',
    desc: 'Lịch trình chi tiết theo ngày, sẵn sàng để bạn xách balo lên đường.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-aqua">
            Cách hoạt động
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
            Từ chuỗi ADN đến đường bay
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Ba bước đơn giản để biến sở thích của bạn thành một hành trình được
            cá nhân hóa hoàn toàn.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-border bg-card p-7"
            >
              <span className="font-heading text-5xl font-extrabold text-border">
                0{i + 1}
              </span>
              <div className="mt-4 flex size-12 items-center justify-center rounded-xl bg-midnight">
                <step.icon className="size-6 text-aqua" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
