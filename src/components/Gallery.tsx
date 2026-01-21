import { Play, Image as ImageIcon } from "lucide-react";

const Gallery = () => {
  // Gerando a lista de fotos (1 a 16)
  const photos = Array.from({ length: 16 }, (_, i) => ({
    type: "image",
    src: `/foto${(i + 1).toString().padStart(2, '0')}.jpg`, // Gera foto01, foto02...
    alt: `Trabalho de fundação e piso industrial ${(i + 1)}`
  }));

  // Gerando a lista de vídeos (1 a 7)
  const videos = Array.from({ length: 7 }, (_, i) => ({
    type: "video",
    src: `/video${(i + 1).toString().padStart(2, '0')}.mp4`, // Gera video01, video02...
    alt: `Vídeo demonstrativo ${(i + 1)}`
  }));

  // Une as fotos e os vídeos em uma única galeria
  const mediaItems = [...photos, ...videos];

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
              className="group relative aspect-video bg-black rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x400?text=Foto+Não+Encontrada";
                  }}
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseOver={(e) => e.target.play()}
                    onMouseOut={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                  />
                  {/* Ícone de Play sobreposto para indicar que é vídeo */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                    <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>
              )}

              {/* Hover Overlay para as fotos */}
              {item.type === "image" && (
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <ImageIcon className="text-white w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;