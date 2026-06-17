'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useState } from 'react'
import { slides } from '../mocks/slides'

const HomeCarousel = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [activeSlide, setActiveSlide] = useState(0)

  const scrollToSlide = (index: number) => {
    if (!ref.current) return

    const width = ref.current.clientWidth

    ref.current.scrollTo({
      left: width * index,
      behavior: 'smooth',
    })

    setActiveSlide(index)
  }

  const nextSlide = () => {
    if (activeSlide < slides.length - 1) {
      scrollToSlide(activeSlide + 1)
    }
  }

  const prevSlide = () => {
    if (activeSlide > 0) {
      scrollToSlide(activeSlide - 1)
    }
  }

  return (
    <div className="relative">
      <div className="relative h-[620px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03]">
        <div
          ref={ref}
          className="
            flex h-full w-full snap-x snap-mandatory
            overflow-x-hidden overflow-y-hidden
            scroll-smooth
          "
        >
          {slides.map((slide) => (
            <section
              key={slide.id}
              className="
      relative flex h-full min-w-full snap-center
      overflow-hidden px-12
    "
            >
              {slide.image && (
                <img
                  src={slide.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-20"
                />
              )}

              <div className="absolute inset-0 bg-black/65" />

              <div className="absolute inset-0">
                <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />

                <div className="absolute bottom-[-30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_40%)]" />
              </div>

              <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl items-center gap-16">
                <div className="flex-1">
                  <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-400">
                    {slide.label}
                  </p>

                  <h1 className="text-2xl lg:text-3xl xl:text-6xl font-semibold tracking-tight text-white xl:text-7xl">
                    {slide.title}
                  </h1>

                  <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
                    {slide.description}
                  </p>

                  {slide.id === 2 && (
                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                      <Card title="Projekty graficzne" text="Logo, identyfikacja wizualna i materiały reklamowe." />
                      <Card title="Reklama zewnętrzna" text="Banery, szyldy, kasetony i oznakowanie." />
                      <Card title="Druk i produkcja" text="Kompleksowa realizacja materiałów reklamowych." />
                    </div>
                  )}

                  {slide.id === 3 && (
                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                      <Card title="Projekt szyldu" text="Nowoczesne oznakowanie dla Twojej firmy." />
                      <Card title="Oklejanie witryn" text="Przyciągnij uwagę klientów już od wejścia." />
                      <Card title="Banery reklamowe" text="Trwałe i estetyczne rozwiązania promocyjne." />
                      <Card title="Kompleksowa realizacja" text="Od projektu po montaż gotowej reklamy." />
                    </div>
                  )}
                </div>

                {slide.image && (
                  <div className="hidden flex-1 lg:flex lg:justify-end">
                    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="
                h-[450px] w-[520px]
                rounded-[1.5rem]
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
                      />

                      <div className="pointer-events-none absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="
            absolute left-6 top-1/2 z-20
            flex h-14 w-14 -translate-y-1/2 items-center justify-center
            rounded-full border border-white/10
            bg-black/30 backdrop-blur-xl
            transition hover:bg-white/10
          "
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="
            absolute right-6 top-1/2 z-20
            flex h-14 w-14 -translate-y-1/2 items-center justify-center
            rounded-full border border-white/10
            bg-black/30 backdrop-blur-xl
            transition hover:bg-white/10
          "
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`
              h-2 rounded-full transition-all duration-300
              ${activeSlide === index
                ? 'w-12 bg-white'
                : 'w-2 bg-white/30'
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}

type CardProps = {
  title: string
  text: string
}

const Card = ({ title, text }: CardProps) => {
  return (
    <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-xl">
      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-neutral-400">
        {text}
      </p>
    </div>
  )
}

export default HomeCarousel