import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { DocsLayout } from "@/components/templates/DocsLayout";
import { IntroductionPage } from "@/pages/IntroductionPage";
import { InstallationPage } from "@/pages/InstallationPage";
import { GettingStartedPage } from "@/pages/GettingStartedPage";
import { ConfigurationPage } from "@/pages/ConfigurationPage";
import { HttpClientPage } from "@/pages/HttpClientPage";
import { RequestOptionsPage } from "@/pages/RequestOptionsPage";
import { CachePage } from "@/pages/CachePage";
import { AuthenticationPage } from "@/pages/AuthenticationPage";
import { AuthenticatedRequestsPage } from "@/pages/AuthenticatedRequestsPage";
import { DevicePage } from "@/pages/DevicePage";
import { HelpersPage } from "@/pages/HelpersPage";
import { ApiReferencePage } from "@/pages/ApiReferencePage";
import { ErrorsPage } from "@/pages/ErrorsPage";
import { ExamplesPage } from "@/pages/ExamplesPage";
import { ChangelogPage } from "@/pages/ChangelogPage";
import { CreditsPage } from "@/pages/CreditsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DocsLayout />,
    children: [
      { index: true, element: <IntroductionPage /> },
      { path: "installation", element: <InstallationPage /> },
      { path: "getting-started", element: <GettingStartedPage /> },
      { path: "configuration", element: <ConfigurationPage /> },
      { path: "http-client", element: <HttpClientPage /> },
      { path: "request-options", element: <RequestOptionsPage /> },
      { path: "cache", element: <CachePage /> },
      { path: "authentication", element: <AuthenticationPage /> },
      { path: "authenticated-requests", element: <AuthenticatedRequestsPage /> },
      { path: "device", element: <DevicePage /> },
      { path: "helpers", element: <HelpersPage /> },
      { path: "api-reference", element: <ApiReferencePage /> },
      { path: "errors", element: <ErrorsPage /> },
      { path: "examples", element: <ExamplesPage /> },
      { path: "changelog", element: <ChangelogPage /> },
      { path: "credits", element: <CreditsPage /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
