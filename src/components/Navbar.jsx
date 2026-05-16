import React, { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Start', href: '#' },
    {
      name: 'Über uns',
      href: '#about',
      subLinks: [
        { name: 'Unser Team', href: '#team' },
        { name: 'Fragen & Antworten', href: '#faq' },
        { name: 'Reviews', href: '#reviews' }
      ]
    },
    {
      name: 'Services',
      href: '#services',
      subLinks: [
        { name: 'All Services', href: '#services' },
        { name: 'Service/Unterhalt', href: '#service-unterhalt' },
        { name: 'Diagnose/Elektronik', href: '#diagnose' },
        { name: 'Klimaservice', href: '#klima' },
        { name: 'Motoren Reparatur', href: '#motoren' },
        { name: 'Automatenservice', href: '#automaten' },
        { name: 'MFK Bereitstellung', href: '#mfk' },
        { name: 'Lenkgeometrie', href: '#lenkgeometrie' }
      ]
    },
    { name: 'Occasionen', href: '#occasionen' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl modern-title tracking-tight text-white">
              GARAGE <span className="font-light">ROLLI</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="nav-link text-xs uppercase font-bold tracking-widest text-white/70 hover:text-white flex items-center gap-1"
                  >
                    {link.name}
                    {link.subLinks && <ChevronDown size={12} />}
                  </a>

                  {link.subLinks && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-64 bg-black border border-white/10 mt-0 py-4 shadow-2xl">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-2 text-[10px] uppercase tracking-widest text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:0318090682"
                className="flex items-center gap-2 border border-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                <Phone size={14} />
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
        <div className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-8 space-y-4">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-white/5 pb-2">
              <a
                href={link.href}
                className="block text-lg font-bold uppercase tracking-wider text-white"
                onClick={() => !link.subLinks && setIsOpen(false)}
              >
                {link.name}
              </a>
              {link.subLinks && (
                <div className="pl-4 mt-2 space-y-2">
                  {link.subLinks.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="block text-xs uppercase tracking-widest text-white/40"
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="tel:0318090682"
            className="flex items-center justify-center gap-2 border border-white text-white px-4 py-4 text-sm font-bold uppercase tracking-widest"
          >
            <Phone size={18} />
            031 809 06 82
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
