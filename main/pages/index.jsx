import Image from "next/image";
import Hero from "@/components/Hero";
import { motion } from 'framer-motion'
import MyApproach from "@/components/HomePage/MyApproch";
import ServicesSection from "@/components/HomePage/ServicesSection";
import TestimonialsSection from "@/components/HomePage/Testimonial";
import HowCanIhelp from "@/components/HomePage/HowCanIhelp";
export default function Home() {
  return (
    <div>
      <Hero />
      <section className="w-full bg-white  py-16 px-12 lg:px-28" id="about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-900 e">
              Meet Dr. Shubham Singhal
            </h2>
            <p className="text-zinc-700  text-lg leading-relaxed mb-4">
              Dr. Shubham Singhal is a licensed psychologist with a vision — to bridge the gap between scientific
              understanding and everyday emotional challenges. With a unique blend of evidence-based methods and
              heartfelt connection, he's guided hundreds toward clarity, healing, and growth.
            </p>
            <p className="text-zinc-700 text-md">
              Whether you're navigating anxiety, burnout, grief, or just seeking meaning — Dr. Singhal's approach is
              both grounded and human. No jargon, no fluff. Just truth, trust, and transformation.
            </p>
          </motion.div>

          <motion.div
            className="relative w-full h-72 md:h-96"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/dss-group-mtp-image0.jpeg"
              alt="Dr. Shubham Singhal"
              className="rounded-2xl shadow-xl object-cover"
              fill
              priority
            />
          </motion.div>
        </div>
      </section>
      <MyApproach />
      <HowCanIhelp/>
      <ServicesSection/>
      <TestimonialsSection/>
    </div>
  );
}
