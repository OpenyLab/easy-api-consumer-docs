import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function ApiReferencePage() {
  return (
    <DocArticle
      title="API Reference"
      description="Mapa da classe EasyAPIConsumer e dos tipos públicos da 1.3.0."
      toc={[
        { id: "classe", title: "EasyAPIConsumer" },
        { id: "iapi", title: "IApi" },
        { id: "options", title: "IRequestOptions" },
        { id: "cache-entry", title: "ICacheEntry" },
        { id: "exports", title: "Exports" },
      ]}
    >
      <HeadingAnchor id="classe">EasyAPIConsumer</HeadingAnchor>
      <CodeBlock
        filename="index.ts"
        code={`class EasyAPIConsumer {
  api: IApi;
  noAuth: { auth: false };
  request: typeof request;
  token: {
    getAuthToken(): string | null;
    setAuthToken(token: string): void;
    clearAuthToken(): void;
  };
  functions: {
    snakeToCamel(value: string): string;
    toCamelCase<T>(obj: T): T;
    toSnakeCase<T>(obj: T): T;
    ensureArray<T>(value: T | T[] | null | undefined): T[];
    transformKeys(obj: unknown, transform: (key: string) => string): unknown;
  };
  utils: {
    getDeviceType(): DeviceType;
    getDeviceIpAddress(): Promise<string>;
  };
  cache: {
    clearAll(): void;
  };

  constructor(config: { baseURL: string });
}`}
      />

      <HeadingAnchor id="iapi">IApi</HeadingAnchor>
      <p>
        Os métodos aceitam <InlineCode>options?: IRequestOptions</InlineCode>. Na
        1.3.0 o parâmetro deixou de ser <InlineCode>any</InlineCode>.
      </p>
      <CodeBlock
        code={`interface IApi {
  get<T = unknown>(path: string, options?: IRequestOptions): Promise<T>;
  post<T = unknown>(path: string, body?: unknown, options?: IRequestOptions): Promise<T>;
  put<T = unknown>(path: string, body?: unknown, options?: IRequestOptions): Promise<T>;
  patch<T = unknown>(path: string, body?: unknown, options?: IRequestOptions): Promise<T>;
  delete<T = unknown>(path: string, options?: IRequestOptions): Promise<T>;
}`}
      />

      <HeadingAnchor id="options">IRequestOptions</HeadingAnchor>
      <CodeBlock
        filename="IRequestOptions.ts"
        code={`interface IRequestOptions {
  body?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
  timeout?: number;
  auth?: boolean;
  silent401?: boolean;
  camelCase?: boolean;
  bodyAsIs?: boolean;
  skipSlashRetry?: boolean;
  includesDeviceType?: boolean;
  includesDeviceIpAddress?: boolean;
  useCache?: boolean;
  maxCacheAge?: number;
  credentials?: RequestCredentials;
}`}
      />

      <HeadingAnchor id="cache-entry">ICacheEntry</HeadingAnchor>
      <CodeBlock
        code={`interface ICacheEntry<T = unknown> {
  data: T;
  timestamp: number;
  maxAge: number;
}`}
      />

      <HeadingAnchor id="exports">Exports</HeadingAnchor>
      <p>
        Além da classe, o pacote declara <InlineCode>createApi</InlineCode>,{" "}
        <InlineCode>request</InlineCode>, os helpers de token, as funções de
        transformação e <InlineCode>clearAllCacheEntries</InlineCode> no{" "}
        <InlineCode>index.d.ts</InlineCode>. O caminho mais estável para aplicação
        é instanciar <InlineCode>EasyAPIConsumer</InlineCode> e usar{" "}
        <InlineCode>easyApi.cache.clearAll()</InlineCode>.
      </p>
    </DocArticle>
  );
}
