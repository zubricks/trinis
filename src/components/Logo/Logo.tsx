import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span
      className={clsx(
        'font-heading text-xl font-bold tracking-tight whitespace-nowrap',
        className,
      )}
    >
      Downtown Trini&apos;s
    </span>
  )
}
