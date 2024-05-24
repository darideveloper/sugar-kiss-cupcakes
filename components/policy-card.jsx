import PropTypes from 'prop-types'
import H2 from '@/components/h2'

export default function PolicyCard({title, texts}) {
  return (
    <div 
      className={`
        policy-card
        container
        mx-auto
      `}
    >
      <H2>{title}</H2>

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