import Image from 'next/image';
import { useLanguage } from "@/contexts/LanguageContext";

export default function TherapyServices() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("srvInd"),
      description: t("srvIndDesc"),
      image: '/static/individual.jpg',
    },
    {
      title: t("srvCouple"),
      description: t("srvCoupleDesc"),
      image: '/static/couple.jpg',
    },
    {
      title: t("srvTeen"),
      description: t("srvTeenDesc"),
      image: '/static/teen.jpg',
    },
    {
      title: t("srvPsych"),
      description: t("srvPsychDesc"),
      image: '/static/psychiatric.jpg',
    },
  ];

  return (
    <section className="w-full px-4 md:px-20 py-16 " id='services'>
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        {t("servicesTitle")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer border border-gray-100">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={500}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
            {/* Base gradient at the bottom for readability when not hovered */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold tracking-wide">{service.title}</h3>
            </div>

            {/* Glassmorphism Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6 border border-white/20">
              <h3 className="text-white text-2xl font-bold mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{service.title}</h3>
              <div className="w-12 h-1 bg-green-400 mb-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
              <p className="text-white/90 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
