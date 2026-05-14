import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Start', href: '#' },
    { name: 'Über uns', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Occasionen', href: '#occasionen' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl racing-italic tracking-tighter">
              Garage <span className="text-white/60">Rolli</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm uppercase tracking-widest hover:text-white/60 transition-colors speed-line"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0318090682"
                className="flex items-center gap-2 bg-white text-black px-4 py-2 text-sm racing-italic hover:bg-white/80 transition-colors"
              >
                <Phone size={16} />
                031 809 06 82
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg uppercase tracking-widest py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0318090682"
            className="flex items-center justify-center gap-2 bg-white text-black px-4 py-4 racing-italic"
          >
            <Phone size={20} />
            031 809 06 82
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
