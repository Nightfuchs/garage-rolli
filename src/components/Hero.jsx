import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background with Modern Grayscale transition */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center image-grayscale opacity-40 scale-105"
        style={{ backgroundImage: "url('/top_neu.jpg')" }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.5em] text-white/50 mb-6 block uppercase">
            Rüeggisberg • Bern
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter text-white uppercase">
            SPEED. PRECISION. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">PASSION.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-white/60 leading-relaxed font-light">
            Die Werkstatt für alle Marken in Ihrer Nähe. <br className="hidden md:block" />
            Höchste Qualität, modernste Diagnose und jahrzehntelange Erfahrung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-white text-black px-10 py-5 text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all"
            >
              Termin vereinbaren
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center px-10 py-5 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all"
            >
              Services entdecken
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
    </div>
  );
};

export default Hero;
