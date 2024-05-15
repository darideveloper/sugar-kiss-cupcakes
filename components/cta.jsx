import PropTypes from 'prop-types'
import Link from 'next/link'
import { fontTitle } from '@/lib/fonts'

export default function Cta({ content, href, type, iconPath, className = "", small = false }) {

  const textColor = type === 'primary' ? 'text-brown' : ' text-white'
  const textSize = small ? 'text-sm md:text-lg' : 'text-md md:text-lg'
  const bgColor = type === 'primary' ? 'bg-white' : ' bg-green'
  const fillColor = type === 'primary' ? 'fill-pink-dark' : 'fill-white'
  const sizeWrapper = small ? 'w-56 md:w-64' : 'w-64 md:w-72'
  const paddingY = small ? 'py-3 md:py-4' : 'py-4 md:py-6'

  return (
    <div
      className={`
        button-wrapper inline-block
        ${sizeWrapper}
      `}
    >
      <Link
        href={href}
        className={`
          relative
          ${fontTitle.className}
          group
          flex items-center justify-between 
          ${textSize} font-bold uppercase
          w-full ${paddingY}
          rounded-2xl shadow-lg ${textColor} ${bgColor}
          hover:shadow-xl hover:bg-opacity-90
          duration-300
          md:rounded-3xl
          hover:scale-110
          ${className}          
        `}>
        <div className={`
            text-wrapper w-full
          `}>
          <span
            className={`
              text-center w-full inline-block
              ${fontTitle.className}
            `}
          >{content}</span>
        </div>

        {
          iconPath
          &&
          <div className={`
              icon w-16 ml-5
              absolute right-0 top-1/2 transform -translate-y-1/2
            `}>
            <svg viewBox="0 0 24 24"
              className={`
              w-12 px-2 
              ${fillColor}
              duration-300
            `}>
              {iconPath}
            </svg>
          </div>
        }
      </Link>
    </div>
  )
}

Cta.propTypes = {
  content: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  iconPath: PropTypes.element,
  className: PropTypes.string,
  small: PropTypes.bool,
}