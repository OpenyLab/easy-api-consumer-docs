import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function HttpClientPage() {
  return (
    <DocArticle
      title="Métodos HTTP"
      description="get, post, put, patch e delete compartilham o mesmo pipeline de headers, timeout e serialização."
      toc={[
        { id: "api", title: "api" },
        { id: "request", title: "request" },
        { id: "retry", title: "Retry de barra" },
      ]}
    >
      <HeadingAnchor id="api">api</HeadingAnchor>
      <p>
        <InlineCode>createApi</InlineCode> devolve um objeto com os verbos. POST,
        PUT e PATCH recebem o body como segundo argumento.
      </p>
      <CodeBlock
        filename="uso.ts"
        code={`await api.get("/users");
await api.post("/users", { name: "Ada" });
await api.put("/users/1", { name: "Grace" });
await api.patch("/users/1", { name: "Linus" });
await api.delete("/users/1");`}
      />

      <HeadingAnchor id="request">request</HeadingAnchor>
      <p>
        A instância também expõe <InlineCode>easyApi.request</InlineCode> para
        verbos ou URLs absolutas fora do atalho.
      </p>
      <CodeBlock
        code={`await easyApi.request("GET", "https://api.site.com/health", { auth: false });`}
      />

      <HeadingAnchor id="retry">Retry de barra</HeadingAnchor>
      <p>
        Se a resposta for <InlineCode>404</InlineCode> ou{" "}
        <InlineCode>405</InlineCode> e o path começar com <InlineCode>/</InlineCode>,
        o client tenta de novo usando o path relativo — a menos que{" "}
        <InlineCode>skipSlashRetry</InlineCode> esteja ativo.
      </p>
      <Callout tone="warn">
        Esse retry existe para APIs exigentes com a barra final. Se o seu backend
        já é consistente, desligue com <InlineCode>skipSlashRetry: true</InlineCode>{" "}
        para evitar uma request extra.
      </Callout>
    </DocArticle>
  );
}
