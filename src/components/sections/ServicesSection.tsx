import { Home, Layers, Thermometer, Wrench, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Утепление фасадов",
    description: "Комплексное утепление частных домов с использованием современных материалов",
    features: ["Мокрые фасады", "Вентилируемые фасады", "Термопанели"],
  },
  {
    icon: Layers,
    title: "Кровельные работы",
    description: "Полный комплекс работ по утеплению и гидроизоляции кровли",
    features: ["Утепление мансард", "Гидроизоляция", "Ремонт кровли"],
  },
  {
    icon: Thermometer,
    title: "Инженерные системы",
    description: "Монтаж и оптимизация систем отопления и вентиляции",
    features: ["Теплые полы", "Вентиляция с рекуперацией", "Тепловые насосы"],
  },
  {
    icon: Wrench,
    title: "Отделочные работы",
    description: "Качественная финишная отделка фасадов и интерьеров",
    features: ["Декоративная штукатурка", "Сайдинг", "Облицовочный кирпич"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary text-sm font-semibold rounded-full mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Полный спектр работ по утеплению
          </h2>
          <p className="text-muted-foreground text-lg">
            От проекта до финишной отделки — берём на себя все этапы работ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card border border-border hover:border-secondary/30 card-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:shadow-glow transition-all duration-300">
                <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
