import { Wrench, Building2, ShieldCheck, Ruler, Cog, HardHat } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Bases de Concreto Armado",
    description:
      "Construção de fundações em concreto armado de alta resistência, projetadas para suportar cargas estáticas e dinâmicas de equipamentos industriais pesados.",
  },
  {
    icon: Cog,
    title: "Fundações para Máquinas de Precisão",
    description:
      "Bases especializadas com controle de vibrações para máquinas CNC, prensas de alta precisão e equipamentos que exigem estabilidade absoluta.",
  },
  {
    icon: ShieldCheck,
    title: "Isolamento de Vibrações",
    description:
      "Sistemas de isolamento que protegem suas máquinas e estruturas adjacentes, garantindo operação segura e prolongando a vida útil dos equipamentos.",
  },
  {
    icon: Ruler,
    title: "Piso Industrial",
    description:
      "Execução de pisos industriais de alta resistência, com nivelamento de precisão para movimentação de cargas e tráfego de empilhadeiras.",
  },
  {
    icon: Wrench,
    title: "Grauteamento Técnico",
    description:
      "Aplicação de graute de alta resistência para fixação e nivelamento de bases, garantindo transferência de carga uniforme e durabilidade.",
  },
  {
    icon: HardHat,
    title: "Consultoria e Projetos",
    description:
      "Análise estrutural, cálculo de cargas e vibrações, elaboração de projetos personalizados seguindo normas técnicas e de segurança.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Soluções Completas em{" "}
            <span className="text-primary">Fundações Industriais</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos serviços especializados de engenharia para garantir a
            estabilidade e performance dos seus equipamentos industriais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
