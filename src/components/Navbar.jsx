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
    <nav className="fixed w-full z-50 bg-black border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-3xl comic-title tracking-tighter text-white">
              GARAGE <span className="text-sin-red">ROLLI</span>
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="text-sm uppercase comic-title hover:text-sin-red transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    {link.subLinks && <ChevronDown size={14} />}
                  </a>

                  {link.subLinks && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-64 bg-black border-4 border-white mt-0 py-2 shadow-[8px_8px_0px_#e11d48]">
                      {link.subLinks.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-xs uppercase comic-title hover:bg-sin-red hover:text-black transition-colors"
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
                className="flex items-center gap-2 bg-sin-red text-white px-4 py-2 text-sm comic-title border-2 border-white hover:bg-white hover:text-black transition-all"
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
        <div className="md:hidden bg-black border-b-4 border-white px-4 pt-2 pb-6 space-y-2 overflow-y-auto max-h-screen">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                className="block text-xl comic-title uppercase py-2 text-sin-red"
                onClick={() => !link.subLinks && setIsOpen(false)}
              >
                {link.name}
              </a>
              {link.subLinks && (
                <div className="pl-4 space-y-1 border-l-2 border-white/20">
                  {link.subLinks.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="block text-sm comic-title uppercase py-1 text-white/70"
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
            className="flex items-center justify-center gap-2 bg-sin-red text-white px-4 py-4 comic-title border-2 border-white mt-4"
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
