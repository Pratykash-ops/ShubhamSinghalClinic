// components/TestimonialsSection.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import reviewsData from "@/data/reviews.json";
import { useLanguage } from "@/contexts/LanguageContext";

function TestimonialCard({ t, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const isLong = t.review_text.length > maxLength;
  const displayText = isExpanded ? t.review_text : (isLong ? t.review_text.slice(0, maxLength) + "..." : t.review_text);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.2 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-sm shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 rounded-2xl border border-white hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        <div className="flex mb-3">
          {[...Array(t.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 italic mb-2 text-sm leading-relaxed text-left">
          “{displayText}”
        </p>
        {isLong && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 text-xs font-semibold hover:underline mb-4 text-left block"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
        {!isLong && <div className="mb-4"></div>}
      </div>
      <div>
        <hr className="my-4" />
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">
            {t.reviewer_name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-blue-800 text-left">{t.reviewer_name}</p>
            {t.aspects_mentioned && t.aspects_mentioned.length > 0 && (
              <p className="text-xs text-gray-500 mt-0.5 text-left line-clamp-1">{t.aspects_mentioned.join(", ")}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default function TestimonialsSection() {
  const testimonials = reviewsData.reviews;
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (<>
    <section className="py-24 sm:px-6 md:px-12 lg:px-24" id='testimonials'>
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t("testTitle")}</h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-lg">
          {t("testSubtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {visibleTestimonials.map((review, i) => (
          <TestimonialCard key={i} t={review} index={i} />
        ))}
      </div>
      
      {testimonials.length > 6 && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-white border border-blue-200 text-blue-700 font-semibold rounded-full hover:bg-blue-50 hover:shadow-md transition-all duration-300"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
    <section className="w-full px-4 py-16 relative overflow-hidden">
      <div className="bg-white h-32  w-full bottom-0 absolute"></div>
  {/* Quote */}
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 italic leading-relaxed">
      {t("quote")}
    </h2>
    <p className="mt-2 text-sm text-gray-500">— Dr. Shubham Singhal</p>
  </div>

  {/* Masonry Grid */}
  <div
    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-4 px-2 sm:px-6"
  >
    {[
      "/static/session1.jpeg",
      "/static/session2.jpeg",
      "/static/session3.jpeg",
      "/static/session4.jpeg",
      "/static/session5.jpeg",
      "/static/session6.jpeg",
      "/static/session7.jpeg",
      "/static/session8.jpeg",
    ].map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Workshop ${idx + 1}`}
        className="w-full my1 break-inside-avoid"
      />
    ))}
  </div>
</section>

    </>
  );
}
