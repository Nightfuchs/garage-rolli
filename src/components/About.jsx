import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black overflow-hidden scroll-mt-20 border-t-8 border-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative p-8 border-8 border-white shadow-[-15px_15px_0px_#e11d48]"
            >
              <div className="absolute -top-10 -right-10 text-[8rem] comic-title text-white/5 leading-none select-none">
                1976
              </div>
              <h2 className="text-4xl md:text-6xl comic-title mb-8 relative z-10">
                UNSERE <span className="text-sin-red">STORY</span>
              </h2>
              <div className="space-y-6 noir-text text-xl font-bold leading-relaxed">
                <p>
                  GRÜNDUNG DER GARAGE ROLLI 1976 DURCH ULRICH ROLLI. DAMALS NOCH ALS NEBENERWERB ZUM LANDWIRTSCHAFTSBETRIEB.
                </p>
                <p>
                  IM JAHR 2009 DANN DER BAU DER NEUEN UND GRÖSSEREN GARAGE IN RÜEGGISBERG. HEUTE VEREINEN WIR TRADITION MIT MODERNSTER DIAGNOSE.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="border-4 border-white p-4 text-center">
                    <div className="text-4xl comic-title text-sin-red">45+ JAHRE</div>
                    <div className="text-sm comic-title">ERFAHRUNG</div>
                  </div>
                  <div className="border-4 border-white p-4 text-center">
                    <div className="text-4xl comic-title text-sin-red">100%</div>
                    <div className="text-sm comic-title">MARKENFREI</div>
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
              className="comic-panel overflow-hidden"
            >
              <img
                src="/bg-ft.png"
                alt="Garage Rolli History"
                className="w-full h-[500px] object-cover sin-city-filter hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 halftone-overlay"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
