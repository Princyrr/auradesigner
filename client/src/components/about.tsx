import fundo from '../img/fundo.png';
import logo from '../img/aura.png';

export default function About() {
  return (
    <section id="quem-somos" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 animate-slide-up">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
                Quem <span className="text-violet-800">Somos</span>
              </h2>

              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  Somos apaixonadas por criar identidades visuais que fazem a diferença.
                Transformo conceitos em marcas
                  memoráveis e impactantes.
                </p>

                <p>
                  Nossa abordagem combina criatividade, estratégia e funcionalidade para desenvolver
                  soluções que não apenas ficam bonitas, mas também comunicam efetivamente os
                  valores da sua empresa.
                </p>

                <p>
                  Cada projeto é único e recebe toda nossa dedicação para garantir que sua marca
                  se destaque no mercado com uma identidade visual forte e coerente, e do jeito que você quer.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 lg:mt-12">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-violet-800 mb-2">50+</div>
                  <div className="text-sm lg:text-base text-gray-600">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-violet-800 mb-2">5+</div>
                  <div className="text-sm lg:text-base text-gray-600">Anos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-violet-800 mb-2">100%</div>
                  <div className="text-sm lg:text-base text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
          <div className="relative order-1 lg:order-2 animate-fade-in">
  {/* Imagem de fundo */}
  <img
    src={fundo}
    alt="Designer profissional trabalhando em projetos criativos"
    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
  />


 


    
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
