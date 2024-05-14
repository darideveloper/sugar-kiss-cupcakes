import { fontAlternative } from '@/lib/fonts'
import Image from 'next/image'
import { useState } from 'react'
import { whatsappLinkBase } from '@/lib/contact'
import PropTypes from 'prop-types'

export default function PriceCard ({title, price, details, image}) {

  const [isHovered, setIsHovered] = useState(false)

  const whatsappLink = `${whatsappLinkBase} I am interested in ${title} cupcakes.`

  return (
    <article 
      className={`
        price-card
        mb-14
        px-8
        relative
        group
        overflow-hidden
      `}
      key={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          images-wrapper
          w-64
          mx-auto
          relative
          transition
          duration-500
          group-hover:-translate-x-3/4
          overflow-hidden
        `}
      >
        <Image 
          src={`/images/${image}`}
          alt={`${title} cupcake`}
          width={500}
          height={500}
          className={`
            product-image
            rounded-full
            w-11/12
            mx-auto
            opacity-80
            transition
            duration-500
            group-hover:opacity-40
          `}
        />

        <div 
          className={`
            price-wrapper
            absolute
            top-2/3
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/4
            flex
            items-center
            justify-center
            w-full
            bg-white
            py-2
            rounded-xl
            shadow-lg
            transition
            duration-500
            group-hover:opacity-0
          `}>

          <p
            className={`
              price
              font-bold
              ${fontAlternative.className}
              text-pink-dark
              font-bold
              text-3xl
            `}>
            {price}

          </p>

          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={`
            fill-pink-dark
              w-6
              h-6
              ml-4
              animate-pulse
            `}
          > 
            <path d="M4.021 10.688c1.208.172 2.51 1.312 2.979 1.781v-10.514c0-1.08.92-1.955 2-1.955s2 .875 2 1.955v6.058c0 .784.814.885.919.103.216-1.604 2.519-1.817 2.693.399.043.546.726.655.866.027.326-1.444 2.501-1.458 2.758.758.066.579.796.696.848.034.051-.67.281-.934.607-.934 1.098 0 2.309 2.019 2.309 4.41 0 4.295-3 4.306-3 11.19h-10c-.332-3.942-3.462-7.431-6.271-10.241-.488-.488-.729-1.052-.729-1.564 0-.93.759-1.688 2.021-1.507z"/>
          </svg>

        </div>


      </div>

      <div
        className={`
          texts
          absolute
          top-0
          right-0
          w-7/12
          h-full
          flex
          flex-col
          justify-center
          items-center
          transition
          duration-500
          opacity-0 group-hover:opacity-100
          cursor-pointer
          mr-4
        `}
        onClick={() => {
          // Open whatsapp in a new tab
          if (isHovered) {
            window.open(whatsappLink, '_blank')
          }
        }}
        >

        <h3
          className={`
            title
            ${fontAlternative.className}
            text-3xl
            text-pink-dark
            text-center
          `}
        >
          {title}
        </h3>

        <p
          className={`
            price
            text-xl
            text-center
            mt-2
            font-bold
            italic
            text-black
          `}
        >
          {price} each
        </p>

        <p
          className={`
            details
            text-center
            mt-2
            text-md
          `}
        >
          {details}
        </p>

        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className={`
            fill-pink-light
          `}
        >
         <path d="M15 8v-5l9 10.03-9 9.97v-5c-15 0-19.167-15.167-10.606-17.013-3.805 2.938 3.252 7.473 10.606 7.013z"/>
        </svg>

      </div>
    </article>
  )
}

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}