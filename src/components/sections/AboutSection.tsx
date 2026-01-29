import { Award, Home, Shield, Users, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Award, value: "7+", label: "Лет опыта" },
  { icon: Home, value: "200+", label: "Проектов" },
  { icon: Shield, value: "10", label: "Лет гарантии" },
  { icon: Users, value: "15", label: "Специалистов" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <img src={logo} alt="Мастерская Тёплого Дома" className="w-32 h-32 mx-auto mb-4 object-contain" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Мастерская Тёплого Дома</h3>
                  <p className="text-muted-foreground">Профессионалы своего дела</p>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border hidden md:block">
              <div className="text-3xl font-bold text-secondary mb-1">-20%</div>
              <div className="text-sm text-muted-foreground">экономия как субподрядчик</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
              О компании
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Создаём энергоэффективные дома с 2019 года
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              «Мастерская Тёплого Дома» — это команда профессионалов с многолетним опытом в сфере утепления и отделки частных домов в Ульяновской области.
            </p>
            <p className="text-muted-foreground mb-8">
              Мы работаем как надёжный субподрядчик для строительных компаний: вы экономите до 20% на рабочей силе без потери качества. Полная документация, договор и гарантия на все виды работ.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-xl border border-border text-center"
                >
                  <stat.icon className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="lg">
              Подробнее о нас
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
