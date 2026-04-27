'use client'

import React, { useEffect, useState } from 'react'

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export const MenuNavBlock: React.FC<{ sections?: string[] }> = ({ sections }) => {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const header = document.querySelector('header')
    if (header) {
      setHeaderHeight(header.offsetHeight)
    }
  }, [])

  if (!sections || sections.length === 0) return null

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav
      className="sticky z-40 bg-background border-b border-border py-4"
      style={{ top: `${headerHeight}px` }}
    >
      <div className="container flex flex-wrap justify-center gap-4">
        {sections.map((title) => {
          const id = `menu-${slugify(title)}`
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors px-4 py-2 border border-border rounded-none hover:border-primary"
            >
              {title}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
