import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

import type { Media } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { SocialIcons } from '@/components/SocialIcons'
import RichText from '@/components/RichText'

export async function Footer() {
  const footerData = await getCachedGlobal('footer', 1)()

  const columns = footerData?.columns || []
  const colCount = columns.length + 1 // +1 for the logo column

  const gridClass =
    colCount <= 2
      ? 'md:grid-cols-2'
      : colCount === 3
        ? 'md:grid-cols-3'
        : 'md:grid-cols-4'

  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="container py-12">
        <div className={`grid gap-8 ${gridClass}`}>
          <div>
            <Link href="/" className="inline-block mb-4">
              {footerData.logo &&
              typeof footerData.logo === 'object' &&
              (footerData.logo as Media).url ? (
                <Image
                  src={(footerData.logo as Media).url!}
                  alt={(footerData.logo as Media).alt || "Downtown Trini's"}
                  width={180}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
              ) : (
                <Logo className="text-background text-2xl" />
              )}
            </Link>
            <SocialIcons
              data={footerData.socialLinks}
              className="mt-4"
              iconClassName="border-background/30 text-background/60 hover:text-background hover:border-background"
            />
          </div>

          {columns.map((column, i) => (
            <div key={i}>
              {column.heading && (
                <h4 className="font-heading text-lg font-semibold mb-4">{column.heading}</h4>
              )}
              {column.contentType === 'richText' && column.richText && (
                <div className="text-background/70 text-sm leading-relaxed [&_a]:text-background/70 [&_a:hover]:text-background [&_a]:transition-colors">
                  <RichText data={column.richText} enableGutter={false} />
                </div>
              )}
              {column.contentType === 'navLinks' && column.navItems && (
                <nav className="flex flex-col gap-2">
                  {column.navItems.map(({ link }, j) => (
                    <CMSLink
                      className="text-background/70 text-sm hover:text-background transition-colors"
                      key={j}
                      {...link}
                    />
                  ))}
                </nav>
              )}
            </div>
          ))}
        </div>

        {footerData.copyright && (
          <div className="mt-10 pt-6 border-t border-background/20 text-center text-background/50 text-xs">
            &copy; {new Date().getFullYear()} {footerData.copyright}. All rights reserved.
          </div>
        )}
      </div>
    </footer>
  )
}
