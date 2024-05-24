import PropTypes from 'prop-types'

export default function Btn ({children, onClick, className}) {
  return (
    <button
      className={`
        w-10
        ${className}
        bg-pink-light
        rounded-full
        p-1
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}