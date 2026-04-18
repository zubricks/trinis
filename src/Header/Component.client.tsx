'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Media } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { SocialIcons } from '@/components/SocialIcons'
import Image from 'next/image'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border" data-theme="light">
      <div className="container py-7 grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <Link href="/" className="shrink-0 hover:opacity-80 transition-opacity">
          {data.logo && typeof data.logo === 'object' && (data.logo as Media).url ? (
            <Image
              src={(data.logo as Media).url!}
              alt={(data.logo as Media).alt || "Downtown Trini's"}
              width={180}
              height={50}
              className="h-20 w-auto"
              priority
            />
          ) : (
            <Logo className="text-foreground text-2xl" />
          )}
        </Link>
        <HeaderNav data={data} />
        <SocialIcons data={data.socialLinks} className="hidden md:flex" />
      </div>
    </header>
  )
}
