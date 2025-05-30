import { Palette, Heart } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

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
                <Palette className="mr-3 text-primary" size={24} />
                <span className="text-2xl font-bold">Designer</span>
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
                  onClick={() => handleSocialClick("https://instagram.com/seuinstagram")}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleSocialClick("https://wa.me/5511999999999")}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.288"/>
                  </svg>
                </button>
                <button
                  onClick={() => handleSocialClick("https://behance.net/seuportfolio")}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.498 1.19.906.26 1.576.72 2.022 1.37.448.66.673 1.42.673 2.29 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.25.24-1.91.24H0V4.51h6.938v-.007zM3.495 7.05v2.78h2.77c.548 0 1.05-.15 1.5-.44.45-.29.676-.76.676-1.4 0-.83-.31-1.39-.93-1.68-.62-.29-1.39-.44-2.31-.44H3.495v.18zm0 5.16v3.18h3.23c.719 0 1.31-.18 1.77-.54.46-.36.69-.9.69-1.62 0-.36-.06-.67-.19-.94-.13-.27-.32-.5-.57-.69-.25-.19-.55-.33-.91-.42-.35-.09-.74-.13-1.17-.13H3.495v.18zm14.558-8.96v2.34h5.1v-2.34h-5.1zm2.55 4.05c1.36 0 2.5.4 3.4 1.18.9.78 1.41 1.95 1.52 3.5h-9.04c.1.76.42 1.33.95 1.7.53.37 1.17.56 1.92.56.61 0 1.17-.14 1.67-.42.5-.28.87-.65 1.1-1.1h3.37c-.54 1.54-1.37 2.7-2.5 3.46-1.13.76-2.55 1.14-4.25 1.14-1.07 0-2.06-.2-2.95-.59-.89-.39-1.65-.94-2.28-1.64-.63-.7-1.11-1.51-1.44-2.43-.33-.92-.5-1.9-.5-2.94 0-1.02.17-1.99.5-2.9.33-.91.81-1.7 1.44-2.37.63-.67 1.39-1.2 2.28-1.58.89-.38 1.88-.57 2.95-.57l.09.01zm-4.6 4.2h5.62c-.13-.69-.42-1.22-.87-1.58-.45-.36-1.02-.54-1.71-.54-.75 0-1.36.18-1.84.54-.48.36-.77.89-.87 1.58h.67z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 Designer de Identidade Visual. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm flex items-center">
                Desenvolvido com <Heart className="text-red-500 mx-1" size={16} /> para seu sucesso
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
