"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"

const adsSlides = [
  {
    id: 1,
    title: "Billboard reklamowy",
    description: "Duży format przy ruchliwych trasach i wjazdach do miasta.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
  },
  {
    id: 2,
    title: "Citylight",
    description: "Elegancki nośnik w centrum miasta, przy chodnikach i przystankach.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
  },
  {
    id: 3,
    title: "Reklama LED",
    description: "Dynamiczna ekspozycja dla marek, które chcą mocno przyciągać uwagę.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
  },
  {
    id: 4,
    title: "Oklejanie witryn",
    description: "Grafika na szybach lokalu, sklepu, salonu lub punktu usługowego.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
]

const AdsCarousel = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const scrollToSlide = (index: number) => {
    if (!ref.current) return

    ref.current.scrollTo({
      left: ref.current.clientWidth * index,
      behavior: "smooth",
    })

    setActive(index)
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
      <div
        ref={ref}
        className="flex h-[360px] snap-x snap-mandatory overflow-hidden scroll-smooth"
      >
        {adsSlides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-full min-w-full snap-center overflow-hidden"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover opacity-50"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

            <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
                Przykładowy nośnik
              </p>

              <h2 className="text-4xl font-semibold text-white">
                {slide.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-neutral-300">
                {slide.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollToSlide(Math.max(active - 1, 0))}
        className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={() => scrollToSlide(Math.min(active + 1, adsSlides.length - 1))}
        className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {adsSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              active === index ? "w-10 bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default AdsCarousel