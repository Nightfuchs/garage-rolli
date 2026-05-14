import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 text-center text-zinc-500 text-sm uppercase tracking-widest bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="racing-italic text-2xl text-white mb-4">Garage Rolli</div>
          <p>© 2025 Garage Rolli Rüeggisberg. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
