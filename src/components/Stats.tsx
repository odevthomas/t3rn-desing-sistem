import { Users, Code, Award, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Clientes Satisfeitos"
  },
  {
    icon: Code,
    value: 300,
    suffix: "+",
    label: "Projetos Entregues"
  },
  {
    icon: Award,
    value: 98,
    suffix: "%",
    label: "Taxa de Sucesso"
  },
  {
    icon: Zap,
    value: 5,
    suffix: " Anos",
    label: "De Experiência"
  }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Números que <span className="text-gradient">Impressionam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados concretos que provam nosso compromisso com a excelência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border rounded-xl hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_hsl(30_100%_50%/0.3)] text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:animate-glow-pulse">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              <div className="text-5xl font-bold text-primary mb-2">
                {isVisible ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>

              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
