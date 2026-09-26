import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { ExternalLink } from "@/components/atoms/ExternalLink";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";
import { GITHUB_URL } from "@/lib/constants";

export function ChangelogPage() {
  return (
    <DocArticle
      title="Versão 1.3.0"
      description="Cache em sessionStorage, credentials same-origin por padrão e tipagem estrita em IRequestOptions. Este guia cobre a migração a partir da 1.2.x."
      toc={[
        { id: "pilares", title: "O que mudou" },
        { id: "breaking", title: "Breaking changes" },
        { id: "seguranca", title: "Segurança" },
      ]}
    >
      <HeadingAnchor id="pilares">O que mudou</HeadingAnchor>
      <p>
        A <InlineCode>1.3.0</InlineCode> tem dois eixos: cache opcional no{" "}
        <InlineCode>sessionStorage</InlineCode> e um patch de segurança (cookies
        cross-origin, Prototype Pollution, timeout no IP, retry só em métodos
        idempotentes e tipos sem <InlineCode>any</InlineCode>).
      </p>
      <p>
        O changelog técnico da biblioteca está em{" "}
        <ExternalLink href={`${GITHUB_URL}/blob/main/docs/updates/UPDATE_1_3.md`}>
          UPDATE_1_3.md
        </ExternalLink>
        .
      </p>

      <HeadingAnchor id="breaking">Breaking changes</HeadingAnchor>
      <p>
        <strong className="text-guide-text">Cookies.</strong> Antes cada chamada
        usava <InlineCode>credentials: &quot;include&quot;</InlineCode>. Agora o
        padrão é <InlineCode>&quot;same-origin&quot;</InlineCode>. Se a API está em
        outro domínio e você depende de cookies de sessão, passe{" "}
        <InlineCode>include</InlineCode> na request:
      </p>
      <CodeBlock
        code={`const profile = await api.get("/profile", {
  credentials: "include",
});`}
      />
      <p>
        <strong className="text-guide-text">Tipagem.</strong> Os métodos{" "}
        <InlineCode>api.get</InlineCode>, <InlineCode>post</InlineCode>,{" "}
        <InlineCode>put</InlineCode>, <InlineCode>patch</InlineCode> e{" "}
        <InlineCode>delete</InlineCode> aceitam só <InlineCode>IRequestOptions</InlineCode>.
        Propriedades fora dessa interface viram erro de compilação.
      </p>
      <Callout tone="warn" title="Retry de barra">
        A segunda tentativa em 404/405 agora roda só em <InlineCode>GET</InlineCode>,{" "}
        <InlineCode>HEAD</InlineCode> e <InlineCode>OPTIONS</InlineCode>. Mutações
        não são reexecutadas quando o path com barra falha.
      </Callout>

      <HeadingAnchor id="seguranca">Segurança</HeadingAnchor>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <InlineCode>transformKeys</InlineCode> ignora{" "}
          <InlineCode>__proto__</InlineCode>, <InlineCode>constructor</InlineCode> e{" "}
          <InlineCode>prototype</InlineCode>.
        </li>
        <li>
          O IP do dispositivo só entra no header se passar na validação de IPv4 ou
          IPv6; a consulta ao ipify aborta em 5 segundos.
        </li>
        <li>
          O timer de timeout é limpo no <InlineCode>finally</InlineCode> e o{" "}
          <InlineCode>AbortSignal</InlineCode> externo usa{" "}
          <InlineCode>{`{ once: true }`}</InlineCode>.
        </li>
        <li>
          Tokens em <InlineCode>localStorage</InlineCode> continuam vulneráveis a
          XSS; o JSDoc de <InlineCode>setAuthToken</InlineCode> recomenda cookies
          HttpOnly no backend.
        </li>
      </ul>
    </DocArticle>
  );
}
