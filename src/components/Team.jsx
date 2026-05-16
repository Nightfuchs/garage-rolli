import { motion } from 'framer-motion';

const team = [
  {
    name: "Josua Rolli",
    role: "Chef",
    img: "https://garage-rolli.ch/wp-content/uploads/2015/04/Josua.jpg"
  },
  {
    name: "Ueli Rolli",
    role: "Chef und Gründer",
    img: "https://garage-rolli.ch/wp-content/uploads/2015/04/Ueli.jpg"
  },
  {
    name: "Athanasius Beyeler",
    role: "Automobilmechatroniker",
    img: "https://garage-rolli.ch/wp-content/uploads/2023/12/Athanasius_Beyeler.jpg"
  },
  {
    name: "Timo Beck",
    role: "Lehrling",
    img: "https://garage-rolli.ch/wp-content/uploads/2023/12/Timo_Beck.jpg"
  },
  {
    name: "Lukas Hostettler",
    role: "Lehrling",
    img: "https://garage-rolli.ch/wp-content/uploads/2023/12/LL.jpg"
  },
  {
    name: "Monika Rolli",
    role: "Büromanagement",
    img: "https://garage-rolli.ch/wp-content/uploads/2015/04/Monika_4.jpg"
  },
  {
    name: "Garage Rolli Team",
    role: "Spezialist für alle Marken",
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Home_slider_2.jpg"
  },
  {
    name: "Experten-Service",
    role: "Qualität & Präzision",
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Home_slider_3.jpg"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-32 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-xs font-bold tracking-[0.4em] text-white/40 uppercase mb-4 block">Menschen</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">Unser Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-black overflow-hidden flex flex-col items-stretch"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="w-full p-8 flex flex-col justify-center">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2 leading-tight">{member.name}</h3>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{member.role}</p>
                <div className="mt-6 h-px w-8 bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <div id="reviews" className="mt-32 max-w-4xl mx-auto text-center px-4">
           <div className="mb-8 flex justify-center">
             <div className="h-12 w-px bg-white/20"></div>
           </div>
           <blockquote className="text-2xl md:text-4xl font-light text-white/80 leading-tight italic">
              "Ihr Jungs macht einen tollen Job. Ich fahre seit fast fünf Jahren mit meinem VW-Bus zu Garage-Rolli. Ich bekomme immer tollen Service und die besten Preise."
           </blockquote>
           <cite className="mt-12 block not-italic">
              <span className="text-sm font-bold text-white uppercase tracking-[0.3em] block mb-2">Sergej Stöckli</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">CEO Gartenbijoux GmbH</span>
           </cite>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="mt-40 border-t border-white/10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h2 className="text-xs font-bold text-white/40 uppercase tracking-[0.5em]">FAQ</h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Reparieren Sie alle Marken?</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">Ja, wir sind spezialisiert auf die Wartung und Reparatur aller Fahrzeugmarken. Durch modernste Diagnosegeräte können wir herstellerübergreifend arbeiten.</p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Bieten Sie MFK Bereitstellung an?</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed">Absolut. Wir bereiten Ihr Fahrzeug gründlich für die Prüfung vor und übernehmen auf Wunsch auch die Vorführung beim Strassenverkehrsamt.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
