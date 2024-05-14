import PropTypes from 'prop-types'
import { fontTitle } from '@/lib/fonts'

export default function Title({children}) {
  return (
    <h2
      className={`
        text-4xl
        text-pink-dark
        ${fontTitle.className}
        mt-28
        mb-10
        block
        font-bold
        text-center
      `}
    >
      {children}
    </h2>
  )
}


Title.propTypes = {
  children: PropTypes.node.isRequired,
}