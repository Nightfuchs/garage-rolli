import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Contact />
      </main>

      <footer className="py-12 border-t-8 border-white text-center bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="comic-title text-4xl text-white mb-4">GARAGE <span className="text-sin-red">ROLLI</span></div>
          <p className="noir-text text-white/50 text-sm">© 2025 GARAGE ROLLI RÜEGGISBERG. SIN CITY EDITION.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
