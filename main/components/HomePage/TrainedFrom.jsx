import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";

export default function TrainedFrom() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const [logos, setLogos] = useState([]);

  // Hardcoded word art entries
  const textEntries = [
    { isText: true, text: "Lady Hardinge Govt Hospital" },
    { isText: true, text: "Ram Manohar Lohia Hospital" }
  ];

  useEffect(() => {
    // Fetch dynamic logos from our API
    fetch("/api/logos")
      .then(res => res.json())
      .then(data => {
        if (data.logos) {
          const fetchedLogos = data.logos.map(fileName => ({
            src: `/assets/studies/${fileName}`,
            alt: fileName.split('.')[0]
          }));
          // Combine fetched image logos with our text word art
          setLogos([...fetchedLogos, ...textEntries]);
        }
      })
      .catch(err => console.error("Error fetching logos:", err));
  }, []);

  // Duplicate for seamless loop if we have enough items, or just duplicate 3 times
  const items = logos.length > 0 ? [...logos, ...logos, ...logos, ...logos] : [];

  useEffect(() => {
    const el = ref.current;
    if (!el || items.length === 0) return;

    let offset = 0;
    const step = 0.5; // Speed
    let animationFrameId;

    const animate = () => {
      offset -= step;
      el.style.transform = `translateX(${offset}px)`;
      // Reset when half of the total width is scrolled
      if (Math.abs(offset) > el.scrollWidth / 2) {
        offset = 0;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [items.length]);

  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-gray-500 tracking-widest uppercase mb-10">
          {t("trainedTitle") || "Trained From"}
        </h3>
        
        <div className="overflow-hidden whitespace-nowrap w-full relative">
          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={ref}
            className="flex gap-16 will-change-transform items-center w-max opacity-90 transition-all duration-500"
          >
            {items.map((item, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-300"
              >
                {item.isText ? (
                  <div className="w-48 md:w-64 text-center whitespace-normal text-xl md:text-2xl font-extrabold text-blue-900 tracking-wider flex items-center justify-center px-4 leading-tight">
                    {item.text}
                  </div>
                ) : (
                  <div className="h-16 w-32 md:h-20 md:w-40 relative transition-all duration-300">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
