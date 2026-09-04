'use client'

import Image from 'next/image'
import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvSiteHeaderProps = {
  onSignUp: () => void
}

export default function MvSiteHeader({ onSignUp }: MvSiteHeaderProps) {
  const t = useLandingStrings()

  return (
    <header className="mv-site-header sticky top-0 z-40 w-full shrink-0">
      <div className="mv-section-container flex h-[3.25rem] items-center justify-between gap-3 sm:h-14">
        <div className="flex min-w-0 flex-1 items-center gap-5 lg:gap-8">
          <div
            className="mv-header-logo flex shrink-0 items-center"
            aria-label={t.header.logoLabel}
          >
            <Image
              src="/images/meta/logo-meta.svg"
              alt=""
              width={329}
              height={66}
              className="mv-header-logo-img"
              priority
            />
          </div>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Meta for Business">
            {t.header.nav.map((item) => (
              <span key={item.label} className="mv-header-nav-link whitespace-nowrap">
                {item.label}
              </span>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <button
            type="button"
            onClick={onSignUp}
            className="mv-header-cta shrink-0"
            aria-label={t.header.ctaAria}
          >
            {t.header.cta}
          </button>
        </div>
      </div>
    </header>
  )
}
