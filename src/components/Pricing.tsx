import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Landing Page",
    price: "A partir de R$ 1.500",
    description: "Perfeito para validar sua ideia e começar a capturar leads",
    features: [
      "Design responsivo e moderno",
      "SEO otimizado",
      "Formulário de contato",
      "Integração com WhatsApp",
      "até 5 seções customizadas",
      "Suporte por 30 dias"
    ],
    popular: false
  },
  {
    name: "Site Profissional",
    price: "A partir de R$ 3.500",
    description: "Solução completa para empresas que querem se destacar",
    features: [
      "Tudo do plano Landing Page",
      "Blog integrado",
      "Painel administrativo",
      "Até 10 páginas",
      "Animações personalizadas",
      "Google Analytics",
      "Suporte por 60 dias"
    ],
    popular: true
  },
  {
    name: "Aplicativo & Sistema",
    price: "Sob Consulta",
    description: "Soluções customizadas para necessidades específicas",
    features: [
      "App mobile iOS e Android",
      "Sistema web completo",
      "Dashboard administrativo",
      "API personalizada",
      "Banco de dados escalável",
      "Manutenção inclusa",
      "Suporte prioritário"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Planos e <span className="text-gradient">Investimentos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para impulsionar seu negócio digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`group p-8 bg-card border transition-all duration-500 hover:scale-105 relative ${
                plan.popular
                  ? "border-primary shadow-[0_0_40px_hsl(30_100%_50%/0.3)]"
                  : "border-border hover:border-primary hover:shadow-[0_0_30px_hsl(30_100%_50%/0.2)]"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  {plan.price}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full group/btn"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o plano ' + plan.name, '_blank')}
              >
                <MessageCircle className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                Solicitar Orçamento
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 text-muted-foreground">
          <p>Todos os planos incluem hospedagem, SSL e domínio por 1 ano</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
