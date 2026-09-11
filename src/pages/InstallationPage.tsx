import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { InlineCode } from "@/components/atoms/InlineCode";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { PACKAGE_NAME, PACKAGE_VERSION } from "@/lib/constants";

export function InstallationPage() {
  return (
    <DocArticle
      title="Instalação"
      description="O pacote não tem dependências de runtime. Basta um gerenciador de pacotes e um ambiente com fetch."
      toc={[
        { id: "npm", title: "npm" },
        { id: "outras-ferramentas", title: "Yarn, pnpm e bun" },
        { id: "versao", title: "Versão atual" },
      ]}
    >
      <HeadingAnchor id="npm">npm</HeadingAnchor>
      <CodeBlock language="bash" filename="terminal" code={`npm install ${PACKAGE_NAME}`} />

      <HeadingAnchor id="outras-ferramentas">Yarn, pnpm e bun</HeadingAnchor>
      <CodeBlock
        language="bash"
        filename="terminal"
        code={`yarn add ${PACKAGE_NAME}
pnpm add ${PACKAGE_NAME}
bun add ${PACKAGE_NAME}`}
      />

      <Callout tone="tip" title="TypeScript">
        Os tipos entram junto com o pacote via <InlineCode>index.d.ts</InlineCode>.
        Não é necessário instalar um pacote <InlineCode>@types</InlineCode> extra.
      </Callout>

      <HeadingAnchor id="versao">Versão atual</HeadingAnchor>
      <p>
        A documentação descreve a linha <InlineCode>{PACKAGE_VERSION}</InlineCode>{" "}
        publicada no npm. Confira o README do repositório se você estiver em um
        commit mais recente.
      </p>
    </DocArticle>
  );
}
