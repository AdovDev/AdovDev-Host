// utils/seo.ts
import { useHead } from '#app'
import { useI18n } from 'vue-i18n'

interface Hreflang {
  lang: string
  href: string
}

interface SeoOptions {
  page: 'index' | 'portfolio' | 'about' | 'contact' | 'egor' | 'ilyas'
  url: string
  image?: string
  hreflangs?: Hreflang[]
}

export function setSeo({ page, url, image, hreflangs }: SeoOptions) {
  const { t } = useI18n()

  // Получаем SEO данные из JSON
  const seoDataRaw = t(`seo.${page}`)
  const seoData =
    typeof seoDataRaw === 'string'
      ? { title: seoDataRaw, description: seoDataRaw }
      : (seoDataRaw as { title: string; description: string })

  const ogImage = image || 'https://adovdev.com/images/og_main.png'

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AdovDev',
    url,
    logo: 'https://adovdev.com/svg/logo.svg',
    sameAs: [
      'https://t.me/adovdev',
      'https://github.com/MrL1s',
      'https://www.instagram.com/egonys.model'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'hello@adovdev.com',
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
        // В Nuxt 4 / @vueuse/head нужно использовать innerHTML вместо children
        innerHTML: JSON.stringify(jsonLd)
      }
    ]
  })
}
