import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { OptionRow } from "@/components/molecules/OptionRow";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function HelpersPage() {
  return (
    <DocArticle
      title="Transformação de dados"
      description="easyApi.functions expõe os mesmos helpers usados internamente na serialização."
      toc={[
        { id: "funcoes", title: "Funções" },
        { id: "exemplo", title: "Exemplo" },
      ]}
    >
      <HeadingAnchor id="funcoes">Funções</HeadingAnchor>
      <div className="rounded-xl border border-guide-border bg-guide-elevated px-4">
        <OptionRow name="snakeToCamel" type="(value: string) => string">
          Converte uma chave <InlineCode>user_name</InlineCode> em{" "}
          <InlineCode>userName</InlineCode>.
        </OptionRow>
        <OptionRow name="toCamelCase" type="<T>(obj: T) => T">
          Aplica a conversão em objetos e arrays, de forma recursiva.
        </OptionRow>
        <OptionRow name="toSnakeCase" type="<T>(obj: T) => T">
          O inverso: <InlineCode>userName</InlineCode> vira{" "}
          <InlineCode>user_name</InlineCode>.
        </OptionRow>
        <OptionRow name="transformKeys" type="(obj, transform) => unknown">
          Percorre a estrutura com a função de transformação que você passar.
        </OptionRow>
        <OptionRow name="ensureArray" type="<T>(value) => T[]">
          Normaliza <InlineCode>null</InlineCode>, um item ou uma lista para sempre
          devolver array.
        </OptionRow>
      </div>

      <HeadingAnchor id="exemplo">Exemplo</HeadingAnchor>
      <CodeBlock
        code={`const { functions } = easyApi;

functions.toCamelCase({ user_name: "ada" });
// { userName: "ada" }

functions.ensureArray("ok");
// ["ok"]`}
      />
    </DocArticle>
  );
}
