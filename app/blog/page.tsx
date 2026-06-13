import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { blogPosts } from '@/lib/data'

export const metadata = {
  title: 'Blog | Wonderplan',
  description:
    'Cẩm nang, cảm hứng và mẹo du lịch giúp bạn khám phá thế giới theo cách của riêng mình.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Blog"
          title="Cảm hứng & cẩm nang du lịch"
          description="Những câu chuyện, mẹo hữu ích và điểm đến truyền cảm hứng để hành trình của bạn thêm trọn vẹn."
        />

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <Image
                  src={featured.image || '/placeholder.svg'}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 text-xs font-medium">
                  <span className="rounded-full bg-aqua/15 px-3 py-1 text-aqua">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Clock className="size-3" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-2xl font-bold text-foreground text-balance sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                  Đọc bài viết
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.concat(blogPosts).map((post, i) => (
                <Link
                  key={`${post.slug}-${i}`}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image || '/placeholder.svg'}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-medium">
                      <span className="rounded-full bg-secondary px-3 py-1 text-foreground">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-semibold text-foreground text-balance">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-aqua">
                      Đọc tiếp
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
