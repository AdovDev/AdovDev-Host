// middleware/redirectSecondary.ts
export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server) {
    const host = useRequestHeaders().host;
    if (host === "adov.dev") {
      return navigateTo(`https://adovdev.com${to.fullPath}`, { redirectCode: 301 });
    }
  }
});