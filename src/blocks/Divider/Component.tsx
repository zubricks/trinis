import React from 'react'
import { cn } from '@/utilities/ui'

import type { DividerBlock as DividerBlockProps } from '@/payload-types'

const colorClasses: Record<string, { bg: string; checker1: string; checker2: string }> = {
  primary: { bg: 'bg-primary', checker1: 'bg-primary', checker2: 'bg-primary-foreground' },
  secondary: { bg: 'bg-secondary', checker1: 'bg-secondary', checker2: 'bg-background' },
  accent: { bg: 'bg-accent', checker1: 'bg-accent', checker2: 'bg-background' },
}

export const DividerBlock: React.FC<DividerBlockProps> = ({ style, color }) => {
  const colors = colorClasses[color || 'primary']

  if (style === 'checkerboard') {
    return (
      <div
        className="w-full h-6"
        style={{
          backgroundImage: `repeating-conic-gradient(var(--primary) 0% 25%, var(--background) 0% 50%)`,
          backgroundSize: '24px 24px',
        }}
      />
    )
  }

  if (style === 'colorBand') {
    return <div className={cn('w-full h-3', colors.bg)} />
  }

  return (
    <div className="container">
      <hr className={cn('border-t-2', `border-${color || 'primary'}`)} />
    </div>
  )
}
