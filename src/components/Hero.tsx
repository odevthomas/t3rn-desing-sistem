'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import heroDesktop from '@/assets/hero-desktop.svg'
import heroMobile from '@/assets/logo-t3rn.png'

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [animate, setAnimate] = useState(false) // controla animação de entrada do texto

  // Detecta se a tela é mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Efeito parallax
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Inicia animação de entrada do texto
  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <section className='relative min-h-[100vh] flex items-center justify-center overflow-hidden'>
      {/* Fundo parallax com flutuação */}
      <div
        ref={parallaxRef}
        className='absolute inset-0 bg-cover bg-center transition-transform duration-200 opacity-90 z-0 animate-float-slow'
        style={{
          backgroundImage: `url(${isMobile ? heroMobile : heroDesktop})`,
          backgroundPosition: isMobile ? 'center top' : 'center center'
        }}
      />


      {/* Conteúdo */}
      <div className='relative z-[2] container mx-auto px-6 md:px-12 flex flex-col items-center md:items-start justify-center w-full min-h-[100vh]'>
        <div
          className={`text-center md:text-left space-y-8 max-w-4xl py-20 md:py-0 transition-all duration-1000 ${
            animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight'>
            Transforme suas Ideias em{' '}
            <span className='text-gradient'>Soluções Digitais</span> Poderosas
          </h1>

          <p className='text-lg md:text-2xl text-muted-foreground max-w-lg mx-auto md:mx-0'>
            Desenvolvemos websites, aplicativos e sistemas personalizados que
            impulsionam o seu negócio para o futuro.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center pt-6'>
            <Button
              variant='hero'
              size='lg'
              className='group flex items-center gap-2 w-full sm:w-auto'
              onClick={() =>
                window.open('https://wa.me/5511999999999', '_blank')
              }
            >
              <FaWhatsapp className='text-xl group-hover:scale-110 transition-transform' />
              Fale Conosco
            </Button>

            <Button variant='outline' size='lg' className='w-full sm:w-auto'>
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Keyframes no tailwind.config.js */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
