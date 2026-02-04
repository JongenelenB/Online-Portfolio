import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
{ id: 'Home', label: 'Home' },
  { id: 'About Me', label: 'About Me' },
  { id: 'Experience', label: 'Experience' },
  { id: 'Skills', label: 'Skills' },
  { id: 'Projects', label: 'Projects' },
  {id: 'Contact', label:'Contact'},
  { id: 'Resume', label: 'Resume' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('Home');

  // 1. Scroll Spy: Detecteert welke sectie in beeld is en update de navbar
  useEffect(() => {
    const handleScroll = () => {
      // We kijken naar de secties die overeenkomen met onze navItems (behalve Resume)
      const sections = navItems
        .filter(item => item.id !== 'Resume')
        .map(item => document.getElementById(item.id));

      const scrollPosition = window.scrollY + 150; // Offset zodat hij eerder verspringt

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navItems.find(item => item.id === section.id)!.label);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-8 left-0 w-full flex justify-center z-50">
        
        <nav className="flex items-center gap-1 bg-white/10 backdrop-blur-lg rounded-full px-2 py-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.label;

            return (
              <a
                key={item.id}
                href={item.label === 'Resume' ? "./src/assets/cv/CV - Bjorn Jongenelen.pdf" : `#${item.id}`}
                onClick={() => item.label !== 'Resume' && setActiveSection(item.label)}
                className={`relative px-6 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
                  isActive ? 'text-white' : 'text-gray-800 hover:text-black'
                }`}
              >
                {/* De "Pill" achtergrond die meeschuift */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-400 rounded-full -z-10"
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
  );
}