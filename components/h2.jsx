import PropTypes from 'prop-types'
import { fontTitle } from '@/lib/fonts'

export default function H2({children, className}) {
  return (
    <h2
      className={`
        text-4xl
        text-golden
        ${fontTitle.className}
        mt-28
        mb-10
        block
        font-bold
        text-center
        ${className}
      `}
    >
      {children}
    </h2>
  )
}


H2.propTypes = {
  children: PropTypes.node.isRequired,
  mt: PropTypes.bool,
}