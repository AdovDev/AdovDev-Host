// utils/domains.ts
import { useRequestHeaders } from "#imports";

export function getBaseUrl() {
  if (import.meta.env.DEV) return "https://adov.dev"; // локальная разработка

  if (import.meta.env.DEPLOYMENT === "server") {
    const host = useRequestHeaders().host;
    if (host?.includes("adovdev.com")) return "https://adovdev.com";
  }
  return "https://adov.dev"; // вторичный домен
}
