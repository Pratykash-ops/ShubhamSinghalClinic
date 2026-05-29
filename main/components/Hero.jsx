// components/Hero.jsx
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

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
          <button
            onClick={() => { window.location.href = 'tel:+918076449095'; }}
            data-nosnippet
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Dr. Shubham
          </button>
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
        className="relative w-56 h-56 md:w-72 md:h-72 bg-accent rounded-full shadow-xl flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src="/assets/dr-shubham-inv1.jpg"
          alt="Dr. Shubham Singhal"
          className="object-cover"
          fill
          priority
        />
      </motion.div>
    </section>
  );
}
