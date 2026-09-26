import type { NavSection, SearchEntry } from "@/types/docs";

export const navigation: NavSection[] = [
  {
    items: [
      { kind: "link", title: "Introdução", href: "/", icon: "book" },
    ],
  },
  {
    label: "Começando",
    items: [
      {
        kind: "group",
        title: "Primeiros passos",
        items: [
          { kind: "link", title: "Instalação", href: "/installation" },
          { kind: "link", title: "Início rápido", href: "/getting-started" },
          { kind: "link", title: "Configuração", href: "/configuration" },
        ],
      },
    ],
  },
  {
    label: "Uso",
    items: [
      {
        kind: "group",
        title: "Cliente HTTP",
        items: [
          { kind: "link", title: "Métodos", href: "/http-client" },
          { kind: "link", title: "Opções de request", href: "/request-options" },
          { kind: "link", title: "Cache", href: "/cache" },
        ],
      },
      {
        kind: "group",
        title: "Autenticação",
        items: [
          { kind: "link", title: "Tokens", href: "/authentication" },
          { kind: "link", title: "Requests autenticadas", href: "/authenticated-requests" },
        ],
      },
      {
        kind: "group",
        title: "Utilitários",
        items: [
          { kind: "link", title: "Dispositivo", href: "/device" },
          { kind: "link", title: "Transformação de dados", href: "/helpers" },
        ],
      },
    ],
  },
  {
    label: "Referência",
    items: [
      { kind: "link", title: "API Reference", href: "/api-reference" },
      { kind: "link", title: "Erros", href: "/errors" },
      { kind: "link", title: "Exemplos", href: "/examples" },
    ],
  },
  {
    label: "Projeto",
    items: [
      { kind: "link", title: "Versão 1.3.0", href: "/changelog" },
      { kind: "link", title: "Licença e créditos", href: "/credits" },
    ],
  },
];

export const pageOrder = [
  "/",
  "/installation",
  "/getting-started",
  "/configuration",
  "/http-client",
  "/request-options",
  "/cache",
  "/authentication",
  "/authenticated-requests",
  "/device",
  "/helpers",
  "/api-reference",
  "/errors",
  "/examples",
  "/changelog",
  "/credits",
] as const;

export const pageTitles: Record<string, string> = {
  "/": "Introdução",
  "/installation": "Instalação",
  "/getting-started": "Início rápido",
  "/configuration": "Configuração",
  "/http-client": "Métodos HTTP",
  "/request-options": "Opções de request",
  "/cache": "Cache",
  "/authentication": "Tokens",
  "/authenticated-requests": "Requests autenticadas",
  "/device": "Dispositivo",
  "/helpers": "Transformação de dados",
  "/api-reference": "API Reference",
  "/errors": "Erros",
  "/examples": "Exemplos",
  "/changelog": "Versão 1.3.0",
  "/credits": "Licença e créditos",
};

export const searchIndex: SearchEntry[] = [
  {
    title: "Introdução",
    href: "/",
    section: "Guia",
    keywords: "easy-api-consumer http client typescript autenticação cache",
  },
  {
    title: "Instalação",
    href: "/installation",
    section: "Começando",
    keywords: "npm install yarn pnpm 1.3.0",
  },
  {
    title: "Início rápido",
    href: "/getting-started",
    section: "Começando",
    keywords: "EasyAPIConsumer api endpoints login",
  },
  {
    title: "Configuração",
    href: "/configuration",
    section: "Começando",
    keywords: "baseURL IApiConfig credentials same-origin",
  },
  {
    title: "Métodos HTTP",
    href: "/http-client",
    section: "Cliente HTTP",
    keywords: "get post put patch delete request skipSlashRetry",
  },
  {
    title: "Opções de request",
    href: "/request-options",
    section: "Cliente HTTP",
    keywords: "auth timeout camelCase bodyAsIs headers signal silent401 useCache credentials",
  },
  {
    title: "Cache",
    href: "/cache",
    section: "Cliente HTTP",
    keywords: "sessionStorage useCache maxCacheAge clearAll eac:cache ICacheEntry",
  },
  {
    title: "Tokens",
    href: "/authentication",
    section: "Autenticação",
    keywords: "getAuthToken setAuthToken clearAuthToken localStorage access_token XSS HttpOnly",
  },
  {
    title: "Requests autenticadas",
    href: "/authenticated-requests",
    section: "Autenticação",
    keywords: "Bearer Authorization noAuth 401 credentials include",
  },
  {
    title: "Dispositivo",
    href: "/device",
    section: "Utilitários",
    keywords: "Device-Type Device-Ip-Address android ios ipv4 ipv6 timeout",
  },
  {
    title: "Transformação de dados",
    href: "/helpers",
    section: "Utilitários",
    keywords: "toCamelCase toSnakeCase ensureArray transformKeys prototype pollution",
  },
  {
    title: "API Reference",
    href: "/api-reference",
    section: "Referência",
    keywords: "EasyAPIConsumer IRequestOptions IApi ICacheEntry cache",
  },
  {
    title: "Erros",
    href: "/errors",
    section: "Referência",
    keywords: "ApiError 401 403 404 500",
  },
  {
    title: "Exemplos",
    href: "/examples",
    section: "Referência",
    keywords: "authApi login register logout cache credentials",
  },
  {
    title: "Versão 1.3.0",
    href: "/changelog",
    section: "Projeto",
    keywords: "changelog breaking credentials same-origin tipagem segurança",
  },
  {
    title: "Licença e créditos",
    href: "/credits",
    section: "Projeto",
    keywords: "GPL SorPuti Davi yLorde",
  },
];

export function flattenLinks() {
  return navigation.flatMap((section) =>
    section.items.flatMap((item) =>
      item.kind === "link" ? [item] : item.items,
    ),
  );
}

export function getAdjacentPages(pathname: string) {
  const index = pageOrder.indexOf(pathname as (typeof pageOrder)[number]);
  if (index === -1) return { prev: null, next: null };

  const prevHref = pageOrder[index - 1];
  const nextHref = pageOrder[index + 1];

  return {
    prev: prevHref
      ? { href: prevHref, title: pageTitles[prevHref] }
      : null,
    next: nextHref
      ? { href: nextHref, title: pageTitles[nextHref] }
      : null,
  };
}
