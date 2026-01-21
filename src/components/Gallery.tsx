import { useState } from "react";
import {
  Play,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const mediaItems = [
    { type: "image", src: "/galeria/foto01.jpg", alt: "Projeto 1" },
    { type: "image", src: "/galeria/foto02.jpg", alt: "Projeto 2" },
    { type: "image", src: "/galeria/foto03.jpg", alt: "Projeto 3" },
    { type: "image", src: "/galeria/foto04.jpg", alt: "Projeto 4" },
    { type: "image", src: "/galeria/foto05.jpg", alt: "Projeto 5" },
    { type: "image", src: "/galeria/foto06.jpg", alt: "Projeto 6" },
    { type: "image", src: "/galeria/foto07.jpg", alt: "Projeto 7" },
    { type: "image", src: "/galeria/foto08.jpg", alt: "Projeto 8" },
    { type: "image", src: "/galeria/foto09.jpg", alt: "Projeto 9" },
    { type: "image", src: "/galeria/foto10.jpg", alt: "Projeto 10" },
    { type: "image", src: "/galeria/foto11.jpg", alt: "Projeto 11" },
    { type: "image", src: "/galeria/foto12.jpg", alt: "Projeto 12" },
    { type: "image", src: "/galeria/foto13.jpg", alt: "Projeto 13" },
    { type: "image", src: "/galeria/foto14.jpg", alt: "Projeto 14" },
    { type: "image", src: "/galeria/foto15.jpg", alt: "Projeto 15" },
    { type: "image", src: "/galeria/foto16.jpg", alt: "Projeto 16" },
    { type: "image", src: "/galeria/foto17.jpg", alt: "Projeto 17" },
    { type: "video", src: "/galeria/video01.mp4" },
    { type: "video", src: "/galeria/video02.mp4" },
    { type: "video", src: "/galeria/video03.mp4" },
    { type: "video", src: "/galeria/video04.mp4" },
    { type: "video", src: "/galeria/video05.mp4" },
    { type: "video", src: "/galeria/video06.mp4" },
    { type: "video", src: "/galeria/video07.mp4" }
  ];

  const openMedia = (index) => setCurrentIndex(index);
  const closeMedia = () => setCurrentIndex(null);

  const prevMedia = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );

  const nextMedia = () =>
    setCurrentIndex((prev) =>
      prev === mediaItems.length - 1 ? 0 : prev + 1
    );

  const selectedMedia =
    currentIndex !== null ? mediaItems[currentIndex] : null;

  return (
    <section id="galeria" className="section-padding bg-secondary/30">
      <div className="container-section">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Galeria
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6">
            Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira alguns dos nossos trabalhos realizados.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openMedia(index)}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-muted"
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                {item.type === "video" ? (
                  <Play className="w-14 h-14 text-white" />
                ) : (
                  <ImageIcon className="w-14 h-14 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeMedia}
        >
          {/* Fechar */}
          <button
            className="absolute top-6 right-6 text-white hover:text-primary z-50"
            onClick={closeMedia}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Indicador */}
        <div
          className="absolute top-6 left-6 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-lg">
          {currentIndex + 1} / {mediaItems.length}
        </div>

          {/* Anterior */}
          <button
            className="absolute left-4 md:left-10 text-white hover:text-primary z-50"
            onClick={(e) => {
              e.stopPropagation();
              prevMedia();
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Próximo */}
          <button
            className="absolute right-4 md:right-10 text-white hover:text-primary z-50"
            onClick={(e) => {
              e.stopPropagation();
              nextMedia();
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Conteúdo */}
          <div
            className="max-w-6xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full max-h-[90vh] object-contain rounded-xl"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full max-h-[90vh] rounded-xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;