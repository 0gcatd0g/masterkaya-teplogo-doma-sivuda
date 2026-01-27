import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      lines: [
        "Ульяновская область,",
        "г. Ульяновск"
      ],
    },
    {
      icon: Phone,
      title: "Телефон",
      lines: ["+7 937 889 2148"],
      href: "tel:+79378892148",
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["info@teplydom.ru"],
      href: "mailto:info@teplydom.ru",
    },
    {
      icon: Clock,
      title: "Режим работы",
      lines: ["Пн-Пт: 9:00 - 18:00", "Сб: 10:00 - 16:00"],
    },
  ];

  return (
    <section id="contacts" className="py-24 bg-primary relative overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-primary-foreground/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-secondary/20 rotate-45 hidden lg:block" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary-foreground/10 text-primary-foreground text-sm font-semibold rounded-full mb-4">
            Контакты
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Готовы обсудить ваш проект и ответить на любые вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="Мастерская Тёплого Дома" className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-bold text-primary-foreground mb-1">
                  ИП Сивуда Алексей Андреевич
                </h3>
                <p className="text-primary-foreground/60">
                  Официальный представитель «Мастерской Тёплого Дома»
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-foreground mb-1">
                        {item.title}
                      </h4>
                      {item.lines.map((line, lIndex) => (
                        item.href ? (
                          <a
                            key={lIndex}
                            href={item.href}
                            className="block text-primary-foreground/70 hover:text-secondary transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={lIndex} className="text-primary-foreground/70 text-sm">
                            {line}
                          </p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Напишите нам
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Как к вам обращаться?"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Опишите ваш проект или задайте вопрос..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Отправить сообщение
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
