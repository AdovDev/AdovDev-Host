// utils/domains.ts
import { useRequestHeaders } from "#imports";

export function getBaseUrl() {
  if (import.meta.env.DEV) return "https://adovdev.com"; // локальная разработка

  if (import.meta.env.DEPLOYMENT === "server") {
    const host = useRequestHeaders().host;
    if (host?.includes("adov.dev")) return "https://adov.dev";
  }
  return "https://adovdev.com"; // вторичный домен
}
