import Title from '@/components/title'
import Image from 'next/image'
import PropTypes from 'prop-types'

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
          flex
          flex-col md:flex-row-reverse
          items-center
          justify-center
          max-w-4xl
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
          {
            texts.map(text => (
              <p 
                key={text}
                className={`
                  text
                  text-sm
                  text-center md:text-right
                  my-2
                `}
              >
                {text}
              </p>
            ))
          }
        </div>

        <Image
          src={`/images/policy/${title} illustration.svg`}
          alt={`${title} image`}
          width={400}
          height={400}
          className={`
            w-full
            max-w-md
          `}
        />
      </div>

    </div>
  )
}

PolicyCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}