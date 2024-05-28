import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Loading({ isLoading }) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsVisible(true)
      }, 50)
    }
  }, [isLoading])

  console.log({isLoading, isVisible})

  return (
    <div
      className={`
        loading-wrapper
        fixed
        top-0
        left-0
        w-screen
        h-screen
        bg-golden
        duration-300
        z-20
        ${isLoading ? 'visible' : 'hidden'}
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        flex
        justify-center
        items-center
      `}>

      <Image 
        src="/images/spinner.gif"
        alt="Loading"
        width={150}
        height={150}
      />
    </div>
  )
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired
}