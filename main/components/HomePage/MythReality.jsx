"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

function FlipCard({ index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useLanguage();

  const myth = t(`myth${index + 1}`);
  const reality = t(`reality${index + 1}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="perspective-1000 w-full h-72 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front - Myth */}
        <div className="absolute inset-0 backface-hidden bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all">
          <div className="w-14 h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-5 text-2xl font-bold shadow-sm">✕</div>
          <h3 className="text-slate-800 font-bold mb-3 tracking-wide">The Myth</h3>
          <p className="text-slate-600 font-medium leading-relaxed">"{myth}"</p>
          <p className="text-[10px] text-slate-400 mt-6 font-bold uppercase tracking-widest">{t("mythHover")}</p>
        </div>

        {/* Back - Reality */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-green-50/90 to-emerald-50/90 backdrop-blur-md border border-green-100/50 rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-xl">
          <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-5 text-2xl font-bold shadow-sm">✓</div>
          <h3 className="text-green-900 font-bold mb-3 tracking-wide">The Reality</h3>
          <p className="text-green-800 text-sm leading-relaxed font-medium">{reality}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function MythReality() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden" id="myth-vs-reality">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          {t("mythTitle")}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-3 max-w-xl mx-auto text-lg"
        >
          {t("mythSubtitle")}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {[0, 1, 2].map((i) => (
          <FlipCard key={i} index={i} />
        ))}
      </div>

      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 font-medium">Curious about what actually happens in a session?</p>
          <Link href="/journey" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300">
            {t("mythHowItWorks")} <span className="ml-2">→</span> <span className="font-normal opacity-80 ml-1">{t("mythJourney")}</span>
          </Link>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </section>
  );
}
