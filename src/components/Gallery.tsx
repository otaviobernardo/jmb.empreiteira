import { Play, Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  // Placeholder items - você pode substituir pelos seus próprios arquivos
  // Você pode substituir os placeholders pelos seus arquivos
  // Exemplo com imagem: { type: "image", src: "/sua-imagem.jpg", alt: "Descrição" }
  // Exemplo com vídeo: { type: "video", src: "/seu-video.mp4" }
  const mediaItems = [
    { type: "image", placeholder: true },
    { type: "image", placeholder: true },
    { type: "image", placeholder: true },
    { type: "video", placeholder: true },
    { type: "image", placeholder: true },
    { type: "image", placeholder: true },
    { type: "image", placeholder: true },
    { type: "video", placeholder: true },
    { type: "image", placeholder: true },
    { type: "image", placeholder: true },
    { type: "image", placeholder: true },
    { type: "video", placeholder: true },
    { type: "image", placeholder: true },
    { type: "image", placeholder: true },
    { type: "image", placeholder: true },
  ];

  return (
    <section id="galeria" className="section-padding bg-secondary/30">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Galeria
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira alguns dos nossos trabalhos realizados em fundações para
            máquinas e pisos industriais.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-video bg-muted rounded-xl overflow-hidden border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/60 group-hover:text-primary/60 transition-colors">
                {item.type === "video" ? (
                  <>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <Play className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-medium">
                      Adicione um vídeo aqui
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <span className="text-sm font-medium">
                      Adicione uma foto aqui
                    </span>
                  </>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          💡 Dica: Substitua os placeholders acima pelas fotos e vídeos dos seus
          serviços
        </p>
      </div>
    </section>
  );
};

export default Gallery;
