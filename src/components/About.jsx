import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 text-[10rem] font-bold text-white/5 racing-italic leading-none select-none">
                1976
              </div>
              <h2 className="text-4xl md:text-6xl racing-italic mb-8 relative z-10">
                Tradition trifft <br/><span className="text-white/50">Innovation</span>
              </h2>
              <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                <p>
                  Gegründet 1976 durch Ulrich Rolli, begann unsere Geschichte als Leidenschaftsprojekt.
                  Was als kleiner Betrieb im Nebenerwerb startete, entwickelte sich über Jahrzehnte zu einer der
                  modernsten Werkstätten der Region Bern.
                </p>
                <p>
                  2009 bezogen wir unseren Neubau in Rüeggisberg, um den steigenden Anforderungen moderner
                  Fahrzeugtechnik gerecht zu werden. Heute vereinen wir mechanisches Handwerk der alten Schule
                  mit High-Tech Diagnosesystemen.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div>
                    <div className="text-3xl racing-italic text-white">45+ Jahre</div>
                    <div className="text-sm uppercase tracking-widest">Erfahrung</div>
                  </div>
                  <div>
                    <div className="text-3xl racing-italic text-white">100%</div>
                    <div className="text-sm uppercase tracking-widest">Markenunabhängig</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="https://garage-rolli.ch/wp-content/uploads/2018/03/Home_slider_1.jpg"
                alt="Garage Rolli History"
                className="w-full h-[500px] object-cover grayscale border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 border-b-2 border-r-2 border-white/20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
