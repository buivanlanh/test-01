'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-12 text-aqua" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
          Cảm ơn bạn đã liên hệ!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Đội ngũ Wonderplan sẽ phản hồi trong vòng 24 giờ.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-aqua focus:ring-2 focus:ring-aqua/30'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Họ và tên
          </label>
          <input required type="text" placeholder="Nguyễn Văn A" className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Email
          </label>
          <input required type="email" placeholder="ban@email.com" className={inputClass} />
        </div>
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Bạn quan tâm đến
        </label>
        <select className={inputClass} defaultValue="">
          <option value="" disabled>
            Chọn loại hành trình
          </option>
          <option>Plan theo địa điểm</option>
          <option>Plan theo đối tượng</option>
          <option>Tư vấn cá nhân hóa</option>
          <option>Khác</option>
        </select>
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Nội dung
        </label>
        <textarea
          required
          rows={5}
          placeholder="Chia sẻ về chuyến đi mơ ước của bạn..."
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
      >
        <Send className="size-4" />
        Gửi yêu cầu
      </button>
    </form>
  )
}
