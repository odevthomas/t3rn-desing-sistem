import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "João Silva",
    role: "CEO, TechStart",
    content: "A TERN transformou completamente nossa presença digital. O sistema desenvolvido superou todas as expectativas!",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Diretora de Marketing, Inovare",
    content: "Profissionalismo e qualidade excepcionais. Entregaram no prazo e com um resultado surpreendente.",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    role: "Founder, StartupXYZ",
    content: "O aplicativo mobile que desenvolveram aumentou nosso engajamento em 300%. Equipe altamente qualificada!",
    rating: 5
  },
  {
    name: "Ana Paula",
    role: "Gestora, E-commerce Plus",
    content: "Nossa plataforma e-commerce ficou incrível! Suporte excepcional durante todo o processo.",
    rating: 5
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollHeight = scrollContainer.scrollHeight / 2;
    let scrollTop = 0;
    let animationId: number;

    const scroll = () => {
      scrollTop += 0.5;
      if (scrollTop >= scrollHeight) {
        scrollTop = 0;
      }
      scrollContainer.scrollTop = scrollTop;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias de sucesso de quem confiou na TERN
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Gradient overlays for smooth fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div
            ref={scrollRef}
            className="h-[600px] overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            <div className="space-y-6">
              {/* Duplicate testimonials for infinite scroll effect */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_hsl(30_100%_50%/0.3)] group"
                >
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-lg italic text-muted-foreground leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    <div className="pt-4 border-t border-border">
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
