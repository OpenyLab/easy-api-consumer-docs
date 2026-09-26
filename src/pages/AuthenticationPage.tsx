import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function AuthenticationPage() {
  return (
    <DocArticle
      title="Tokens"
      description="O token Bearer fica em localStorage na chave access_token. Os helpers ignoram o servidor (SSR devolve null)."
      toc={[
        { id: "helpers", title: "Helpers" },
        { id: "storage", title: "Storage" },
      ]}
    >
      <HeadingAnchor id="helpers">Helpers</HeadingAnchor>
      <CodeBlock
        code={`const { token } = easyApi;

token.setAuthToken(jwt);
token.getAuthToken(); // string | null
token.clearAuthToken();`}
      />
      <p>
        Depois do login, persista o JWT. As próximas requests autenticadas leem esse
        valor automaticamente.
      </p>

      <HeadingAnchor id="storage">Storage</HeadingAnchor>
      <p>
        A constante interna é <InlineCode>AUTH_TOKEN_KEY = &quot;access_token&quot;</InlineCode>.
        Qualquer outra aba da mesma origem enxerga o mesmo token.
      </p>
      <Callout tone="warn">
        <InlineCode>localStorage</InlineCode> é acessível a scripts da página. Um
        XSS lê o Bearer. Não use este padrão para tokens de longa duração; no
        backend, prefira cookies HttpOnly. A 1.3.0 deixa esse aviso no JSDoc de{" "}
        <InlineCode>setAuthToken</InlineCode>.
      </Callout>
    </DocArticle>
  );
}
