const companies = [
  "TechStart",
  "Inovare",
  "StartupXYZ",
  "E-commerce Plus",
  "Digital Solutions",
  "Cloud Systems",
  "Mobile First",
  "Data Analytics Co",
  "AI Innovations",
  "Web Masters"
];

const TrustedBy = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empresas que <span className="text-gradient">Confiam</span> em Nós
          </h2>
          <p className="text-lg text-muted-foreground">
            Parceiros de sucesso que transformaram seus negócios
          </p>
        </div>

        <div className="relative h-[300px] overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-background to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />

          {/* Scrolling content - duplicated for infinite effect */}
          <div className="animate-scroll-up">
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-[60px] mb-4"
              >
                <div className="group px-8 py-4 bg-card border border-border rounded-xl hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(30_100%_50%/0.3)] w-full max-w-md">
                  <p className="text-xl font-semibold text-center group-hover:text-primary transition-colors">
                    {company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
