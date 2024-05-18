import PropTypes from 'prop-types'
import Title from '@/components/title'
import Image from 'next/image'

export default function PolicyCard({title, texts}) {
  return (
    <div 
      className={`
        policy-card
        container
        mx-auto
      `}
    >
      <Title>{title}</Title>

      <div 
        className={`
          content
          max-w-2xl
          mx-auto
          px-4
        `}
      >  

        <div 
          className={`
            texts
            w-11/12ª
          `}
        >
          <p
            className={`
              text
              text-center
              my-2
            `}
          >
            {
              texts.map(text => (
                <span 
                  key={text}
                  className={`

                  `}
                >
                  {text}
                </span>
              ))
            }
          </p>
        </div>
      </div>

    </div>
  )
}

PolicyCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}