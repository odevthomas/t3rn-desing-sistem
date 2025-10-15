import { Code, Smartphone, Globe, Database, Cloud, Zap, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Websites Profissionais",
    description: "Landing pages e sites corporativos que convertem visitantes em clientes",
    details: "Criamos sites modernos, responsivos e otimizados para SEO. Perfeito para empresas que querem marcar presença online com design profissional e alta performance."
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e multiplataforma para iOS e Android",
    details: "Desenvolvimento de aplicativos mobile completos usando as melhores tecnologias. Experiência fluida e intuitiva para seus usuários em qualquer dispositivo."
  },
  {
    icon: Code,
    title: "Sistemas Web",
    description: "Plataformas completas e dashboards administrativos personalizados",
    details: "Sistemas web robustos e escaláveis para gestão empresarial. Dashboards personalizados com relatórios em tempo real e integração com suas ferramentas."
  },
  {
    icon: Database,
    title: "APIs & Backend",
    description: "Infraestrutura robusta e escalável para suas aplicações",
    details: "Desenvolvimento de APIs RESTful e GraphQL com arquitetura moderna. Backend escalável preparado para crescer junto com seu negócio."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migração e otimização de sistemas para a nuvem",
    details: "Migramos e otimizamos seus sistemas para AWS, Google Cloud ou Azure. Redução de custos e aumento de performance com infraestrutura cloud."
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Integração de sistemas e automação de processos empresariais",
    details: "Automatizamos processos repetitivos e integramos diferentes sistemas. Aumente a produtividade e reduza erros operacionais com workflows inteligentes."
  }
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-8 bg-card border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_hsl(30_100%_50%/0.3)] flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4 flex-1">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:animate-glow-pulse">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {service.description}
                </p>

                <p className="text-foreground/80 text-sm leading-relaxed">
                  {service.details}
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full mt-6 animate-pulse-glow"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ' + service.title, '_blank')}
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Fale Conosco no WhatsApp
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
