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
      <Callout tone="warn" title="Cookies (1.3.0)">
        O padrão passou a ser <InlineCode>credentials: &quot;same-origin&quot;</InlineCode>.
        Cookies de outra origem não saem mais sozinhos. Para sessão cross-origin,
        use <InlineCode>credentials: &quot;include&quot;</InlineCode> na request — veja
        a página de opções e o guia da versão 1.3.0.
      </Callout>
    </DocArticle>
  );
}
