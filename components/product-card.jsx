import PropTypes from 'prop-types'
import Image from 'next/image'
import { fontTitle } from '@/lib/fonts'


export default function ProductCard ({title, price, details, image, onClick}) {
 
  return (
    <article 
      className={`
        price-card
        mb-20
        px-8
        group
        flex
        flex-col sm:flex-row
        items-center
        justify-center
        cursor-pointer
      `}
      key={title}
      onClick={() => onClick()}
    >
      <div
        className={`
          images-wrapper
          w-11/12 sm:w-1/2
          mx-auto
          relative
          transition
          duration-500
        `}
      >
        <Image 
          src={image}
          alt={`${title} cupcake`}
          width={500}
          height={500}
          className={`
            product-image
            w-11/12
            mx-auto
            opacity-80
            transition
            duration-300
            rounded-2xl
            group-hover:scale-110
          `}
        />

      </div>

      <div
        className={`
          texts
          mt-6
          w-11/12 sm:w-1/2
          mx-auto
          flex
          flex-col
          justify-center
          items-center
          transition
          duration-500
          opacity-100
        `}
        >

        <h3
          className={`
            title
            ${fontTitle.className}
            text-3xl
            text-pink-dark
            text-center
          `}
        >
          {title}
        </h3>

        {
          price 
          &&
          (
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
          )
        }

        {
          details
          &&
          (
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
          )
        }

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

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  details: PropTypes.string,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}