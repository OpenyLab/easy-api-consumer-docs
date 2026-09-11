import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { OptionRow } from "@/components/molecules/OptionRow";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function RequestOptionsPage() {
  return (
    <DocArticle
      title="Opções de request"
      description="Cada chamada aceita IRequestOptions. Os padrões privilegiam JSON, Bearer token e timeout de 30s."
      toc={[
        { id: "opcoes", title: "Campos" },
        { id: "body", title: "Serialização do body" },
      ]}
    >
      <HeadingAnchor id="opcoes">Campos</HeadingAnchor>
      <div className="rounded-xl border border-guide-border bg-guide-elevated px-4">
        <OptionRow name="body" type="unknown">
          Payload da request. Em POST/PUT/PATCH o atalho da API já preenche este
          campo.
        </OptionRow>
        <OptionRow name="headers" type="Record<string, string>" defaultValue="{}">
          Headers extras mesclados depois dos padrões da biblioteca.
        </OptionRow>
        <OptionRow name="signal" type="AbortSignal">
          Cancela a request junto com o timeout interno.
        </OptionRow>
        <OptionRow name="timeout" type="number" defaultValue="30000">
          Abort após N milissegundos. Use <InlineCode>0</InlineCode> para
          desligar.
        </OptionRow>
        <OptionRow name="auth" type="boolean" defaultValue="true">
          Quando verdadeiro, anexa <InlineCode>Authorization: Bearer …</InlineCode>{" "}
          se houver token.
        </OptionRow>
        <OptionRow name="silent401" type="boolean" defaultValue="false">
          Impede limpar o token e disparar o evento{" "}
          <InlineCode>auth:unauthorized</InlineCode> em 401.
        </OptionRow>
        <OptionRow name="camelCase" type="boolean" defaultValue="false">
          Se verdadeiro, o body JSON não é convertido para snake_case.
        </OptionRow>
        <OptionRow name="bodyAsIs" type="boolean" defaultValue="false">
          Envia o body sem transformação de chaves.
        </OptionRow>
        <OptionRow name="skipSlashRetry" type="boolean" defaultValue="false">
          Desliga a segunda tentativa em 404/405.
        </OptionRow>
        <OptionRow name="includesDeviceType" type="boolean">
          Adiciona o header <InlineCode>device-type</InlineCode>.
        </OptionRow>
        <OptionRow name="includesDeviceIpAddress" type="boolean">
          Adiciona o header <InlineCode>device-ip-address</InlineCode> com o IPv4
          público.
        </OptionRow>
      </div>

      <HeadingAnchor id="body">Serialização do body</HeadingAnchor>
      <p>
        Objetos comuns viram JSON. A menos que <InlineCode>bodyAsIs</InlineCode> ou{" "}
        <InlineCode>camelCase</InlineCode> estejam ativos, as chaves do body são
        convertidas para snake_case — <InlineCode>deviceIp</InlineCode> vira{" "}
        <InlineCode>device_ip</InlineCode>.
      </p>
      <CodeBlock
        code={`await api.post("/devices", { deviceIp: "1.1.1.1" });
// body enviado: { "device_ip": "1.1.1.1" }`}
      />
      <Callout>
        <InlineCode>FormData</InlineCode> passa direto, sem{" "}
        <InlineCode>Content-Type</InlineCode> forçado, para o browser definir o
        boundary.
      </Callout>
    </DocArticle>
  );
}
