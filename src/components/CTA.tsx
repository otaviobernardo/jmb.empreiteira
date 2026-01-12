import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 container-section text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Pronto para Iniciar seu Projeto?
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento sem compromisso.
            Nossa equipe está pronta para atender suas necessidades em fundações
            industriais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="whatsapp"
              size="xl"
              onClick={() => window.open("https://wa.me/SEU_NUMERO_AQUI", "_blank")}
              className="group bg-white text-primary hover:bg-white/90"
            >
              <Phone className="w-5 h-5" />
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
