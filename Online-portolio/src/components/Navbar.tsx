import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'Home', label: 'Home' },
  { id: 'About Me', label: 'About Me' },
  { id: 'Experience', label: 'Experience' },
  { id: 'Skills', label: 'Skills' },
  { id: 'Projects', label: 'Projects' },
  { id: 'Contact', label: 'Contact' },
  { id: 'Resume', label: 'Resume' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  // 1. Scroll Spy: Detecteert sectie tijdens scrollen
  useEffect(() => {
    const handleScroll = () => {
      // Als we handmatig scrollen via een klik, negeren we de spy even om trillen te voorkomen
      if (isManualScrolling) return;

      const sections = navItems
        .filter(item => item.id !== 'Resume')
        .map(item => document.getElementById(item.id));

      const scrollPosition = window.scrollY + 160;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const foundItem = navItems.find(item => item.id === section.id);
            if (foundItem) setActiveSection(foundItem.label);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isManualScrolling]);

  // 2. Smooth Scroll Functie
  const scrollToSection = (e : React.MouseEvent, id:string, label:string) => {
    if (label === 'Resume') return; // Laat standaard link zijn werk doen voor Resume

    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      setIsManualScrolling(true);
      setActiveSection(label);

      const offset = 100; // Ruimte voor de zwevende navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Zet de spy weer aan nadat de animatie klaar is
      setTimeout(() => setIsManualScrolling(false), 800);
    }
  };

  return (
    <div className="fixed top-8 left-0 w-full flex justify-center z-50">
      <div className="relative p-[1px] rounded-full bg-gradient-to-r from-red-600/40 via-orange-400/40 to-red-600/40 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
        <nav className="flex items-center gap-1 bg-white/10 backdrop-blur-lg rounded-full px-2 py-2 border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.label;
            const isResume = item.label === 'Resume';

            return (
              <a
                key={item.id}
                href={isResume ? "./src/assets/cv/CV - Bjorn Jongenelen.pdf" : `#${item.id}`}
                // Opent Resume in nieuw tabblad
                target={isResume ? "_blank" : "_self"}
                rel={isResume ? "noopener noreferrer" : ""}
                onClick={(e) => scrollToSection(e, item.id, item.label)}
                className={`relative px-6 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
                  isActive ? 'text-white' : 'text-gray-800 hover:text-black'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-400 rounded-full -z-10 shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}