import { motion } from "framer-motion";
import { CheckCircle, Heart } from "lucide-react";
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useLanguage } from "@/contexts/LanguageContext";

export default function MyApproach() {
  const { t } = useLanguage();

  const approachPoints = [
    t("approachPoint1"),
    t("approachPoint2"),
    t("approachPoint3"),
    t("approachPoint4"),
  ];

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
            {t("approachTitle")}
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("approachSubtitle")}
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
          <h3 className="text-4xl md:text-5xl leading-snug font-medium">
            <span dangerouslySetInnerHTML={{ __html: t("approachHeading").replace('our responsibility', '<b>our responsibility</b>') }} />
          </h3>

          <ul className="space-y-4 text-gray-600 text-sm md:text-base">
            {[
              [t("featTrusted"), t("featTrustedDesc")],
              [t("featSafe"), t("featSafeDesc")],
              [t("featAffordable"), t("featAffordableDesc")],
              [t("featFlexible"), t("featFlexibleDesc")],
            ].map(([strong, text], i) => (
              <li key={i} className="flex items-start gap-2">
                <Heart size={18} className="mt-0.5 text-black shrink-0" />
                <span className="text-left">
                  <strong className="text-black">{strong}</strong> {text}
                </span>
              </li>
            ))}
          </ul>

          <Link href='#services'><button className="inline-flex items-center gap-2 bg-white text-black border border-gray-300 px-6 py-3 rounded-full font-medium hover:shadow-lg transition">
            {t("exploreServices")}
            <span className="rotate-45">↗</span>
          </button></Link>
        </div>
      </div>
      </section>
    </>
  );
}
