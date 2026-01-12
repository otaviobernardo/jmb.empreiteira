import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-dark/90 via-industrial-dark/80 to-industrial-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-section text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-medium">
            <span className="w-2 h-2 bg-whatsapp rounded-full animate-pulse" />
            Especialistas em Fundações Industriais
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Construção de Bases para{" "}
            <span className="text-primary-foreground/90 bg-primary/20 px-2 py-1 rounded">
              Máquinas e Equipamentos
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Engenharia de precisão para fundações industriais. Garantimos
            estabilidade, absorção de vibrações e máxima segurança para seus
            equipamentos de alta performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/SEU_NUMERO_AQUI", "_blank")}
              className="group"
            >
              <Phone className="w-5 h-5" />
              Solicite um Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outlineLight"
              size="xl"
              onClick={() => {
                const element = document.querySelector("#servicos");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "+15", label: "Anos de Experiência" },
              { number: "+200", label: "Projetos Executados" },
              { number: "100%", label: "Clientes Satisfeitos" },
              { number: "24h", label: "Suporte Técnico" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
