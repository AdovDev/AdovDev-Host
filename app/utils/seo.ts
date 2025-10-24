// utils/seo.ts
import { useHead } from '#app'

interface Hreflang {
  lang: string
  href: string
}

interface SeoOptions {
  page: 'index' | 'portfolio' | 'about' | 'contact' | 'egor' | 'ilyas'
  url: string
  image?: string
  hreflangs?: Hreflang[]
  seoData: { title: string; description: string } // <- передаем готовые данные
}

export function setSeo({ url, image, hreflangs, seoData }: SeoOptions) {
  const ogImage = image || 'https://adov.dev/images/og_main.png'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AdovDev',
    url,
    logo: 'https://adov.dev/svg/logo.svg',
    sameAs: [
      'https://t.me/adov.dev',
      'https://github.com/MrL1s',
      'https://www.instagram.com/egonys.model'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'adovdev@gmail.com',
        contactType: 'customer service'
      }
    ]
  }

  useHead({
    title: seoData.title,
    meta: [
      { name: 'description', content: seoData.description },
      { property: 'og:title', content: seoData.title },
      { property: 'og:description', content: seoData.description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seoData.title },
      { name: 'twitter:description', content: seoData.description },
      { name: 'twitter:image', content: ogImage }
    ],
    link: hreflangs?.map((h) => ({ rel: 'alternate', hreflang: h.lang, href: h.href })),
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(jsonLd)
      }
    ]
  })
}
