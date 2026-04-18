'use client'

import React, { useState } from 'react'
import { cn } from '@/utilities/ui'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { MenuIcon, XIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <>
      <button
        className="md:hidden text-foreground ml-auto"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      <nav
        className={cn(
          'md:flex gap-8 items-center justify-center',
          isMobileOpen
            ? 'absolute top-full left-0 right-0 flex flex-col bg-background p-6 shadow-lg border-t border-border z-50'
            : 'hidden',
        )}
      >
        {navItems.map(({ link }, i) => (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className="text-xs font-semibold tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors"
          />
        ))}
      </nav>
    </>
  )
}
