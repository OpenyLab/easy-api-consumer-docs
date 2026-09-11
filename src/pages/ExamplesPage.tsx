import { DocArticle } from "@/components/organisms/DocArticle";
import { CodeBlock } from "@/components/molecules/CodeBlock";
import { HeadingAnchor } from "@/components/atoms/HeadingAnchor";

export function ExamplesPage() {
  return (
    <DocArticle
      title="Exemplos"
      description="Um módulo de autenticação completo, do client até o consumo na UI."
      toc={[
        { id: "auth-api", title: "authApi" },
        { id: "ui", title: "Na interface" },
      ]}
    >
      <HeadingAnchor id="auth-api">authApi</HeadingAnchor>
      <CodeBlock
        filename="@/lib/endpoints/auth.ts"
        code={`import { api } from "../api";

export const authApi = {
  login: (body: { email: string; password: string }) =>
    api.post("/auth/login", body, {
      auth: false,
      includesDeviceType: true,
      includesDeviceIpAddress: true,
    }),

  register: (body: { username: string; email: string; password: string }) =>
    api.post("/auth/register", body, { auth: false }),

  me: () => api.get("/auth/me"),

  logout: () => api.post("/auth/logout"),
};`}
      />

      <HeadingAnchor id="ui">Na interface</HeadingAnchor>
      <CodeBlock
        filename="LoginForm.tsx"
        code={`import { authApi } from "@/lib/endpoints/auth";
import { setAuthToken } from "@/lib/api";

async function onSubmit(email: string, password: string) {
  const data = await authApi.login({ email, password });
  const token =
    data && typeof data === "object" && "access_token" in data
      ? String((data as { access_token: string }).access_token)
      : null;

  if (token) setAuthToken(token);

  return authApi.me();
}`}
      />
    </DocArticle>
  );
}
