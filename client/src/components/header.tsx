import { useState, useEffect } from "react";
import { Menu, X, Palette } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import logo from '../img/aura.png';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "quem-somos", "pacotes", "contato"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "quem-somos", label: "Quem Somos" },
    { id: "pacotes", label: "Pacotes" },
    { id: "contato", label: "Contato" },
  ];

    return (
      <header className="fixed top-0 w-full bg-fuchsia-200/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-0">
                <img
  src={logo}
  alt="Logo"
  className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
/>

            <button
    onClick={() => handleNavClick("inicio")}
    className="flex items-center text-2xl font-bold text-transparent bg-clip-text text-violet-800 hover:opacity-80 transition duration-300"
  >
  
  ura Designer
</button>
          </div>

          {/* Desktop Navigation */}
        <div className="hidden md:block">
  <div className="ml-10 flex items-baseline space-x-8">
    {navItems.map(item => (
      <button
        key={item.id}
        onClick={() => handleNavClick(item.id)}
        className={`relative font-medium transition-all duration-300
          ${
            activeSection === item.id
              ? "text-violet-800 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-violet-800 after:via-pink-500 after:to-yellow-500"
              : "text-gray-700 hover:text-violet-800 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-0.5 after:bg-gradient-to-r after:from-violet-800 after:via-pink-500 after:to-yellow-500 after:transition-all after:duration-300"
          }`}
      >
        {item.label}
      </button>
    ))}
  </div>
</div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
