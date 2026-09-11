import { DocArticle } from "@/components/organisms/DocArticle";
import { Callout } from "@/components/molecules/Callout";
import { ExternalLink } from "@/components/atoms/ExternalLink";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { AUTHOR_URL } from "@/lib/constants";

export function CreditsPage() {
  return (
    <DocArticle
      title="Licença e créditos"
      description="GPL-3.0-only, com atribuição ao código que inspirou o request.ts."
      toc={[
        { id: "licenca", title: "Licença" },
        { id: "creditos", title: "Créditos" },
        { id: "autor", title: "Autor" },
      ]}
    >
      <HeadingAnchor id="licenca">Licença</HeadingAnchor>
      <p>
        O projeto é licenciado sob a GNU General Public License v3.0. Redistribuição
        e modificações precisam respeitar os termos da GPL.
      </p>

      <HeadingAnchor id="creditos">Créditos</HeadingAnchor>
      <p>
        A implementação de <code className="text-guide-accent">request.ts</code> foi
        baseada em código originalmente criado por{" "}
        <ExternalLink href="https://github.com/SorPuti">SorPuti</ExternalLink> e
        adaptada para este pacote.
      </p>
      <Callout>
        O código original não especificava uma licença de uso. Este crédito existe
        como atribuição ao autor original.
      </Callout>

      <HeadingAnchor id="autor">Autor</HeadingAnchor>
      <p>
        Copyright © 2026 Davi de Sousa —{" "}
        <ExternalLink href={AUTHOR_URL}>ylorde.com.br</ExternalLink>.
      </p>
    </DocArticle>
  );
}
