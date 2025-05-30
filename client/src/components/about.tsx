export default function About() {
  return (
    <section id="quem-somos" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 animate-slide-up">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8">
                Quem <span className="text-primary">Somos</span>
              </h2>

              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6">
                <p>
                  Sou um designer apaixonado por criar identidades visuais que fazem a diferença.
                  Com mais de 5 anos de experiência no mercado, transformo conceitos em marcas
                  memoráveis e impactantes.
                </p>

                <p>
                  Minha abordagem combina criatividade, estratégia e funcionalidade para desenvolver
                  soluções que não apenas ficam bonitas, mas também comunicam efetivamente os
                  valores da sua empresa.
                </p>

                <p>
                  Cada projeto é único e recebe toda minha dedicação para garantir que sua marca
                  se destaque no mercado com uma identidade visual forte e coerente.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 lg:mt-12">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm lg:text-base text-gray-600">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm lg:text-base text-gray-600">Anos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm lg:text-base text-gray-600">Satisfação</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
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
