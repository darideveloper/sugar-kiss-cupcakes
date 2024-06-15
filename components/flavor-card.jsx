import PropTypes from 'prop-types'
import Image from 'next/image'

export default function FlavorCard ({text, iconType, icon, onClick, imageFolder = "flavors", heading = ""}) {

  return (
    <div 
      className={`
        flavor
        w-28
        flex
        flex-col
        items-center
        justify-center
        m-4
        group
        cursor-pointer
      `}
      key={text}
      onClick={onClick}
      data-aos="zoom-out"
      data-aos-delay="0"
      data-aos-duration="1000"
    >
      <div 
        className={`
          icon
          opacity-50
          duration-500
          group-hover:-translate-y-2
          group-hover:scale-110
          group-hover:opacity-70
        `}
      >
        {
          iconType == "text"
          ?
          <p
            className={`
              text-6xl
            `}
          >
            {icon}
          </p>
          :
          <Image 
            src={`/images/${imageFolder}/${text}.webp`}
            width={60}
            height={60}
            alt={`${text} flavor`}
          />
        }
      </div>

      <p
        className={`
          w-full
          text-center
          text-black
          text-sm
          font-bold
          bg-white
          p-2
          rounded-lg
          -mt-8
          pt-12
          duration-500
          group-hover:text-pink-dark
        `}
      >
        {heading} {text}
      </p>
    </div>
  )
}

FlavorCard.propTypes = {
  text: PropTypes.string,
  iconType: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  imageFolder: PropTypes.string,
  heading: PropTypes.string,
}