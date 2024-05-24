import Image from 'next/image'

export default function Map ({}) {

  const mapsLink = "https://www.google.com/maps/embed/v1/place?q=https://www.google.com/maps/place/681+Elite+Ct,+Ridgefield,+NJ+07657,+EE.+UU./@40.8265033,-74.0033488,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2f7bcd763bd39:0x1cc78f816f130c93!8m2!3d40.8265033!4d-74.0033488!16s%2Fg%2F11c4vvfs70?entry=ttu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"


  return (
    <div 
      className={`
        map
        w-full
        flex
        flex-col
        items-center xs:items-start
        justify-center
      `}
    >
      <p
        className={`
          text-lg
          text-gray-500
          mb-5
          w-full
          text-center
        `}
      >
        Pickup is in Ridgefield, NJ or we deliver locally
        <br />
        Delivery in Bergen county for $10
      </p>

      <iframe 
        frameborder="0" 
        src={`https://www.google.com/maps/embed/v1/place?q=${mapsLink}`}
        className={`
          opacity-60
          w-full xs:w-3/4
          h-72
          rounded-2xl
          mx-4 xs:mx-0
        `}
      />
  
      <a 
        href={mapsLink}
        className={`
          pickup-image-wrapper
          absolute
          w-11/12 xs:w-7/12 lg:w-5/12 xl:w-4/12
          -bottom-1/3 xs:-bottom-0 md:bottom-0 lg:-bottom-0
          sm:-mb-10 md:-mb-20 lg:-mb-16
          right-1/2 xs:right-0
          transform
          translate-x-1/2 xs:translate-x-0
        `}
        target="_blank"
      >
        <Image 
          src="/images/pickup.svg"
          width={500}
          height={400}
          alt="Pickup illustration"
          className={`
            pickup-image
            w-full
          `}
        />
      </a>
    </div>
  )
}