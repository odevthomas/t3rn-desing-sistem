import { Code, Smartphone, Globe, Database, Cloud, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Websites Profissionais",
    description: "Landing pages e sites corporativos que convertem visitantes em clientes"
  },
  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    description: "Apps nativos e multiplataforma para iOS e Android"
  },
  {
    icon: Code,
    title: "Sistemas Web",
    description: "Plataformas completas e dashboards administrativos personalizados"
  },
  {
    icon: Database,
    title: "APIs & Backend",
    description: "Infraestrutura robusta e escalável para suas aplicações"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migração e otimização de sistemas para a nuvem"
  },
  {
    icon: Zap,
    title: "Automação",
    description: "Integração de sistemas e automação de processos empresariais"
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
              className="group p-8 bg-card border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_hsl(30_100%_50%/0.3)] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:animate-glow-pulse">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
