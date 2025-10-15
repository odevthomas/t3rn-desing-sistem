import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="p-8 h-full bg-card border-border hover:border-primary transition-all duration-500 hover:shadow-[0_0_30px_hsl(30_100%_50%/0.2)] group">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
