import { Key, Zap } from "lucide-react";
import logoImg from "/images/NR Power Solution.png";

const navItems = [
  { id: "Home", label: "Home" },
  { id: "Over ons", label: "Over ons" },
  { id: "Diensten", label: "Diensten" },
  { id: "Referenties", label: "Referenties" },
  { id: "Contact", label: "Contact" },
  { id: "Vraag een offerte", label: "Vraag een offerte" },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Linkerkant: Logo */}
      <div className="flex-shrink-0 ml-5">
        <img
          src={logoImg}
          alt="NR Power Solutions"
          className="h-20 w-auto object-contain"
        />
      </div>

      {/* Rechterkant: Navigatie */}
      <nav className="flex items-center gap-10 mr-8">
        {navItems.map((navItem) => (
          <a
            key={navItem.id}
            href={`#${navItem.id}`} // Vergeet de href niet voor navigatie!
            className="px-4 py-2 text-gray-300 transition-all duration-300 font-medium rounded-lg hover:bg-[#FFD300] hover:text-black"
          >
            {navItem.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
