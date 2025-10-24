// utils/seo.ts
import { useHead } from "#app";
import { getBaseUrl } from "./domains";
import { useI18n } from "vue-i18n";
import seoDataJson from "~/config/seo.json";

interface Hreflang {
  lang: string;
  href: string;
}

interface SeoOptions {
  page: "index" | "portfolio" | "about" | "contact" | "egor" | "ilyas";
  url: string;
  image?: string;
  hreflangs?: Hreflang[];
}

export function setSeo({ url, image, hreflangs }: SeoOptions) {
  const { locale } = useI18n();
  const currentLocale = locale.value as "ru" | "en";

  const seoData = seoDataJson[currentLocale];

  const baseUrl = getBaseUrl();
  const finalUrl = baseUrl + url; // для canonical и og:url
  const ogImage = image || "/images/og_main.png";

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seoData.title,
    description: seoData.description,
    url: finalUrl,
  };

  useHead({
    title: seoData.title,
    meta: [
      { name: "description", content: seoData.description },
      { name: "keywords", content: seoData.keywords },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: seoData.title },
      { property: "og:description", content: seoData.description },
      { property: "og:url", content: finalUrl },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seoData.title },
      { name: "twitter:description", content: seoData.description },
      { name: "twitter:image", content: ogImage },
    ],
    link: [
      { rel: "canonical", href: finalUrl },
      ...(hreflangs
        ? hreflangs.map((h) => ({
            rel: "alternate",
            hreflang: h.lang,
            href: baseUrl + h.href,
          }))
        : []),
    ],
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(jsonLdWebPage),
      },
    ],
  });
}
