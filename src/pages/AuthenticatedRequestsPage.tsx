import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function AuthenticatedRequestsPage() {
  return (
    <DocArticle
      title="Requests autenticadas"
      description="Por padrão auth é true. Login e registro devem desligar o Bearer. 401 limpa o token e avisa a UI."
      toc={[
        { id: "ligar-desligar", title: "Ligar e desligar" },
        { id: "noauth", title: "noAuth" },
        { id: "unauthorized", title: "Evento 401" },
        { id: "cookies", title: "Cookies" },
      ]}
    >
      <HeadingAnchor id="ligar-desligar">Ligar e desligar</HeadingAnchor>
      <CodeBlock
        code={`api.get("/auth/me");
api.post("/auth/login", body, { auth: false });`}
      />

      <HeadingAnchor id="noauth">noAuth</HeadingAnchor>
      <p>
        <InlineCode>noAuth</InlineCode> é o atalho <InlineCode>{`{ auth: false }`}</InlineCode>.
      </p>
      <CodeBlock
        code={`api.post("/public/status", undefined, easyApi.noAuth);`}
      />

      <HeadingAnchor id="unauthorized">Evento 401</HeadingAnchor>
      <p>
        Se a resposta for 401, a autenticação estiver ligada e{" "}
        <InlineCode>silent401</InlineCode> for falso, o client:
      </p>
      <ul className="list-disc space-y-2 pl-5">
        <li>remove o token do storage;</li>
        <li>
          dispara <InlineCode>window</InlineCode> com{" "}
          <InlineCode>auth:unauthorized</InlineCode>.
        </li>
      </ul>
      <CodeBlock
        code={`window.addEventListener("auth:unauthorized", () => {
  window.location.assign("/login");
});`}
      />
      <Callout tone="tip">
        Use <InlineCode>silent401: true</InlineCode> em health checks ou tentativas
        de refresh para não deslogar o usuário no primeiro 401.
      </Callout>

      <HeadingAnchor id="cookies">Cookies</HeadingAnchor>
      <p>
        O header Bearer e os cookies são independentes. O padrão{" "}
        <InlineCode>same-origin</InlineCode> não envia cookies para outro domínio.
        Sessão via cookie em API cruzada exige{" "}
        <InlineCode>credentials: &quot;include&quot;</InlineCode> e CORS no backend
        com <InlineCode>Access-Control-Allow-Credentials</InlineCode>.
      </p>
    </DocArticle>
  );
}
