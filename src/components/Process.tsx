import { ClipboardList, PenTool, HardHat, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Análise e Levantamento",
    description:
      "Avaliação técnica do local, análise de cargas da máquina, estudo de vibrações e levantamento das condições do solo para projeto adequado.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Projeto de Engenharia",
    description:
      "Elaboração do projeto estrutural com cálculos de dimensionamento, especificação de materiais, chumbadores e sistemas de isolamento necessários.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Execução da Obra",
    description:
      "Construção da base com armação de aço, concretagem de alta qualidade, nivelamento de precisão e grauteamento para fixação perfeita.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Entrega e Testes",
    description:
      "Verificação de estabilidade, testes de capacidade de carga, análise de vibrações e entrega com documentação técnica completa.",
  },
];

const Process = () => {
  return (
    <section id="processo" className="section-padding bg-background">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Nosso Processo
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Como <span className="text-primary">Trabalhamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo estruturado que garante qualidade, segurança e
            cumprimento de prazos em cada projeto.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative group">
                {/* Step Number - Background */}
                <div className="absolute -top-4 -left-2 text-7xl font-heading font-bold text-primary/10 group-hover:text-primary/20 transition-colors select-none pointer-events-none">
                  {item.step}
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 text-primary/50">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
