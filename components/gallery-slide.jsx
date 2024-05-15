import Image from 'next/image'
import { fontAlternative } from '@/lib/fonts'
import { useState } from 'react'

export default function GallerySlide ({imagePath, text = "", link="#"}) {

  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`
        image-wrapper
        h-56 sm:h-72 md:h-96 lg:h-80 xl:h-96
        w-full
        rounded-2xl
        overflow-hidden
        relative
        group
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (isHovered) {
          window.open(link, '_blank')
        }
      }}
    >
      <Image 
        src={imagePath}
        alt="Cupcake"
        width={300}
        height={400}
        className={`
          object-cover
          h-full
          w-full
          duration-300
          opacity-80
          hover:opacity-100
          hover:scale-110
          select-none
          ${text && 'cursor-pointer'}
          ${text ? 'hover:opacity-10' : 'hover:'}
        `}
      />

      <div 
        className={`
          text-wrapper
          absolute
          top-0
          left-0
          w-full
          h-full
          flex
          items-center
          justify-center
          -z-10
          opacity-0
          group-hover:opacity-100
        `}
      >
        <p
          className={`
            ${fontAlternative.className}
            text-center
            text-3xl
            z-10
            w-10/12
          `}
        >
          {text}
        </p>
      </div>
    </div>
  )
}