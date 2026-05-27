"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeenModal) {
      setIsOpen(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("hasSeenWelcome", "true");
    setIsOpen(false);
  };

  // Translations specifically for the modal to avoid adding more bloat to LanguageContext right now
  const text = {
    en: {
      title: "We are here to help you",
      subtitle: "Your mental health matters. Welcome to a safe, non-judgmental space where you can heal, grow, and rediscover your peace.",
      btn: "Enter Website",
      quote: "“Healing doesn't mean the damage never existed. It means the damage no longer controls our lives.”"
    },
    hi: {
      title: "हम आपकी मदद के लिए यहाँ हैं",
      subtitle: "आपका मानसिक स्वास्थ्य बहुत मायने रखता है। एक सुरक्षित और बिना जजमेंट वाली जगह में आपका स्वागत है, जहाँ आप ठीक हो सकते हैं और शांति पा सकते हैं।",
      btn: "वेबसाइट पर जाएँ",
      quote: "“सुधार का मतलब यह नहीं कि चोट कभी थी ही नहीं, बल्कि इसका मतलब है कि अब वह चोट आपकी ज़िंदगी नहीं चलाती।”"
    },
    hinglish: {
      title: "Hum aapki help ke liye yahan hain",
      subtitle: "Aapka mental peace sach mein matter karta hai. Ek aisi safe, no-judgment space mein aapka swagat hai jahan aap freely baat kar sakte hain, heal kar sakte hain aur better feel kar sakte hain.",
      btn: "Website Explore Karein",
      quote: "“Healing ka matlab ye nahi ki dard kabhi tha hi nahi. Iska matlab hai ki ab wo dard aapki life control nahi karta.”"
    }
  };

  const currentText = text[lang] || text.en;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="bg-white rounded-3xl p-8 md:p-10 max-w-lg w-full shadow-2xl relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] -mr-10 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none"></div>
            
            {/* Language Selector */}
            <div className="flex flex-wrap justify-center gap-2 mb-10 relative z-10">
              <button 
                onClick={() => setLang('en')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${lang === 'en' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                English
              </button>
              <button 
                onClick={() => setLang('hi')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${lang === 'hi' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                हिंदी (Hindi)
              </button>
              <button 
                onClick={() => setLang('hinglish')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${lang === 'hinglish' ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Hinglish
              </button>
            </div>

            <div className="text-center relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl mb-6 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">
                {currentText.title}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                {currentText.subtitle}
              </p>
              
              <button 
                onClick={handleEnter}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                {currentText.btn}
              </button>
            </div>

            {/* Quote at the bottom */}
            <div className="mt-10 pt-6 border-t border-slate-100 text-center relative z-10">
              <p className="text-slate-500 italic text-sm font-medium leading-relaxed">
                {currentText.quote}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
