'use client'

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState, useMemo, useRef } from 'react' // Adicionado useRef para o ref

// --- DADOS PERMANECEM OS MESMOS ---

const testimonials = [
  {
    name: 'João Silva',
    role: 'CEO, TechStart',
    location: 'Brasil',
    content: 'A TERN transformou completamente nossa presença digital.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Maria Santos',
    role: 'Diretora de Marketing, Inovare',
    location: 'Brasil',
    content:
      'O aplicativo mobile desenvolvido aumentou nosso engajamento em 300%.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Carlos Oliveira',
    role: 'Founder, StartupXYZ',
    location: 'Espanha',
    content: 'Sistemas web robustos entregues com excelência.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/55.jpg'
  },
  {
    name: 'Ana Paula',
    role: 'Gestora, E-commerce Plus',
    location: 'Brasil',
    content: 'Nossa plataforma e-commerce ficou incrível!',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/66.jpg'
  },
  {
    name: 'Pedro Almeida',
    role: 'Product Manager, DevSolutions',
    location: 'Portugal',
    content: 'Equipe profissional e muito atenciosa. Recomendamos!',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/70.jpg'
  },
  {
    name: 'Juliana Ferreira',
    role: 'Designer UX/UI, Creativa',
    location: 'Brasil',
    content: 'Adorei trabalhar com a equipe! Design moderno e funcional.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/77.jpg'
  },
  {
    name: 'Ricardo Mendes',
    role: 'CTO, NextTech',
    location: 'Espanha',
    content: 'Entrega rápida e código limpo. Excelente serviço!',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Larissa Costa',
    role: 'Marketing Manager, TrendyShop',
    location: 'Brasil',
    content: 'O site ficou lindo e otimizado para SEO. Superou expectativas!',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/88.jpg'
  },
  {
    name: 'Mateus Lima',
    role: 'Founder, CodeCraft',
    location: 'Brasil',
    content: 'Sistema web funcional, responsivo e seguro. Excelente suporte.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/91.jpg'
  },
  {
    name: 'Camila Rocha',
    role: 'Product Designer, NovaApps',
    location: 'Espanha',
    content: 'Profissionalismo e atenção aos detalhes em todos os projetos.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/95.jpg'
  },
  {
    name: 'Bruno Alves',
    role: 'CEO, StartupLab',
    location: 'Brasil',
    content: 'O app desenvolvido aumentou significativamente nossas vendas.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/20.jpg'
  },
  {
    name: 'Sofia Martins',
    role: 'Marketing Lead, ShopEasy',
    location: 'Brasil',
    content: 'Excelente comunicação e entrega dentro do prazo. Recomendo!',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    name: 'Fernando Gomes',
    role: 'Tech Lead, DevWorks',
    location: 'Espanha',
    content: 'Soluções criativas e funcionais para nossos desafios digitais.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/25.jpg'
  },
  {
    name: 'Patrícia Souza',
    role: 'CMO, MarketPro',
    location: 'Brasil',
    content: 'O projeto foi entregue com altíssima qualidade e performance.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    name: 'Thiago Fernandes',
    role: 'Founder, WebFlow',
    location: 'Portugal',
    content: 'Equipe competente e confiável, superou nossas expectativas.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/40.jpg'
  }
]

const Testimonials = () => {
  // 1. Estados para medir a altura da coluna para loop infinito
  const [columnHeight, setColumnHeight] = useState(0)
  // Utiliza useRef para a ref e useMemo para o cálculo inicial
  const columnRef = useRef<HTMLDivElement>(null)
  const duration = 60 // Duração da animação

  // 2. Separação dos depoimentos em duas colunas (o dobro para garantir a continuidade)
  const leftSource = useMemo(() => {
    const primary = testimonials.filter((_, i) => i % 2 === 0)
    return [...primary, ...primary]
  }, [testimonials])

  const rightSource = useMemo(() => {
    const primary = testimonials.filter((_, i) => i % 2 !== 0)
    return [...primary, ...primary]
  }, [testimonials])

  // 3. Medição da altura para calcular a transição
  useEffect(() => {
    if (columnRef.current) {
      // A altura de um único conjunto de cards é suficiente para o loop (divide a altura total por 2)
      const height = columnRef.current.offsetHeight / 2
      setColumnHeight(height)
    }
  }, [columnRef])

  // 4. Definição das variantes de animação (ajustadas)
  const animateUp = {
    y: [0, -columnHeight], // De 0 até -Altura (sobe)
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: 'linear',
      delay: 0
    }
  }

  const animateDown = {
    y: [-columnHeight, 0], // De -Altura até 0 (desce, no sentido oposto)
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: 'linear',
      delay: 0
    }
  }

  // 5. Componente do Card
  const renderCard = (t: typeof testimonials[0], i: number) => (
    <Card
      key={`${t.name}-${i}`}
      className='relative p-6 rounded-xl transition-all duration-300 overflow-hidden group'
      style={{
        background: '#0D0D0D', // Fundo preto escuro
        border: '1px solid rgba(255, 115, 0, 0.3)',
      }}
    >
      {/* Efeito Glow nos Cantos */}
      <div
        className='absolute top-0 right-0 w-20 h-20 opacity-40 group-hover:opacity-60 transition-opacity duration-300 blur-2xl'
        style={{
          background:
            'radial-gradient(circle, rgba(255, 115, 0, 0.8) 0%, transparent 70%)'
        }}
      />

      <div className='relative z-10 space-y-3'>
        {/* Cabeçalho do Card */}
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <img
              src={t.photo}
              alt={t.name}
              className='w-12 h-12 rounded-full object-cover ring-2 ring-orange-500/80'
            />
          </div>
          <div>
            <p className='font-semibold text-white'>{t.name}</p>
            <p className='text-xs text-orange-500'>
              {t.role} | {t.location}
            </p>
          </div>
        </div>

        {/* Estrelas (CORRIGIDO: Estava fora do JSX do Card) */}
        <div className='flex gap-1'>
          {[...Array(t.rating)].map((_, j) => (
            <Star
              key={j}
              className='w-4 h-4 fill-orange-500 text-orange-500'
              style={{ filter: 'drop-shadow(0 0 4px rgba(255,115,0,0.5))' }} // Glow nas estrelas
            />
          ))}
        </div>

        {/* Conteúdo */}
        <p className='text-sm italic text-gray-300'>"{t.content}"</p>
      </div>
    </Card>
  )

  return (
    <section
      className='py-24 relative overflow-hidden'
      style={{
        // Fundo com leve gradiente para dar profundidade
        background:
          'radial-gradient(ellipse at center, #00000 100%, #000000 100%)'
      }}
    >
      {/* Título da Seção */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
            O Que Nossos{' '}
            <span
              className='bg-clip-text text-transparent'
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #ff7300 0%, #ff9d42 100%)',
                textShadow: '0 0 30px rgba(255, 115, 0, 0.5)'
              }}
            >
              Clientes Dizem
            </span>
          </h2>
          <p className='text-xl text-orange-500/80 max-w-2xl mx-auto'>
            Histórias reais de sucesso com nossas soluções digitais
          </p>
        </div>

        {/* Área do Carrossel */}
        {/* Adicionei lg:grid-cols-3 e xl:grid-cols-4 para aproveitar o espaço em telas grandes */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-[700px] overflow-hidden relative'>
          {/* Gradientes de Fade (TOPO e BASE) - Essenciais para a ilusão de loop */}
          <div
            className='absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none'
            style={{
              background:
                'linear-gradient(180deg, #000000 0%, transparent 100%)'
            }}
          />
          <div
            className='absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none'
            style={{
              background: 'linear-gradient(0deg, #000000 0%, transparent 100%)'
            }}
          />

          {/* Coluna 1 - Sobe */}
          {/* O ref é colocado aqui para medir o conteúdo */}
          <motion.div
            ref={columnRef as React.RefObject<HTMLDivElement>}
            animate={columnHeight > 0 ? animateUp : undefined}
            className='space-y-6'
          >
            {leftSource.map(renderCard)}
          </motion.div>

          {/* Coluna 2 - Desce */}
          {columnHeight > 0 && (
            <motion.div
              animate={animateDown}
              className='space-y-6 hidden md:block' // Esconde em telas pequenas
            >
              {rightSource.map(renderCard)}
            </motion.div>
          )}

          {/* Coluna 3 - Sobe (Adicional para telas grandes) */}
          {columnHeight > 0 && (
            <motion.div
              animate={animateUp}
              className='space-y-6 hidden lg:block' // Visível apenas em telas grandes (lg e acima)
            >
              {leftSource.map(renderCard)}
            </motion.div>
          )}

          {/* Coluna 4 - Desce (Adicional para telas muito grandes) */}
          {columnHeight > 0 && (
            <motion.div
              animate={animateDown}
              className='space-y-6 hidden xl:block' // Visível apenas em telas muito grandes (xl e acima)
            >
              {rightSource.map(renderCard)}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
