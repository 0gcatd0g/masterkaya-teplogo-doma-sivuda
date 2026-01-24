import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CalculatorSection = () => {
  const [formData, setFormData] = useState({
    service: "",
    area: "",
    material: "",
    finish: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
                    Тип услуги
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
                    Площадь, м²
                  </label>
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Например: 120"
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

              <Button type="submit" variant="secondary" size="lg" className="w-full">
                Рассчитать стоимость
                <ArrowRight className="w-5 h-5" />
              </Button>
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
