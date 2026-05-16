import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-[#050505] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold tracking-[0.5em] text-white/30 mb-6 block uppercase">
                Tradition & Innovation
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight uppercase text-white">
                Unsere Geschichte
              </h2>
              <div className="space-y-8 text-white/60 text-lg font-light leading-relaxed">
                <p>
                  Gründung der Garage Rolli 1976 durch Ulrich Rolli. Was als Nebenerwerb zum Landwirtschaftsbetrieb begann, entwickelte sich über Jahrzehnte zu einem Kompetenzzentrum für Automobiltechnik.
                </p>
                <p>
                  Im Jahr 2009 folgte der Bau der neuen, modernen Werkstatt in Rüeggisberg. Heute vereinen wir diese tiefe Verwurzelung und handwerkliche Tradition mit modernster Computer-Diagnose für Fahrzeuge aller Marken.
                </p>

                <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/10">
                  <div>
                    <div className="text-4xl font-black text-white mb-2">45+</div>
                    <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Jahre Erfahrung</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-2">100%</div>
                    <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Markenunabhängig</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square overflow-hidden bg-white/5"
            >
              <img
                src="/bg-ft.png"
                alt="Garage Rolli History"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
            </motion.div>
            {/* Minimalist decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-white/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
