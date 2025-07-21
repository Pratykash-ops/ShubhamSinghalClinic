import Image from 'next/image';

const services = [
  {
    title: 'Individual Therapy',
    description: 'Personal one-on-one sessions to help you understand and manage your emotions.',
    image: '/static/individual.jpg',
  },
  {
    title: 'Couples Therapy',
    description: 'Work through relationship challenges with guidance and support.',
    image: '/static/couple.jpg',
  },
  {
    title: 'Teen Therapy',
    description: 'Safe space for adolescents to express and explore their feelings.',
    image: '/static/teen.jpg',
  },
  {
    title: 'Psychiatric Therapy',
    description: 'Professional medical guidance for mental health through diagnosis and treatment.',
    image: '/static/psychiatric.jpg',
  },
];

export default function TherapyServices() {
  return (
    <section className="w-full px-4 md:px-20 py-16 " id='services'>
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Helping you heal, grow, and thrive — one session at a time.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={500}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 z-[999]"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/60 transition duration-300 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
