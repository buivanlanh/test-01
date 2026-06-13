import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'

type Item = {
  slug: string
  name: string
  image: string
  plans: number
  description: string
  region?: string
}

export function PlanCard({ item, basePath }: { item: Item; basePath: string }) {
  return (
    <Link
      href={`${basePath}/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image || '/placeholder.svg'}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur">
          {item.plans} plan
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {item.region && (
          <span className="mb-1 inline-flex items-center gap-1 text-xs font-medium text-aqua">
            <MapPin className="size-3" />
            {item.region}
          </span>
        )}
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {item.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
          Xem hành trình
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
