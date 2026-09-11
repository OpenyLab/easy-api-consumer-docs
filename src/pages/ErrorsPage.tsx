import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function ErrorsPage() {
  return (
    <DocArticle
      title="Erros"
      description="Respostas fora da faixa 2xx viram ApiError, com status, detalhe e a Response original."
      toc={[
        { id: "apierror", title: "ApiError" },
        { id: "atalhos", title: "Atalhos" },
      ]}
    >
      <HeadingAnchor id="apierror">ApiError</HeadingAnchor>
      <p>
        O client tenta ler JSON (<InlineCode>detail</InlineCode> ou{" "}
        <InlineCode>message</InlineCode>) e cai para texto se o corpo não for JSON.
      </p>
      <CodeBlock
        code={`import { ApiError } from "easy-api-consumer";

try {
  await api.get("/missing");
} catch (error) {
  if (error instanceof ApiError) {
    console.error(error.status, error.message, error.detail);
  }
}`}
      />
      <Callout tone="warn">
        <InlineCode>ApiError</InlineCode> está definido em{" "}
        <InlineCode>src/types/api.ts</InlineCode>. Se o seu bundler não reexportar
        a classe no entrypoint, compare por <InlineCode>error.name === &quot;ApiError&quot;</InlineCode>{" "}
        ou trate qualquer throw da camada HTTP.
      </Callout>

      <HeadingAnchor id="atalhos">Atalhos</HeadingAnchor>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <InlineCode>isNotFound</InlineCode> — 404
        </li>
        <li>
          <InlineCode>isUnauthorized</InlineCode> — 401
        </li>
        <li>
          <InlineCode>isForbidden</InlineCode> — 403
        </li>
        <li>
          <InlineCode>isInternalServerError</InlineCode> — 500
        </li>
      </ul>
    </DocArticle>
  );
}
