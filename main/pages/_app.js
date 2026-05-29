import Layout from "@/components/Layout";
import { LanguageProvider } from "@/contexts/LanguageContext";
import WelcomeModal from "@/components/WelcomeModal";
import { Analytics } from "@vercel/analytics/react";
import { Cormorant_Upright, Montserrat } from "next/font/google";
import "@/styles/globals.css";

const cormorant = Cormorant_Upright({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${cormorant.variable} ${montserrat.variable} font-sans`}>
      <LanguageProvider>
        <WelcomeModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </LanguageProvider>
    </div>
  );
}
