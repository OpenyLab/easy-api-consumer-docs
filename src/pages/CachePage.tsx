import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { OptionRow } from "@/components/molecules/OptionRow";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function CachePage() {
  return (
    <DocArticle
      title="Cache"
      description="A partir da 1.3.0, respostas JSON podem ir para o sessionStorage da aba. O cache some ao fechar a sessão e não deve guardar dados sensíveis."
      toc={[
        { id: "como-funciona", title: "Como funciona" },
        { id: "opcoes", title: "Opções" },
        { id: "uso", title: "Uso" },
        { id: "limpeza", title: "Limpeza" },
      ]}
    >
      <HeadingAnchor id="como-funciona">Como funciona</HeadingAnchor>
      <p>
        Com <InlineCode>useCache: true</InlineCode>, o client consulta o{" "}
        <InlineCode>sessionStorage</InlineCode> antes da rede. A chave usa o prefixo{" "}
        <InlineCode>eac:cache:</InlineCode> mais a URL da request — por exemplo{" "}
        <InlineCode>eac:cache:https://api.site.com/products</InlineCode>.
      </p>
      <p>
        Cada entrada segue <InlineCode>ICacheEntry</InlineCode>: o payload, um{" "}
        <InlineCode>timestamp</InlineCode> em milissegundos e o{" "}
        <InlineCode>maxAge</InlineCode> daquela leitura. Se a idade passar do{" "}
        <InlineCode>maxAge</InlineCode>, a chave é removida e a request segue para a
        API. Só respostas JSON bem-sucedidas entram no cache.
      </p>
      <Callout>
        O armazenamento é por aba. Fechar a aba ou o navegador descarta os dados. Em{" "}
        <InlineCode>QuotaExceededError</InlineCode>, a biblioteca apaga só as chaves
        com prefixo <InlineCode>eac:cache:</InlineCode> e tenta gravar de novo.
      </Callout>

      <HeadingAnchor id="opcoes">Opções</HeadingAnchor>
      <div className="rounded-xl border border-guide-border bg-guide-elevated px-4">
        <OptionRow name="useCache" type="boolean" defaultValue="false">
          Liga o cache da resposta no <InlineCode>sessionStorage</InlineCode>.
        </OptionRow>
        <OptionRow name="maxCacheAge" type="number" defaultValue="15000">
          Tempo de vida em milissegundos. O padrão é 15 segundos.
        </OptionRow>
      </div>

      <HeadingAnchor id="uso">Uso</HeadingAnchor>
      <CodeBlock
        filename="cache.ts"
        code={`import { EasyAPIConsumer } from "easy-api-consumer";

const easyApi = new EasyAPIConsumer({
  baseURL: "https://api.exemplo.com",
});

const { api } = easyApi;

const users = await api.get("/users", {
  useCache: true,
});

const categories = await api.get("/categories", {
  useCache: true,
  maxCacheAge: 60_000,
});`}
      />
      <Callout tone="warn">
        Não ative cache em endpoints com PII, tokens ou dados financeiros. Qualquer
        script da origem lê o <InlineCode>sessionStorage</InlineCode>.
      </Callout>

      <HeadingAnchor id="limpeza">Limpeza</HeadingAnchor>
      <p>
        Para invalidar tudo que a biblioteca gravou, use a instância ou o export
        avulso:
      </p>
      <CodeBlock
        code={`easyApi.cache.clearAll();

import { clearAllCacheEntries } from "easy-api-consumer";
clearAllCacheEntries();`}
      />
      <p>
        A limpeza não mexe em outras chaves do <InlineCode>sessionStorage</InlineCode>{" "}
        da aplicação.
      </p>
    </DocArticle>
  );
}
