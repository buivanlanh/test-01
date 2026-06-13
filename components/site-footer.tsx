import Image from 'next/image'
import Link from 'next/link'
import { Globe, MessageCircle, Share2, Mail } from 'lucide-react'
import { navLinks } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.jpg"
                alt="Wonderplan"
                width={36}
                height={36}
                className="rounded-md"
              />
              <span className="font-heading text-lg font-bold text-foreground">
                Wonder<span className="text-gold">plan</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Discover Your Travel DNA. Chuỗi ADN chuyển hóa thành đường bay -
              hành trình du lịch cá nhân hóa cho riêng bạn.
            </p>
            <div className="mt-5 flex gap-3">
              {[Globe, MessageCircle, Share2, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-full bg-background text-muted-foreground transition-colors hover:bg-aqua hover:text-midnight"
                  aria-label="Mạng xã hội"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Khám phá
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Hỗ trợ
            </h3>
            <ul className="mt-4 space-y-2.5">
              {['Câu hỏi thường gặp', 'Điều khoản dịch vụ', 'Chính sách bảo mật', 'Hướng dẫn đặt plan'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold text-foreground">
              Đăng ký nhận tin
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Nhận cảm hứng du lịch và ưu đãi mới nhất mỗi tuần.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email của bạn"
                className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-aqua focus:ring-2 focus:ring-aqua/30"
              />
              <button
                type="submit"
                className="rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wonderplan. Discover Your Travel DNA.
        </div>
      </div>
    </footer>
  )
}
