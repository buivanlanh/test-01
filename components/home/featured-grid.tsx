import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PlanCard } from '@/components/plan-card'

type Item = {
  slug: string
  name: string
  image: string
  plans: number
  description: string
  region?: string
}

export function FeaturedGrid({
  eyebrow,
  title,
  description,
  items,
  basePath,
  viewAllHref,
}: {
  eyebrow: string
  title: string
  description: string
  items: Item[]
  basePath: string
  viewAllHref: string
}) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-aqua">
              {eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-muted-foreground text-pretty">
              {description}
            </p>
          </div>
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-aqua"
          >
            Xem tất cả
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <PlanCard key={item.slug} item={item} basePath={basePath} />
          ))}
        </div>
      </div>
    </section>
  )
}
