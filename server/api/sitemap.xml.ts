import { getRoutes } from "~/utils/routes";

export default defineEventHandler(async (event) => {
  const routes = getRoutes(); // получаем список всех маршрутов для sitemap
  const baseUrl = "https://adov.dev";
  const currentDate = new Date().toISOString();

  const urls = routes
    .map((r) => {
      return `
    <url>
      <loc>${baseUrl}${r}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  event.res.setHeader("Content-Type", "application/xml");
  return xml;
});
