import { useState, useMemo } from "react";
import { Calculator, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Pricing configuration (rubles per m²)
const PRICING = {
  services: {
    facade: { name: "Утепление фасада", basePrice: 1500 },
    roof: { name: "Утепление кровли", basePrice: 1200 },
    engineering: { name: "Инженерные системы", basePrice: 2000 },
    complex: { name: "Комплексное утепление", basePrice: 2500 },
  },
  materials: {
    mineral: { name: "Минеральная вата", multiplier: 1.0 },
    penoplex: { name: "Пеноплекс", multiplier: 0.85 },
    ecowool: { name: "Эковата", multiplier: 1.1 },
    polyurethane: { name: "Полиуретан", multiplier: 1.3 },
  },
  finishes: {
    plaster: { name: "Декоративная штукатурка", price: 800 },
    siding: { name: "Виниловый сайдинг", price: 600 },
    brick: { name: "Облицовочный кирпич", price: 1200 },
    panel: { name: "Фиброцементные панели", price: 1000 },
  },
};

const CalculatorSection = () => {
  const [formData, setFormData] = useState({
    service: "",
    area: "",
    material: "",
    finish: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsSubmitted(false);
  };

  // Calculate the estimated price
  const calculatedPrice = useMemo(() => {
    const area = parseFloat(formData.area) || 0;
    if (area <= 0) return null;

    const service = PRICING.services[formData.service as keyof typeof PRICING.services];
    const material = PRICING.materials[formData.material as keyof typeof PRICING.materials];
    const finish = PRICING.finishes[formData.finish as keyof typeof PRICING.finishes];

    if (!service) return null;

    let total = service.basePrice * area;

    if (material) {
      total *= material.multiplier;
    }

    if (finish) {
      total += finish.price * area;
    }

    return Math.round(total);
  }, [formData]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service || !formData.area) {
      toast.error("Пожалуйста, выберите услугу и укажите площадь");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("requests").insert({
        type: "calculator",
        service: formData.service,
        area: parseFloat(formData.area),
        material: formData.material || null,
        finish: formData.finish || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("Заявка отправлена! Мы свяжемся с вами для уточнения деталей.");
    } catch (error) {
      console.error("Error submitting calculator request:", error);
      toast.error("Произошла ошибка. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-background relative">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Рассчитать стоимость
            </h2>
            <p className="text-muted-foreground text-lg">
              Получите предварительную смету за 2 минуты
            </p>
          </div>

          {/* Calculator Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Service Select */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Тип услуги *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="facade">Утепление фасада</option>
                    <option value="roof">Утепление кровли</option>
                    <option value="engineering">Инженерные системы</option>
                    <option value="complex">Комплексное утепление</option>
                  </select>
                </div>

                {/* Area Input */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Площадь, м² *
                  </label>
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Например: 120"
                    min="1"
                    max="10000"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                  />
                </div>

                {/* Material Select */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Материал утеплителя
                  </label>
                  <select
                    name="material"
                    value={formData.material}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                  >
                    <option value="">Выберите материал</option>
                    <option value="mineral">Минеральная вата</option>
                    <option value="penoplex">Пеноплекс</option>
                    <option value="ecowool">Эковата</option>
                    <option value="polyurethane">Полиуретан</option>
                  </select>
                </div>

                {/* Finish Select */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Финишная отделка
                  </label>
                  <select
                    name="finish"
                    value={formData.finish}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-secondary focus:border-secondary transition-colors"
                  >
                    <option value="">Выберите отделку</option>
                    <option value="plaster">Декоративная штукатурка</option>
                    <option value="siding">Виниловый сайдинг</option>
                    <option value="brick">Облицовочный кирпич</option>
                    <option value="panel">Фиброцементные панели</option>
                  </select>
                </div>
              </div>

              {/* Price Display */}
              {calculatedPrice && (
                <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 text-center animate-fade-in">
                  <p className="text-sm text-muted-foreground mb-2">
                    Предварительная стоимость работ:
                  </p>
                  <p className="text-4xl font-bold text-secondary mb-2">
                    {formatPrice(calculatedPrice)} ₽
                  </p>
                  <p className="text-xs text-muted-foreground">
                    * Окончательная стоимость после осмотра объекта
                  </p>
                </div>
              )}

              {isSubmitted ? (
                <div className="flex items-center justify-center gap-3 py-4 bg-secondary/10 text-secondary rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Заявка отправлена! Мы свяжемся с вами.</span>
                </div>
              ) : (
                <Button 
                  type="submit" 
                  variant="secondary" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting || !calculatedPrice}
                >
                  {isSubmitting ? "Отправка..." : "Получить точную смету"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              )}
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Точную смету подготовит наш специалист после выезда на объект
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
