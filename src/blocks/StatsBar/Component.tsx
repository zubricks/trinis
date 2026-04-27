import React from 'react'
import { cn } from '@/utilities/ui'
import { FlameIcon, HeartIcon, StarIcon, TrophyIcon, UtensilsIcon } from 'lucide-react'

import type { StatsBarBlock as StatsBarBlockProps } from '@/payload-types'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  star: StarIcon,
  fire: FlameIcon,
  trophy: TrophyIcon,
  heart: HeartIcon,
  utensils: UtensilsIcon,
}

const bgClasses: Record<string, string> = {
  default: 'bg-muted text-foreground',
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
}

export const StatsBarBlock: React.FC<StatsBarBlockProps> = ({ backgroundColor, stats }) => {
  return (
    <section className={cn('py-12 lg:py-16', bgClasses[backgroundColor || 'primary'])}>
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
          {stats?.map((stat, index) => {
            const Icon = stat.icon ? iconMap[stat.icon] : null

            return (
              <div key={index} className="flex flex-col items-center text-center gap-2">
                {Icon && <Icon className="w-6 h-6 opacity-80" />}
                <span className="font-heading text-4xl lg:text-5xl">{stat.value}</span>
                <span className="text-sm uppercase tracking-widest opacity-80">{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
