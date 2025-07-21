// components/Hero.jsx
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 px-12 lg:px-24">
      {/* Left Text Section */}
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-700 leading-tight mb-4">
          Dr. Shubham Singhal
        </h1>
        <p className="sm:text-lg text-primary-light mb-6">
          Psychologist | Mental Health Educator
        </p>
        <p className="text-base text-gray-700 mb-6">
          Helping you understand your mind through therapy, analogies, and cognitive clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/contact"
            className="bg- hover:border-opacity-40 text-slate-600 border-slate-700 border px-6 py-3 rounded-lg font-medium transition-all"
          >
            Book a Session
          </Link>
          <Link
            href="/blog"
            className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-all"
          >
            Read the Blog
          </Link>
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
