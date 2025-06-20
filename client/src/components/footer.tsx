import { Palette, Heart } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

import logo from '../img/aura.png';

export default function Footer() {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <img src={logo} alt="Logo" className="w-10 h-10 lg:w-8 lg:h-8 object-contain" />
                <span className="text-2xl font-bold">ura Designer</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformando ideias em identidades visuais únicas e memoráveis.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavClick("inicio")}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("quem-somos")}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    Quem Somos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("pacotes")}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    Pacotes
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick("contato")}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
              <button
  onClick={() => handleSocialClick("https://wa.me/351926404488")}
  aria-label="WhatsApp"
  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
>
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.288"/>
  </svg>
</button>

                
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
    
    <p className="text-gray-400 text-sm sm:text-xs mb-2 md:mb-0">
      © 2025 Aura Designer - Todos os direitos reservados.
    </p>
    
    <p className="text-gray-400 text-sm sm:text-xs flex items-center">
      Feito por Priscila Ramonna
      <Heart className="text-red-500 mx-1" size={16} /> 
    
    </p>
    
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}
