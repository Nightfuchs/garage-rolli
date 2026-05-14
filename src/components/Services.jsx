import { motion } from 'framer-motion';
import { Settings, Cpu, Zap, Wind, ShieldCheck, Car } from 'lucide-react';

const services = [
  {
    title: "Service/Unterhalt",
    description: "Regelmässiger Service für Ihre Sicherheit und Zuverlässigkeit.",
    icon: <Settings size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/700x440.jpg"
  },
  {
    title: "Diagnose/Elektronik",
    description: "Modernstes Equipment für präzise Fehlersuche bei allen Marken.",
    icon: <Cpu size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Diagnostic_2_700x440.jpg"
  },
  {
    title: "Motoren Reparatur",
    description: "Revisionen und Reparaturen für moderne Motoren und Oldtimer.",
    icon: <Zap size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Tuning_700x440.jpg"
  },
  {
    title: "Klimaservice",
    description: "Wartung und Reparatur für ein optimales Innenraumklima.",
    icon: <Wind size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2015/04/slider5.jpg"
  },
  {
    title: "MFK Bereitstellung",
    description: "Gründliche Vorbereitung für eine sorgenfreie Prüfung.",
    icon: <ShieldCheck size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Header_3.jpg"
  },
  {
    title: "Occasionen",
    description: "Geprüfte Fahrzeuge mit Garantie für Ihren Fahrspass.",
    icon: <Car size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Header_2.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950 px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl racing-italic mb-4">Services</h2>
          <div className="w-24 h-1 bg-white"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.title === "Occasionen" ? "occasionen" : undefined}
              whileHover={{ y: -10 }}
              className="group relative bg-black border border-white/5 overflow-hidden scroll-mt-24"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="mb-2 text-white/70">{service.icon}</div>
                  <h3 className="text-2xl racing-italic">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-zinc-400 mb-6 font-light leading-relaxed">
                  {service.description}
                </p>
                <button className="text-white uppercase tracking-widest text-xs font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Details Anfragen <span className="text-xl">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
