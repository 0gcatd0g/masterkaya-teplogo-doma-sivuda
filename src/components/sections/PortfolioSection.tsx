import { ArrowRight, MapPin, Clock, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Коттедж в Ульяновске",
    description: "Утепление фасада по технологии «мокрый фасад» с отделкой декоративной штукатуркой",
    area: "240 м²",
    duration: "18 дней",
    location: "г. Ульяновск",
    tags: ["Мокрый фасад", "Штукатурка"],
    image: "/images/project-1.jpg",
  },
  {
    title: "Частный дом в Димитровграде",
    description: "Комплексное утепление кровли и фасадов с монтажом вентилируемого фасада",
    area: "320 м²",
    duration: "25 дней",
    location: "г. Димитровград",
    tags: ["Вент. фасад", "Кровля"],
    image: "/images/project-2.jpg",
  },
  {
    title: "Дом в Новоульяновске",
    description: "Утепление фасада термопанелями с клинкерной плиткой и монтаж тёплых полов",
    area: "180 м²",
    duration: "14 дней",
    location: "г. Новоульяновск",
    tags: ["Термопанели", "Тёплый пол"],
    image: "/images/project-3.jpg",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-muted/50 relative">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
              Портфолио
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Наши проекты
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Реализованные проекты в Ульяновской области и других регионах
            </p>
          </div>
          <Button variant="outline" size="lg">
            Все проекты
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border card-hover"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Ruler className="w-4 h-4" />
                    {project.area}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
