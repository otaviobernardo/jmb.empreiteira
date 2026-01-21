import { CheckCircle2 } from "lucide-react";
import logo from "@/assets/logo-transparente-jmb.png";

const features = [
  "Equipe técnica especializada em fundações industriais",
  "Projetos personalizados conforme normas ABNT",
  "Materiais de alta qualidade e certificados",
  "Controle rigoroso de vibrações e nivelamento",
  "Garantia de satisfação em todos os projetos",
  "Suporte técnico pós-obra",
];

const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-section">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image / Logo Side */}
          <div className="relative flex justify-center">
            <div className="relative bg-secondary/50 rounded-2xl p-10 sm:p-12 flex items-center justify-center overflow-hidden w-full max-w-md">

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-xl" />

              {/* Logo */}
              <img
                src={logo}
                alt="JMB Empreiteira"
                className="relative z-10 w-full max-w-xs sm:max-w-sm"
              />

              {/* Experience Badge */}
              <div
                className="
                  absolute 
                  bottom-3 left-1/2 -translate-x-1/2
                  md:bottom-6 md:right-6 md:left-auto md:translate-x-0
                  bg-primary text-primary-foreground
                  rounded-xl px-5 py-3 md:px-6 md:py-4
                  shadow-industrial z-20
                "
              >
                <div className="text-center">
                  <div className="font-heading text-2xl md:text-3xl font-bold">
                    +35
                  </div>
                  <div className="text-[10px] md:text-xs opacity-90 uppercase tracking-wide">
                    Anos de Experiência
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
                Sobre Nós
              </span>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Excelência em{" "}
                <span className="text-primary">Engenharia Industrial</span>
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                A JMB Empreiteira é especializada na construção de bases para
                máquinas de precisão e pisos industriais. Com mais de três
                décadas de experiência no mercado, oferecemos soluções completas
                de engenharia para garantir a estabilidade, segurança e
                durabilidade das suas instalações industriais.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
