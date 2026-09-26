import { DocArticle } from "@/components/organisms/DocArticle";
import { FeatureCard } from "@/components/molecules/FeatureCard";
import { ExternalLink } from "@/components/atoms/ExternalLink";
import { InlineCode } from "@/components/atoms/InlineCode";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { AUTHOR_URL, NPM_URL } from "@/lib/constants";

export function IntroductionPage() {
  return (
    <DocArticle
      title="Introdução"
      showGithub
      description="Se você está lendo isto, provavelmente quer consumir APIs HTTP com TypeScript sem repetir configuração, autenticação e transformação de payload em cada request. Este guia cobre o easy-api-consumer do zero até uma camada de endpoints reutilizável."
      toc={[
        { id: "o-que-voce-vai-aprender", title: "O que você vai aprender" },
        { id: "antes-de-comecar", title: "Antes de começar" },
      ]}
    >
      <p>
        O <InlineCode>easy-api-consumer</InlineCode> é uma biblioteca Node.js / browser
        para requests HTTP, gestão de token Bearer, headers de dispositivo, cache
        opcional no <InlineCode>sessionStorage</InlineCode> e uma API tipada que você
        organiza por domínio — login, perfil, recursos — sem duplicar{" "}
        <InlineCode>fetch</InlineCode>.
      </p>

      <HeadingAnchor id="o-que-voce-vai-aprender">O que você vai aprender</HeadingAnchor>
      <ul className="list-disc space-y-2 pl-5">
        <li>Como instalar e inicializar o cliente com um <InlineCode>baseURL</InlineCode>;</li>
        <li>Como agrupar endpoints em objetos reutilizáveis;</li>
        <li>Como ligar e desligar autenticação por request;</li>
        <li>Como enviar tipo de dispositivo e IP nos headers;</li>
        <li>Como cachear respostas JSON na aba e quando não fazer isso;</li>
        <li>Como tratar <InlineCode>401</InlineCode>, timeouts e <InlineCode>ApiError</InlineCode>.</li>
      </ul>

      <HeadingAnchor id="antes-de-comecar">Antes de começar</HeadingAnchor>
      <p>
        Você precisa de TypeScript (ou JavaScript moderno) e de um runtime com{" "}
        <InlineCode>fetch</InlineCode> — browsers atuais ou Node 18+. O token de
        autenticação vive em <InlineCode>localStorage</InlineCode> e o cache, quando
        ligado, em <InlineCode>sessionStorage</InlineCode> — o fluxo autenticado e o
        cache são pensados principalmente para o cliente.
      </p>
      <p>
        O pacote está publicado no{" "}
        <ExternalLink href={NPM_URL}>npm</ExternalLink> e o código-fonte no GitHub.
        Autor:{" "}
        <ExternalLink href={AUTHOR_URL}>yLorde</ExternalLink>.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <FeatureCard title="Instalação" href="/installation">
          Adicione o pacote com npm, yarn ou pnpm em um único comando.
        </FeatureCard>
        <FeatureCard title="Início rápido" href="/getting-started">
          Configure o client, declare endpoints e faça o primeiro login.
        </FeatureCard>
        <FeatureCard title="Autenticação" href="/authentication">
          Salve, leia e limpe o Bearer token com os helpers oficiais.
        </FeatureCard>
        <FeatureCard title="Cache" href="/cache">
          Respostas JSON no sessionStorage, com validade e limpeza por prefixo.
        </FeatureCard>
        <FeatureCard title="Versão 1.3.0" href="/changelog">
          Breaking changes de credentials, tipagem estrita e hardening.
        </FeatureCard>
        <FeatureCard title="API Reference" href="/api-reference">
          Superfície completa da classe, opções e utilitários.
        </FeatureCard>
      </div>
    </DocArticle>
  );
}
