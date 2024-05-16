import Title from '@/components/title'
import GallerySlide from '@/components/gallery-slide'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useState, useEffect } from 'react'
import { whatsappLinkBase } from '@/lib/contact'

import 'swiper/css'
import 'swiper/css/navigation'


export default function Gallery({}) {

  const imagesNum = 22
  const imagesPaths = Array.from({ length: imagesNum }, (_, i) => `/images/gallery/${i + 1}.webp`)
  const [perPage, setPerPage] = useState(2)

  // Calculate slides per view based on window width
  useEffect(() => {

    function updatePerPage() {
      const width = window.innerWidth
      if (width < 640) {
        setPerPage(2)
      }
      else if (width < 1024) {
        setPerPage(3)
      }
      else setPerPage(5)
    }
    updatePerPage()

    // Actualizar el estado cuando el tamaño de la ventana cambie
    window.addEventListener('resize', () => {
      updatePerPage()
    })

  }, [])

  return (
    <section
      className={`
        container
        mx-auto
        relative
      `}
      id="gallery"
    >
      <Title>Gallery</Title>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={perPage}
        className={`
          rounded-4xl
          overflow-hidden
        `}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {/* gift slide */}
        <SwiperSlide>
          <GallerySlide 
            imagePath={"/images/gallery/gift.jpeg"}
            text="Order your cupcakes now!!"
            link={whatsappLinkBase}
          />
        </SwiperSlide>

        {/* Images slides */}
        {
          imagesPaths.map((imagePath, index) => (
            <SwiperSlide key={index}>
              <GallerySlide 
                imagePath={imagePath}
              />
            </SwiperSlide>
          ))
        }
    </Swiper>
    </section>
  )
}