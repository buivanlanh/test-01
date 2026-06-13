import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'vietnamese'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Wonderplan - Discover Your Travel DNA',
  description:
    'Wonderplan giúp bạn khám phá "Travel DNA" và lập kế hoạch du lịch cá nhân hóa theo địa điểm và đối tượng. Chuỗi ADN chuyển hóa thành đường bay.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${poppins.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
