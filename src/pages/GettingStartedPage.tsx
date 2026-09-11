import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { Callout } from "@/components/molecules/Callout";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";
import { InlineCode } from "@/components/atoms/InlineCode";

export function GettingStartedPage() {
  return (
    <DocArticle
      title="Início rápido"
      description="Quatro passos: interfaces, client, endpoints e consumo. O mesmo padrão do README oficial, organizado para crescer com o app."
      toc={[
        { id: "interfaces", title: "1. Interfaces" },
        { id: "client", title: "2. Client" },
        { id: "endpoints", title: "3. Endpoints" },
        { id: "uso", title: "4. Uso" },
      ]}
    >
      <HeadingAnchor id="interfaces">1. Defina as interfaces</HeadingAnchor>
      <p>
        Tipar o body evita payload solto e deixa o autocomplete trabalhar a seu favor.
      </p>
      <CodeBlock
        filename="@/interfaces/ILogin.ts"
        code={`export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRegisterBody {
  username: string;
  email: string;
  password: string;
}`}
      />

      <HeadingAnchor id="client">2. Configure o client</HeadingAnchor>
      <p>
        Instancie <InlineCode>EasyAPIConsumer</InlineCode> uma vez e exporte o que o
        restante da aplicação precisa.
      </p>
      <CodeBlock
        filename="@/lib/api.ts"
        code={`import { EasyAPIConsumer } from "easy-api-consumer";

const easyApi = new EasyAPIConsumer({
  baseURL: "https://api.site.com",
});

const { api, noAuth, utils, token } = easyApi;
const { getDeviceType, getDeviceIpAddress } = utils;
const { getAuthToken, setAuthToken, clearAuthToken } = token;

export {
  api,
  noAuth,
  getAuthToken,
  setAuthToken,
  clearAuthToken,
  getDeviceType,
  getDeviceIpAddress,
};`}
      />
      <Callout>
        A classe centraliza configuração, token e utilitários de dispositivo. Você
        não precisa importar cada helper de um caminho interno do pacote.
      </Callout>

      <HeadingAnchor id="endpoints">3. Agrupe os endpoints</HeadingAnchor>
      <CodeBlock
        filename="@/lib/endpoints/auth.ts"
        code={`import { api } from "../api";
import type { ILoginBody, IRegisterBody } from "@/interfaces/ILogin";

export const authApi = {
  login: (body: ILoginBody) =>
    api.post("/auth/login", body, {
      includesDeviceIpAddress: true,
      includesDeviceType: true,
      auth: false,
    }),

  register: (body: IRegisterBody) =>
    api.post("/auth/register", body, { auth: false }),

  me: () => api.get("/auth/me", { includesDeviceIpAddress: true }),

  logout: () => api.post("/auth/logout", undefined, {
    includesDeviceIpAddress: true,
  }),
};`}
      />

      <HeadingAnchor id="uso">4. Use os endpoints</HeadingAnchor>
      <CodeBlock
        filename="login.ts"
        code={`import { authApi } from "@/lib/endpoints/auth";
import { setAuthToken } from "@/lib/api";

const login = async () => {
  const response = await authApi.login({
    email: "user@example.com",
    password: "password",
  });

  if (response && typeof response === "object" && "access_token" in response) {
    setAuthToken(String(response.access_token));
  }
};`}
      />
      <p>
        Esse recorte mantém a camada HTTP isolada da UI. Quando a API crescer, você
        só adiciona outro objeto — <InlineCode>usersApi</InlineCode>,{" "}
        <InlineCode>ordersApi</InlineCode> — reusando o mesmo client.
      </p>
    </DocArticle>
  );
}
