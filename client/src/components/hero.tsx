import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '../img/aura.png';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const phone = "351926404488";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre seus serviços de design.");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center mt-6 bg-gradient-to-br from-gray-50 to-white pt-16 lg:pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo Central */}
          <div className="mb-8 lg:mb-12">
            <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto bg-fuchsia-200 rounded-full flex items-center justify-center shadow-2xl animate-float">
              <img src={logo} alt="Logo" className="w-24 h-24 lg:w-32 lg:h-32 object-contain" />
            </div>
          </div>

          {/* Impact Phrase */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
            Transformamos <span className="text-violet-800">ideias</span> em{" "}
            <br className="hidden sm:block" />
            <span className="text-violet-800">identidades</span> visuais
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            Designer especialista em criar marcas únicas que conectam, comunicam e convertem
          </p>

          {/* CTA Button */}
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="inline-flex items-center px-8 py-4 from-violet-800 text-white font-semibold rounded-full hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            <svg className="mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.288"/>
            </svg>
            Fale comigo
          </Button>
        </div>
      </div>
    </section>
  );
}
