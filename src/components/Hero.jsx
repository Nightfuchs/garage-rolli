import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-40 scale-105"
        style={{ backgroundImage: "url('/grafik.png')" }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl uppercase tracking-[0.3em] mb-4 text-white/70">Rüeggisberg</h2>
          <h1 className="text-6xl md:text-9xl racing-italic mb-6 leading-none">
            Speed.<br/>
            Precision.<br/>
            Passion.
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/80 font-light tracking-wide">
            Die Werkstatt für alle Marken in Ihrer Nähe. Autoreparaturen mit höchster Präzision seit 1976.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 racing-italic text-lg hover:bg-white/90 transition-all"
            >
              Termin vereinbaren
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center px-8 py-4 border border-white/30 text-white racing-italic text-lg hover:bg-white/10 transition-all"
            >
              Unsere Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Speed Lines */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </div>
  );
};

export default Hero;
