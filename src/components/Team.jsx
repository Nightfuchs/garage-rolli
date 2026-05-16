import { motion } from 'framer-motion';

const team = [
  {
    name: "Ulrich Rolli",
    role: "Gründer / Inhaber",
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Home_slider_3.jpg"
  },
  {
    name: "Das Team",
    role: "Spezialisten für alle Marken",
    img: "https://garage-rolli.ch/wp-content/uploads/2018/03/Home_slider_2.jpg"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-black px-4 border-t-8 border-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-right">
          <h2 className="text-5xl md:text-7xl comic-title mb-4">UNSER <span className="text-sin-red">TEAM</span></h2>
          <p className="text-xl noir-text text-white/70">DIE GESICHTER HINTER DER PRÄZISION.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="comic-panel flex flex-col md:flex-row items-center bg-black overflow-hidden"
            >
              <div className="w-full md:w-1/2 h-80 overflow-hidden border-r-4 border-white">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover sin-city-filter"
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-4xl comic-title mb-2 text-sin-red">{member.name}</h3>
                <p className="text-xl noir-text text-white font-bold mb-4">{member.role}</p>
                <div className="h-1 w-20 bg-white"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="reviews" className="mt-24 p-12 border-8 border-white bg-black relative">
           <div className="absolute -top-6 left-10 bg-sin-red text-white px-6 py-2 comic-title text-2xl border-4 border-white">
            REVIEWS
           </div>
           <div className="space-y-8">
             <div className="italic noir-text text-2xl text-white">
                "Ihr Jungs macht einen tollen Job. Ich fahre seit fast fünf Jahren mit meinem VW-Bus zu Garage-Rolli. Ich bekomme immer tollen Service und die besten Preise. Mach weiter so."
                <div className="mt-4 text-sin-red comic-title text-xl">— Sergej Stöckli, CEO Gartenbijoux GmbH</div>
             </div>
           </div>
        </div>

        <div id="faq" className="mt-24">
          <h2 className="text-4xl comic-title mb-8 border-b-4 border-white inline-block">FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border-4 border-white">
              <h4 className="comic-title text-sin-red mb-2">Reparieren Sie alle Marken?</h4>
              <p className="noir-text text-white">Ja, wir sind spezialisiert auf die Wartung und Reparatur aller Fahrzeugmarken.</p>
            </div>
            <div className="p-6 border-4 border-white">
              <h4 className="comic-title text-sin-red mb-2">Bieten Sie MFK Bereitstellung an?</h4>
              <p className="noir-text text-white">Absolut. Wir bereiten Ihr Fahrzeug gründlich für die Prüfung vor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
