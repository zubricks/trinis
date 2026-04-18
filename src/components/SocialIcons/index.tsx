import React from 'react'
import { cn } from '@/utilities/ui'
import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

type SocialLinksData = {
  facebook?: string | null
  instagram?: string | null
  x?: string | null
  yelp?: string | null
}

interface SocialIconsProps {
  data?: SocialLinksData | null
  className?: string
  iconClassName?: string
}

const YelpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.271 6.997c-.496 1.634-.989 3.267-1.482 4.9-.146.484-.543.746-1.027.716-.434-.027-.82-.333-.901-.761a1.147 1.147 0 0 1 .012-.395c.459-2.1.924-4.198 1.393-6.296.161-.72.702-1.09 1.378-.948.63.132 1.025.65.942 1.282-.068.515-.172 1.024-.315 1.502zm-5.244 6.795c.467.186.934.371 1.4.559.597.24.87.73.71 1.301-.148.53-.663.822-1.241.654-.963-.28-1.925-.566-2.885-.856-.659-.2-.961-.712-.803-1.341.147-.585.65-.889 1.323-.72.498.133.998.264 1.496.403zm10.363.11c.158.627-.143 1.14-.8 1.34-.96.294-1.922.58-2.886.86-.58.168-1.094-.124-1.241-.656-.16-.574.115-1.063.714-1.3.963-.384 1.93-.76 2.897-1.135.064-.025.13-.044.197-.06.595-.134 1.013.16 1.119.95zm-3.03 4.58c-.09.617-.539 1.007-1.178 1.008-.646.002-1.292-.006-1.937-.016-.66-.01-1.112-.43-1.19-1.046a.99.99 0 0 1 .62-1.086c.158-.065.33-.099.498-.132.601-.118 1.204-.228 1.806-.343.642-.123 1.163.175 1.324.777.049.182.057.376.057.838zm-6.686-.353c-.587.143-1.193-.217-1.338-.8-.072-.292-.072-.292.024-.63.345-.716.695-1.43 1.047-2.143.265-.537.741-.766 1.273-.628.543.14.844.614.733 1.201-.155.823-.314 1.645-.475 2.467-.05.258-.158.38-.394.46-.288.102-.58.052-.87.073z" />
  </svg>
)

export const SocialIcons: React.FC<SocialIconsProps> = ({
  data,
  className,
  iconClassName,
}) => {
  if (!data) return null

  const links = [
    { url: data.facebook, icon: FacebookIcon, label: 'Facebook' },
    { url: data.instagram, icon: InstagramIcon, label: 'Instagram' },
    { url: data.x, icon: TwitterIcon, label: 'X' },
    { url: data.yelp, icon: YelpIcon, label: 'Yelp' },
  ].filter((link) => link.url)

  if (links.length === 0) return null

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map(({ url, icon: Icon, label }) => (
        <a
          key={label}
          href={url!}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            'w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary transition-colors',
            iconClassName,
          )}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  )
}
