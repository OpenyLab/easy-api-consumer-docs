import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function ConfigurationPage() {
  return (
    <DocArticle
      title="Configuração"
      description="Hoje o client pede apenas a URL base. Headers, timeout e autenticação entram por request."
      toc={[
        { id: "iapiconfig", title: "IApiConfig" },
        { id: "headers-padrao", title: "Headers padrão" },
      ]}
    >
      <HeadingAnchor id="iapiconfig">IApiConfig</HeadingAnchor>
      <CodeBlock
        filename="IApiConfig.ts"
        code={`export interface IApiConfig {
  baseURL: string;
}`}
      />
      <p>
        O <InlineCode>baseURL</InlineCode> é concatenado ao path em cada método:{" "}
        <InlineCode>config.baseURL + path</InlineCode>. Evite barra duplicada —
        use <InlineCode>https://api.site.com</InlineCode> e paths como{" "}
        <InlineCode>/auth/login</InlineCode>.
      </p>

      <HeadingAnchor id="headers-padrao">Headers padrão</HeadingAnchor>
      <p>Toda request envia pelo menos:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <InlineCode>api-consumer: Easy-API-Consumer</InlineCode>
        </li>
        <li>
          <InlineCode>ngrok-skip-browser-warning: 1</InlineCode> — útil em túneis
          de desenvolvimento
        </li>
        <li>
          <InlineCode>Content-Type: application/json</InlineCode> — omitido quando
          o body é <InlineCode>FormData</InlineCode>
        </li>
      </ul>
      <Callout tone="tip">
        Cookies de sessão também seguem junto: o client usa{" "}
        <InlineCode>credentials: &quot;include&quot;</InlineCode> em paralelo ao
        header Bearer.
      </Callout>
    </DocArticle>
  );
}
