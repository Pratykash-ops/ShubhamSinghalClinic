import Layout from "@/components/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WelcomeModal from "@/components/WelcomeModal";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <WelcomeModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </LanguageProvider>
  );
}
