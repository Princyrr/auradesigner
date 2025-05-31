import { Star, Crown, Gem, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createWhatsAppUrl } from "@/lib/utils";

const packages = [
  {
    id: "basico",
    name: "Básico",
    price: "€50",
    icon: Star,
    popular: false,
    features: [
      "Logo principal",
      "Logo secundária",
      "Paleta de cores",
      "Arquivos em alta resolução",
    ],
    whatsappMessage: "Olá! Tenho interesse no pacote Básico de €50.",
  },
  {
    id: "intermediario",
    name: "Intermediário",
    price: "€70",
    icon: Crown,
    popular: true,
    features: [
      "Logo principal",
      "Logo Secundária",
      "Sublogo",
      "Ícone",
      "Paleta de cores",
      "Tipografia personalizada",
    ],
    whatsappMessage: "Olá! Tenho interesse no pacote Intermediário de €70.",
  },
  {
    id: "premium",
    name: "Premium",
    price: "€100",
    icon: Gem,
    popular: false,
    features: [
      "Logo principal",
      "Logo Secundária",
      "Sublogo",
      "Ícone",
      "Paleta de cores",
      "Tipografia personalizada",
      "Arte para cartão de visita",
      "Cartão Agradecimento",
      "Catálogo PDF",
    ],
    whatsappMessage: "Olá! Tenho interesse no pacote Premium de €100.",
  },
  {
    id: "toppremium",
    name: "TOP Premium",
    price: "€150",
    icon: Gem,
    popular: false,
    features: [
      "Logo principal",
      "Logo Secundária",
      "Sublogo",
      "Ícone",
      "Paleta de cores",
      "Tipografia personalizada",
      "Arte para cartão de visita",
      "Cartão Agradecimento",
      "Catálogo PDF",
      "Portfólio web",
      "3 posts para Storys",
      "3 publicações para Feed",
    ],
    whatsappMessage: "Olá! Tenho interesse no pacote TOP Premium de €150.",
  },
];

export default function Services() {
  const handlePackageClick = (message: string) => {
    window.open(createWhatsAppUrl(message), "_blank");
  };

  return (
    <section id="pacotes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Pacotes de <span className="text-violet-800">Serviços</span>
          </h2>
          <p className="text-md text-gray-600 mt-2">
            Escolha o pacote ideal para transformar sua marca.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon;
            return (
              <Card
                key={pkg.id}
                className={`relative hover:-translate-y-1 transition-all duration-300 hover:shadow-lg ${
                  pkg.popular ? "border-2 border-violet-800" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-0 left-0 right-0">
                    <div className="bg-violet-800 text-white text-center py-1 text-xs font-semibold rounded-t-md">
                      Mais Popular
                    </div>
                  </div>
                )}

                <CardContent
                  className={`text-center ${
                    pkg.popular ? "pt-10 pb-6 px-4" : "p-4"
                  }`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary" size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {pkg.price}
                    </span>
                  </div>

                  <ul className="text-left space-y-2 mb-5">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="text-primary mr-2" size={16} />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handlePackageClick(pkg.whatsappMessage)}
                    className="w-full bg-gradient-to-r from-violet-800 via-pink-500 to-yellow-500 text-white font-semibold py-2 rounded-full hover:opacity-90 transition"
                  >
                    Fale comigo
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
