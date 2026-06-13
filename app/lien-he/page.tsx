import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata = {
  title: 'Liên hệ | Wonderplan',
  description:
    'Liên hệ với Wonderplan để được tư vấn và lập kế hoạch du lịch cá nhân hóa cho riêng bạn.',
}

const infos = [
  { icon: Mail, label: 'Email', value: 'hello@wonderplan.vn' },
  { icon: Phone, label: 'Điện thoại', value: '+84 28 1234 5678' },
  {
    icon: MapPin,
    label: 'Địa chỉ',
    value: '123 Đường Du Lịch, Quận 1, TP. Hồ Chí Minh',
  },
  { icon: Clock, label: 'Giờ làm việc', value: 'Thứ 2 - Thứ 7, 8:00 - 18:00' },
]

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Liên hệ"
          title="Cùng bắt đầu hành trình của bạn"
          description="Để lại thông tin và đội ngũ Wonderplan sẽ giúp bạn giải mã Travel DNA, thiết kế chuyến đi đáng nhớ."
        />

        <section className="bg-background">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:px-8">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Thông tin liên hệ
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Bạn có thể liên hệ qua biểu mẫu hoặc các kênh dưới đây. Chúng tôi
                luôn sẵn sàng lắng nghe.
              </p>
              <div className="mt-8 space-y-5">
                {infos.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <info.icon className="size-5 text-aqua" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-medium text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
