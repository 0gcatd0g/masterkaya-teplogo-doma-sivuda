import { ArrowRight, Shield, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Award, value: "7+", label: "лет опыта" },
    { icon: Shield, value: "10", label: "лет гарантии" },
    { icon: Clock, value: "200+", label: "проектов" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Профессиональное утепление фасадов"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
        <div className="absolute inset-0 blueprint-grid opacity-30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-secondary/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-40 left-10 w-20 h-20 border border-card/10 rotate-45 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 section-container py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm text-card/90 font-medium">
              Работаем по всей Ульяновской области
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6 animate-slide-up">
            Надежный тепловой
            <span className="block text-secondary">контур для вашего дома</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-card/80 max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Профессиональное утепление и отделка фасадов частных домов. Экономия на отоплении до 40% с гарантией 10 лет.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              Рассчитать смету
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Смотреть проекты
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-card">{stat.value}</div>
                <div className="text-sm text-card/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-card/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
