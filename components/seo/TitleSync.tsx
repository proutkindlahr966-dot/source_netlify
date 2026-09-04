'use client'

import * as React from 'react'

import { useAppSelector } from '@/app/store/hooks'
import { getSiteDescription, getSiteTitle } from '@/utils/siteTitle'

export default function TitleSync() {
  const locale = useAppSelector((s) => s.locale.locale)

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    document.title = getSiteTitle(locale)
    const description = getSiteDescription(locale)
    document
      .querySelectorAll('meta[name="description"], meta[property="og:description"], meta[name="twitter:description"]')
      .forEach((el) => el.setAttribute('content', description))
  }, [locale])

  return null
}

