'use client'

import { useState } from 'react'
import { PlanCard } from '@/components/plan-card'
import { cn } from '@/lib/utils'

type Item = {
  slug: string
  name: string
  image: string
  plans: number
  description: string
  region?: string
}

export function CategoryListing({
  items,
  basePath,
  filters,
}: {
  items: Item[]
  basePath: string
  filters: string[]
}) {
  const [active, setActive] = useState('Tất cả')

  const filtered =
    active === 'Tất cả'
      ? items
      : items.filter((i) => (i.region ?? i.name) === active)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap gap-2">
          {['Tất cả', ...filters].map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                active === f
                  ? 'bg-foreground text-background'
                  : 'border border-border bg-background text-muted-foreground hover:text-foreground',
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PlanCard key={item.slug} item={item} basePath={basePath} />
          ))}
        </div>
      </div>
    </section>
  )
}
