import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-jmb.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contato" className="bg-industrial-dark text-white">
      {/* Main Footer */}
      <div className="container-section py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img src={logo} alt="JMB Empreiteira" className="h-20 w-auto mb-6 bg-white rounded-lg p-2" />
            <p className="text-white/70 mb-6 leading-relaxed">
              Especialistas em fundações para máquinas de precisão e piso
              industrial. Qualidade e segurança em cada projeto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Links Rápidos</h4>
            <nav className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#servicos", label: "Serviços" },
                { href: "#processo", label: "Processo" },
                { href: "#galeria", label: "Galeria" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3 text-white/70">
              <li>Bases de Concreto Armado</li>
              <li>Fundações para Máquinas</li>
              <li>Piso Industrial</li>
              <li>Grauteamento Técnico</li>
              <li>Consultoria e Projetos</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/5547997223316"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-whatsapp transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(47) 9722-3316</span>
              </a>
              <a
                href="mailto:jmb.empreiteira@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>jmb.empreiteira@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Joinville - Santa Catarina, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Clock className="w-5 h-5" />
                <span>Seg - Sex: 08h às 18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-section py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>
              © {currentYear} JMB Empreiteira. Todos os direitos reservados.
            </p>
            <p>Especializada em Fundamento de Máquinas de Precisão e Piso Industrial</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
