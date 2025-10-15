'use client'

import { Users, Code, Award, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  {
    icon: Users,
    value: 15,
    suffix: '+',
    label: 'Clientes Satisfeitos'
  },
  {
    icon: Code,
    value: 22,
    suffix: '+',
    label: 'Projetos Finalizados'
  },
  {
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Taxa de Sucesso'
  },
  {
    icon: Zap,
    value: 3,
    suffix: ' Anos',
    label: 'De Experiência'
  }
]

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Detecta quando a seção entra na tela
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const CountUp = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }, [isVisible, end])

    return (
      <span className='text-gradient font-extrabold'>
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <section ref={sectionRef} className='py-24 relative bg-background/50'>
      <div className='container mx-auto px-4'>
        {/* Título */}
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>
            Números que <span className='text-gradient'>Impressionam</span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Empresa nova, mas com resultados sólidos: mais de 22 projetos
            entregues em 3 anos de experiência.
          </p>
        </div>

        {/* Estatísticas */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='group p-8 bg-card border border-border rounded-xl hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_hsl(30_100%_50%/0.3)] text-center'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Ícone */}
              <div className='w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors group-hover:animate-glow-pulse'>
                <stat.icon className='w-8 h-8 text-primary' />
              </div>

              {/* Valor animado */}
              <div className='text-5xl font-extrabold mb-2'>
                {isVisible ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>

              {/* Label */}
              <p className='text-muted-foreground text-lg'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
