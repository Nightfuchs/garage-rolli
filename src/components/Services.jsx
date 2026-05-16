import { motion } from 'framer-motion';
import { Settings, Cpu, Zap, Wind, ShieldCheck, Car, Activity, Disc } from 'lucide-react';

const services = [
  {
    id: "service-unterhalt",
    title: "Service/Unterhalt",
    description: "Der regelmäßige Service und Unterhalt Ihres Fahrzeuges ist wichtig für Ihre Sicherheit.",
    icon: <Settings size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/700x440.jpg"
  },
  {
    id: "diagnose",
    title: "Diagnose/Elektronik",
    description: "Modernstes Diagnose Equipment für präzise Fehlersuche bei allen Marken.",
    icon: <Cpu size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Diagnostic_2_700x440.jpg"
  },
  {
    id: "motoren",
    title: "Motoren Reparatur",
    description: "Revisionen und Reparaturen für moderne Motoren und Oldtimer.",
    icon: <Zap size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Tuning_700x440.jpg"
  },
  {
    id: "klima",
    title: "Klimaservice",
    description: "Wartung und Reparatur für ein optimales Innenraumklima.",
    icon: <Wind size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2015/04/slider5.jpg"
  },
  {
    id: "automaten",
    title: "Automatenservice",
    description: "Professionelle Wartung und Spülung von Automatikgetrieben.",
    icon: <Activity size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Header_1.jpg"
  },
  {
    id: "mfk",
    title: "MFK Bereitstellung",
    description: "Gründliche Vorbereitung für eine sorgenfreie Prüfung beim Strassenverkehrsamt.",
    icon: <ShieldCheck size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Header_3.jpg"
  },
  {
    id: "lenkgeometrie",
    title: "Lenkgeometrie",
    description: "Präzise Einstellung des Fahrwerks für weniger Verschleiss und mehr Sicherheit.",
    icon: <Disc size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Header_2.jpg"
  },
  {
    id: "occasionen",
    title: "Occasionen",
    description: "Geprüfte Fahrzeuge mit Garantie für Ihren Fahrspass.",
    icon: <Car size={40} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Home_slider_1.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-l-8 border-sin-red pl-8">
          <h2 className="text-5xl md:text-7xl comic-title mb-4">SERVICES</h2>
          <p className="text-xl noir-text text-white/70">ALLES AUS EINER HAND. PRÄZISE. SCHNELL. NOIR.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group comic-panel bg-black overflow-hidden scroll-mt-24"
            >
              <div className="h-48 overflow-hidden relative border-b-4 border-white">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover sin-city-filter group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-sin-red/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <div className="mb-4 text-sin-red">{service.icon}</div>
                <h3 className="text-2xl comic-title mb-3 group-hover:text-sin-red transition-colors">{service.title}</h3>
                <p className="text-white noir-text text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="comic-title text-xs border-2 border-white px-4 py-2 hover:bg-sin-red hover:text-white transition-all uppercase">
                  Anfragen
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
