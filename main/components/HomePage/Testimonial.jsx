// components/TestimonialsSection.tsx
"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav S.",
    quote:
      "I was constantly overwhelmed. Dr. Singhal didn’t just help me cope — he taught me to *understand* myself. Therapy here was life-changing.",
    title: "Student, 22",
  },
  {
    name: "Nisha R.",
    quote:
      "From stress to burnout, I was exhausted. His clarity and grounded approach helped me get my life back on track.",
    title: "Corporate HR",
  },
  {
    name: "Pratik M.",
    quote:
      "There was no judgment. Just someone who truly *listened*. I didn’t expect to heal this fast.",
    title: "Entrepreneur, 30",
  },
];

export default function TestimonialsSection() {
  return (<>
    <section className="py-24 sm:px-6 md:px-12 lg:px-24" id='testimonials'>
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Words That Matter</h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-lg">
          Real voices from those who found clarity, calm, and connection.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
            <hr className="my-4" />
            <p className="font-semibold text-blue-800">{t.name}</p>
            <p className="text-sm text-gray-500">{t.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <section className="w-full px-4 py-16 relative overflow-hidden">
      <div className="bg-white h-32  w-full bottom-0 absolute"></div>
  {/* Quote */}
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 italic leading-relaxed">
      “Healing happens where stories are heard with empathy and held with care.”
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
