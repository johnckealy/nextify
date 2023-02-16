import React, { useCallback, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { BsCaretLeftSquareFill, BsCaretRightSquareFill } from 'react-icons/bs'
import Img from '@/components/Img'




interface SlideProps {
  children: React.ReactNode
}

interface CarouselProps {
  slides: {
    imgSrc: string
  }[]
}

const Slide = ({ children }: SlideProps) => {
  return (
    <div className="embla__slide">
      {children}
    </div>
  )
}



export const EmblaCarousel = ({slides}: CarouselProps) => {
  const autoplay = useRef(Autoplay());
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay.current])

  const scrollPrev = useCallback(() => {
    autoplay.current.stop()
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    autoplay.current.stop()
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])


  return (
    <div className="overflow-hidden relative rounded-lg" >
      <div ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => {
            return (
              <Slide key={index}>
                <Img src={slide.imgSrc} alt="" containerClassName='h-60 md:h-96'  fullWidth />
              </Slide>
            )
          })}
        </div>
      </div>
      <button className="m-3 absolute inset-y-0 left-0 text-white opacity-70 hover:opacity-100" aria-label='image-carousel-left-button' onClick={scrollPrev}>
        <BsCaretLeftSquareFill className='w-10 h-10 ' />
      </button>
      <button className="m-3 absolute inset-y-0 right-0 text-white opacity-70 hover:opacity-100" aria-label='image-carousel-right-button' onClick={scrollNext}>
        <BsCaretRightSquareFill className='w-10 h-10' />
      </button>
    </div>
  )
}

export default EmblaCarousel;
