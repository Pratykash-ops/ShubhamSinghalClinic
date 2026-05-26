import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function JourneyPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-[#fdfbf7] min-h-screen font-sans selection:bg-blue-200">
      <Head>
        <title>{t("journeyTitle")} | Dr. Shubham Singhal</title>
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/light_in_darkness.png"
            alt="Light in darkness"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
          >
            {t("journeyTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 font-medium italic"
          >
            {t("journeySubtitle")}
          </motion.p>
        </div>
      </section>

      <main className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto space-y-32">
        {/* Story 1: The Tangled Mind */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("journeyTangled")}
            </h2>
            <h3 className="text-xl text-blue-700 font-semibold mb-4">
              {t("journeyStep1Title")}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t("journeyStep1P1")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("journeyStep1P2")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative h-80 md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/tangled_mind.png"
              alt="Tangled mind unravelling"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Story 2: Exploring the Roots */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/light_in_darkness.png"
              alt="Light breaking through darkness"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("journeyLight")}
            </h2>
            <h3 className="text-xl text-blue-700 font-semibold mb-4">
              {t("journeyStep2Title")}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t("journeyStep2P1")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("journeyStep2P2")}
            </p>
          </motion.div>
        </div>

        {/* Story 3: Kintsugi */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("journeyKintsugi")}
            </h2>
            <h3 className="text-xl text-amber-600 font-semibold mb-4">
              {t("journeyStep3Title")}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t("journeyStep3P1")}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("journeyStep3P2")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative h-80 md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/assets/kintsugi.png"
              alt="Kintsugi pottery with gold"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-white p-12 rounded-3xl shadow-xl border border-blue-50"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            {t("journeyCTA")}
          </h3>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            {t("journeyCTADesc")}
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Dr.%20Shubham,%20I%20am%20reaching%20out%20because%20I%20feel..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {t("journeyButton")}
          </a>
        </motion.div>
      </main>
    </div>
  );
}
