import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#about", label: "О нас" },
    { href: "#calculator", label: "Калькулятор" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Мастерская Тёплого Дома" className="w-10 h-10 rounded-lg object-cover" />
            <div className={`hidden sm:block ${isScrolled ? "text-foreground" : "text-card"}`}>
              <span className="font-bold text-lg">Мастерская</span>
              <span className="block text-sm opacity-80">Тёплого Дома</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  isScrolled ? "text-foreground" : "text-card/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+79378892148"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground" : "text-card"
              }`}
            >
              <Phone className="w-4 h-4" />
              +7 937 889 2148
            </a>
            <Button variant={isScrolled ? "secondary" : "hero"} size="sm">
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-card hover:bg-card/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <a
                  href="tel:+79378892148"
                  className="flex items-center gap-2 text-secondary font-medium mb-4"
                >
                  <Phone className="w-4 h-4" />
                  +7 937 889 2148
                </a>
                <Button variant="secondary" className="w-full">
                  Заказать звонок
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
