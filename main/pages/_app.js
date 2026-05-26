import Layout from "@/components/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import QuestionLadder from "@/components/QuestionLadder";
import WelcomeModal from "@/components/WelcomeModal";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <WelcomeModal />
      <Layout>
        <Component {...pageProps} />
        <QuestionLadder />
      </Layout>
    </LanguageProvider>
  );
}
