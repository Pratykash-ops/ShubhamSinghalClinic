import { motion } from "framer-motion";
import { CheckCircle, Heart } from "lucide-react";
import Image from 'next/legacy/image';
import Link from 'next/link'
const approachPoints = [
  "Client-centered and empathetic sessions",
  "Evidence-based therapeutic methods",
  "Focus on long-term emotional resilience",
  "Safe, non-judgmental space for self-exploration",
];

export default function MyApproach() {
  return (
    <>
      <section className="w-full py-20 px-12 md:px-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Approach
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Every individual carries a story. My goal is to listen deeply, understand with clarity, and walk alongside you as we navigate the healing journey.
          </motion.p>
          <ul className="space-y-6">
            {approachPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-3 text-gray-800 text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-col md:flex-row">
            <div className="md:w-1/2 w-full relative h-screen">
            <Image style={{filter: `
      brightness(1.05)
      contrast(1.1)
      saturate(1.15)
      sepia(0.05)
      hue-rotate(-5deg)
    `}} src={"/assets/shubham-the-angel.jpg"} layout="fill" objectFit="cover" alt="Shubham Singhal"/>
            </div>
             <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-8 py-12 text-center md:text-left">
        <div className="max-w-md space-y-6">
          <h3 className="text-4xl md:text-5xl  leading-snug">
            your healing <br />
            <b>is our responsibility</b>
          </h3>

          <ul className="space-y-4 text-gray-600 text-sm md:text-base">
            {[
              ['trusted', 'therapist at your service'],
              ['safe', 'space for you'],
              ['affordable', 'pricing plans'],
              ['flexible', 'chat, call, video sessions'],
            ].map(([strong, text], i) => (
              <li key={i} className="flex items-start gap-2">
                <Heart size={18} className="mt-0.5 text-black" />
                <span>
                  <strong className="text-black">{strong}</strong> {text}
                </span>
              </li>
            ))}
          </ul>

          <Link href='#services'><button className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 px-6 py-3 rounded-full font-medium hover:shadow-lg transition">
            Explore Our Services
            <span className="rotate-45">↗</span>
          </button></Link>
        </div>
      </div>
      </section>
    </>
  );
}
