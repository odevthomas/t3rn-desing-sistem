'use client'

import { Code, Smartphone, Globe, Database, Cloud, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FaWhatsapp } from 'react-icons/fa'

const services = [
  {
    icon: Globe,
    title: 'Websites Profissionais',
    description:
      'Landing pages e sites corporativos que convertem visitantes em clientes',
    details:
      'Criamos sites modernos, responsivos e otimizados para SEO. Perfeito para empresas que querem marcar presença online com design profissional e alta performance.',
    badge: 'Mais Popular'
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Apps nativos e multiplataforma para iOS e Android',
    details:
      'Desenvolvimento de aplicativos mobile completos usando as melhores tecnologias. Experiência fluida e intuitiva para seus usuários em qualquer dispositivo.',
    badge: 'Top Tecnologia'
  },
  {
    icon: Code,
    title: 'Sistemas Web',
    description:
      'Plataformas completas e dashboards administrativos personalizados',
    details:
      'Sistemas web robustos e escaláveis para gestão empresarial. Dashboards personalizados com relatórios em tempo real e integração com suas ferramentas.',
    badge: 'Mais Robustez'
  },
  {
    icon: Database,
    title: 'APIs & Backend',
    description: 'Infraestrutura robusta e escalável para suas aplicações',
    details:
      'Desenvolvimento de APIs RESTful e GraphQL com arquitetura moderna. Backend escalável preparado para crescer junto com seu negócio.',
    badge: 'Alta Performance'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Migração e otimização de sistemas para a nuvem',
    details:
      'Migramos e otimizamos seus sistemas para AWS, Google Cloud ou Azure. Redução de custos e aumento de performance com infraestrutura cloud.',
    badge: 'Cloud Ready'
  },
  {
    icon: Zap,
    title: 'Automação',
    description: 'Integração de sistemas e automação de processos empresariais',
    details:
      'Automatizamos processos repetitivos e integramos diferentes sistemas. Aumente a produtividade e reduza erros operacionais com workflows inteligentes.',
    badge: 'Produtividade'
  }
]

const Services = () => {
  return (
    <section className='py-24 relative bg-background/50'>
      <div className='container mx-auto px-4'>
        {/* Título */}
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
            Nossos <span className='text-gradient'>Serviços</span> Exclusivos
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Soluções completas para transformar sua presença digital e aumentar
            seus resultados
          </p>
        </div>

        {/* Cards estilo celular */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='group p-8 bg-card border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-lg flex flex-col relative'
            >
              {/* Badge */}
              {service.badge && (
                <div className='absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce'>
                  {service.badge}
                </div>
              )}

              {/* Ícone */}
              <div className='w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:animate-glow-pulse'>
                <service.icon className='w-8 h-8 text-primary' />
              </div>

              {/* Título e descrição */}
              <h3 className='text-2xl font-bold group-hover:text-primary transition-colors mt-4'>
                {service.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed font-medium mt-2'>
                {service.description}
              </p>
              <p className='text-foreground/80 text-sm leading-relaxed mt-2'>
                {service.details}
              </p>

              {/* Botão WhatsApp */}
              <Button
                variant='outline'
                className='w-full mt-6 flex items-center gap-2 justify-center'
                onClick={() =>
                  window.open(
                    `https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre ${service.title}`,
                    '_blank'
                  )
                }
              >
                <FaWhatsapp className='text-xl' />
                Fale Conosco no WhatsApp
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
