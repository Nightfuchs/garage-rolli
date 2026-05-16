import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background with Comic Filter */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center sin-city-filter opacity-60"
        style={{ backgroundImage: "url('/top_neu.jpg')" }}
      ></div>

      {/* Halftone Overlay */}
      <div className="absolute inset-0 z-1 halftone-overlay"></div>

      <div className="relative z-10 text-left px-4 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/40 p-8 md:p-12 inline-block border-8 border-white shadow-[15px_15px_0px_#e11d48]"
        >
          <h2 className="text-2xl md:text-3xl comic-title mb-4 text-white">RÜEGGISBERG</h2>
          <h1 className="text-5xl md:text-9xl comic-title mb-6 leading-none">
            AUTOREPARATUR<br/>
            <span className="text-sin-red">SEIT 1976</span>
          </h1>
          <p className="text-xl md:text-3xl max-w-2xl mb-10 text-white noir-text font-bold">
            DIE WERKSTATT FÜR ALLE MARKEN IN IHRER NÄHE.<br/>
            PRÄZISION TRIFFT NOIR.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-sin-red text-white px-8 py-5 comic-title text-2xl border-4 border-white hover:bg-white hover:text-black transition-all"
            >
              TERMIN VEREINBAREN
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center px-8 py-5 border-4 border-white text-white comic-title text-2xl hover:bg-sin-red transition-all"
            >
              UNSERE SERVICES
            </a>
          </div>
        </motion.div>
      </div>

      {/* Comic Book Speed Lines Overlay */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.1" />
          <line x1="10" y1="0" x2="110" y2="100" stroke="white" strokeWidth="0.1" />
          <line x1="-10" y1="0" x2="90" y2="100" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
