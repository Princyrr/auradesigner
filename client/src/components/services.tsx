import { Star, Crown, Gem, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createWhatsAppUrl } from "@/lib/utils";

const packages = [
  {
    id: "basico",
    name: "Básico",
    price: "R$200",
    icon: Star,
    popular: false,
    features: [
      "Logo principal",
      "Paleta de cores",
      "Arquivos em alta resolução",
    ],
    whatsappMessage: "Olá! Tenho interesse no pacote Básico de R$200.",
  },
  {
    id: "intermediario",
    name: "Intermediário",
    price: "R$350",
    icon: Crown,
    popular: true,
    features: [
      "Logo principal",
      "Paleta de cores",
      "Tipografia personalizada",
      "Mockup profissional",
    ],
    whatsappMessage: "Olá! Tenho interesse no pacote Intermediário de R$350.",
  },
  {
    id: "premium",
    name: "Premium",
    price: "R$500",
    icon: Gem,
    popular: false,
    features: [
      "Logo principal",
      "Paleta de cores",
      "Tipografia personalizada",
      "Manual da marca",
      "Templates para redes sociais",
    ],
    whatsappMessage: "Olá! Tenho interesse no pacote Premium de R$500.",
  },
];

export default function Services() {
  const handlePackageClick = (message: string) => {
    window.open(createWhatsAppUrl(message), "_blank");
  };

  return (
    <section id="pacotes" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
              Pacotes de <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o pacote ideal para transformar sua marca em uma identidade visual única e profissional
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon;
              return (
                <Card
                  key={pkg.id}
                  className={`relative transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl animate-slide-up ${
                    pkg.popular ? "border-2 border-primary" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-0 left-0 right-0">
                      <div className="bg-primary text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                        Mais Popular
                      </div>
                    </div>
                  )}

                  <CardContent className={`text-center ${pkg.popular ? "pt-12 pb-8 px-8" : "p-8"}`}>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="text-2xl text-primary" size={32} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>

                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    </div>

                    <ul className="text-left space-y-3 mb-8">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="text-primary mr-3" size={20} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={() => handlePackageClick(pkg.whatsappMessage)}
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300"
                    >
                      <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.288"/>
                      </svg>
                      Fale comigo
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
