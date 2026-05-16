import { motion } from 'framer-motion';
import { Settings, Cpu, Zap, Wind, ShieldCheck, Car, Activity, Disc } from 'lucide-react';

const services = [
  {
    id: "service-unterhalt",
    title: "Service/Unterhalt",
    description: "Regelmäßiger Service und fachgerechter Unterhalt für Ihre Sicherheit.",
    icon: <Settings size={32} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/700x440.jpg"
  },
  {
    id: "diagnose",
    title: "Diagnose/Elektronik",
    description: "Modernste Computer-Diagnose für präzise Fehlersuche bei allen Modellen.",
    icon: <Cpu size={32} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Diagnostic_2_700x440.jpg"
  },
  {
    id: "motoren",
    title: "Motoren Reparatur",
    description: "Professionelle Revisionen und Instandsetzungen für alle Motorentypen.",
    icon: <Zap size={32} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Tuning_700x440.jpg"
  },
  {
    id: "klima",
    title: "Klimaservice",
    description: "Wartung und Desinfektion für ein gesundes Klima in Ihrem Fahrzeug.",
    icon: <Wind size={32} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2015/04/slider5.jpg"
  },
  {
    id: "automaten",
    title: "Automatenservice",
    description: "Spülung und Wartung von Automatikgetrieben nach Herstellervorgaben.",
    icon: <Activity size={32} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Header_1.jpg"
  },
  {
    id: "mfk",
    title: "MFK Bereitstellung",
    description: "Komplette Vorbereitung und Durchführung der Motorfahrzeugkontrolle.",
    icon: <ShieldCheck size={32} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Header_3.jpg"
  },
  {
    id: "lenkgeometrie",
    title: "Lenkgeometrie",
    description: "Elektronische Achsvermessung für optimalen Geradeauslauf.",
    icon: <Disc size={32} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Header_2.jpg"
  },
  {
    id: "occasionen",
    title: "Occasionen",
    description: "Geprüfte Gebrauchtwagen mit Qualitäts-Zertifikat und Garantie.",
    icon: <Car size={32} />,
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Home_slider_1.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-black px-4 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-[0.4em] text-white/40 uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">Unsere Leistungen</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              id={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-black p-8 hover:bg-[#0a0a0a] transition-all duration-500 scroll-mt-24"
            >
              <div className="h-48 mb-8 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="mb-6 text-white/40 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light mb-8 h-12">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-white border-b border-white/20 pb-1 group-hover:border-white transition-all"
              >
                Mehr erfahren
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
