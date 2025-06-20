import { Clock, Reply, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "351926404488"; // número em formato internacional, sem "+"
    const message = "Olá! Gostaria de saber mais sobre seus serviços.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Pronto para transformar sua marca? Vamos conversar sobre seu projeto pelo WhatsApp
            </p>
          </div>

          {/* WhatsApp Contact Card */}
          <div className="animate-fade-in max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.288"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Vamos conversar no WhatsApp
                </h3>
                
                <p className="text-gray-600 text-lg mb-8">
                  A forma mais rápida e direta de discutirmos seu projeto. 
                  Respondo em poucos minutos!
                </p>
              </div>

              <Button
                onClick={handleWhatsAppContact}
                size="lg"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg mx-auto"
              >
                <svg className="mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.288"/>
                </svg>
                Fale comigo no WhatsApp
              </Button>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-green-200">
                <div className="flex flex-col items-center text-center">
                  <Clock className="text-green-500 mb-2" size={24} />
                  <span className="text-gray-700 font-medium">Seg - Sex</span>
                  <span className="text-gray-600 text-sm">9h às 18h</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Reply className="text-green-500 mb-2" size={24} />
                  <span className="text-gray-700 font-medium">Resposta</span>
                  <span className="text-gray-600 text-sm">Em poucos minutos</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="text-green-500 mb-2" size={24} />
                  <span className="text-gray-700 font-medium">Conversa</span>
                  <span className="text-gray-600 text-sm">100% confidencial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
