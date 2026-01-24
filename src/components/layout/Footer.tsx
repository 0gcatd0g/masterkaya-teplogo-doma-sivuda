import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: "Утепление фасадов", href: "#services" },
      { label: "Кровельные работы", href: "#services" },
      { label: "Инженерные системы", href: "#services" },
      { label: "Отделочные работы", href: "#services" },
    ],
    company: [
      { label: "О компании", href: "#about" },
      { label: "Портфолио", href: "#portfolio" },
      { label: "Калькулятор", href: "#calculator" },
      { label: "Контакты", href: "#contacts" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">М</span>
              </div>
              <div>
                <span className="font-bold text-lg block">Мастерская</span>
                <span className="text-sm text-background/60">Тёплого Дома</span>
              </div>
            </div>
            <p className="text-background/60 text-sm mb-4">
              Профессиональное утепление и отделка фасадов в Республике Калмыкия. Работаем с 2009 года.
            </p>
            <p className="text-background/80 text-sm font-medium">
              ИП Сивуда Алексей Андреевич
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Компания</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-background/60 text-sm">
                  Республика Калмыкия, Кетченеровский район, поселок Кетченеры
                </span>
              </li>
              <li>
                <a
                  href="tel:+79378892148"
                  className="flex items-center gap-3 text-background/60 hover:text-secondary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  +7 937 889 2148
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@teplydom.ru"
                  className="flex items-center gap-3 text-background/60 hover:text-secondary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  info@teplydom.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {currentYear} Мастерская Тёплого Дома. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/40 hover:text-secondary transition-colors text-sm">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
