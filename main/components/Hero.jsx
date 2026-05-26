// components/Hero.jsx
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-20 px-6 sm:px-12 lg:px-24 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-4000"></div>

      {/* Left Text Section */}
      <motion.div
        className="text-center md:text-left max-w-2xl relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight mb-6 tracking-tight">
          {t("heroTitle")}
        </h1>
        <p className="sm:text-xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-wide">
          {t("heroSubtitle")}
        </p>
        <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
          {t("heroDesc")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/contact"
            className="group relative px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10">{t("bookSession")}</span>
          </Link>
          <a
            href="https://wa.me/918076449095?text=Hi%20Dr.%20Shubham,%20I%20am%20reaching%20out%20because%20I%20feel"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book via WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
              ✓
            </span>
            100% Confidential
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-600">
              ★
            </span>
            5.0 Google Rating
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
              ❤
            </span>
            Safe Space
          </div>
        </div>

        {/* Degrees / Qualifications */}
        <div className="mt-6 border-t border-gray-200 pt-6 text-sm text-gray-600 flex flex-col gap-2 font-medium">
          <div className="flex items-center gap-2">
            <span className="text-blue-500">🎓</span> Professional Diploma in Clinical Psychology (RCI)
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">🎓</span> Phd in Clinical Psychology
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">🎓</span> MSc in Clinical Psychology
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">🎓</span> B.Ed. in Special Education
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500">🎓</span> BSc in Clinical Psychology
          </div>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-56 h-56 md:w-72 md:h-72 bg-accent rounded-full shadow-xl flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Placeholder for photo */}
        <img
          src="/assets/dr-shubham-inv.jpg"
          alt="Dr. Shubham Singhal"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
