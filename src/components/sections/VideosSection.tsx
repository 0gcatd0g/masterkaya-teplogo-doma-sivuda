import { useState } from "react";
import { Play, X } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Строительно-монтажные работы",
    description: "От работ нулевого цикла до отделочных",
    src: "/videos/video-1.mp4",
  },
  {
    id: 2,
    title: "Наши бригады в работе",
    description: "Профессиональный подход к каждому объекту",
    src: "/videos/video-2.mp4",
  },
];

const VideosSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="videos" className="py-24 bg-background relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Ролики
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Наши работы в действии
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Смотрите как мы работаем — от фундамента до финишной отделки
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card border border-border card-hover cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              {/* Video Preview */}
              <div className="aspect-[9/16] md:aspect-video relative bg-gradient-to-br from-primary/10 to-primary/5">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                />
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20 group-hover:bg-foreground/30 transition-colors">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-secondary-foreground ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-foreground/50 hover:bg-foreground/70 rounded-full flex items-center justify-center text-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <video
                src={videos.find((v) => v.id === activeVideo)?.src}
                className="w-full aspect-video"
                controls
                autoPlay
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
