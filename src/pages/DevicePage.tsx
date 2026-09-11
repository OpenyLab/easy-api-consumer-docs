import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function DevicePage() {
  return (
    <DocArticle
      title="Dispositivo"
      description="Dois utilitários opcionais enriquecem a request com o tipo de cliente e o IP público."
      toc={[
        { id: "tipo", title: "Device type" },
        { id: "ip", title: "IP address" },
      ]}
    >
      <HeadingAnchor id="tipo">Device type</HeadingAnchor>
      <p>
        <InlineCode>getDeviceType()</InlineCode> lê <InlineCode>navigator.userAgent</InlineCode>{" "}
        e devolve um de:
      </p>
      <CodeBlock
        code={`export type DeviceType =
  | "android"
  | "ios"
  | "windows"
  | "macos"
  | "linux"
  | "unknown";`}
      />
      <p>
        Com <InlineCode>includesDeviceType: true</InlineCode>, o valor vai no header{" "}
        <InlineCode>device-type</InlineCode>.
      </p>

      <HeadingAnchor id="ip">IP address</HeadingAnchor>
      <p>
        <InlineCode>getDeviceIpAddress()</InlineCode> consulta{" "}
        <InlineCode>https://api.ipify.org/?format=json</InlineCode>. Se a chamada
        falhar, retorna <InlineCode>::1</InlineCode>.
      </p>
      <CodeBlock
        code={`api.post("/auth/login", body, {
  auth: false,
  includesDeviceType: true,
  includesDeviceIpAddress: true,
});`}
      />
      <Callout tone="warn">
        Resolver o IP depende de uma API externa e só funciona no browser. Em
        SSR ou ambientes sem rede, não ative <InlineCode>includesDeviceIpAddress</InlineCode>.
      </Callout>
    </DocArticle>
  );
}
