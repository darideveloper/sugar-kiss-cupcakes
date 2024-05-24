import PropTypes from 'prop-types'
import { fontTitle } from '@/lib/fonts'

export default function Input({ label, value, setValue, placeholder, type, required = true, className = "" }) {
  return (

    <label
      className={`
        group
        ${className}
      `}
    >
      <span
        className={`
          ${fontTitle.className}
          block
          duration-200
          group-hover:translate-x-5
          text-lg
          m-2
        `}
      >
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className={`
          px-4
          py-2
          rounded-xl
          bg-pink-light
          text-white
          placeholder-white-50
          font-bold
          w-full
          duration-200
          border-pink-light
          focus:border-pink-dark
          border-4
        `}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
}