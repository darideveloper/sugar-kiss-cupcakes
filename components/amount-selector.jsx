import PropTypes from "prop-types"
import Btn from "@/components/btn"

export default function AmountSelector({ amount, setAmount, minAmount }) {

  return (
    <div
      className={`
        amount-selector
        flex
        items-center
        justify-center
        relative
        p-6
      `}
    >
      <Btn
        className={`
          min-btn
          absolute
          left-0
          top-1/2
          -translate-y-1/2
        `}
        onClick={() => {
          if (amount > minAmount) {
            setAmount(amount - 1)
          }
        }}
      >
        <svg
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          className={`
            fill-white
          `}
        >
          <path
            d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm4.253 7.75h-8.5c-.414 0-.75.336-.75.75s.336.75.75.75h8.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"
            fillRule="nonzero"
          />
        </svg>
      </Btn>

      <div
        className={`
          num-wrapper
          w-36
          bg-white
          rounded-xl
        `}
      >
        <input
          className={`
            text-center
            text-xl
            font-bold
            py-1
            w-full
          `}
          type="number"
          min={minAmount}
          value={amount}
          onChange={(e) => {           
            setAmount(e.target.value)
          }}
          onBlur={(e) => {
            if (e.target.value < minAmount) {
              setAmount(minAmount)
            }
          }}
        />

      </div>

      <Btn
        className={`
          plus-btn
          absolute
          right-0
          top-1/2
          -translate-y-1/2
        `}
        onClick={() => setAmount(amount + 1)}
      >
        <svg
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          className={`
            fill-white
          `}
        >
          <path
            d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
            fillRule="nonzero"
          />
        </svg>
      </Btn>
    </div>
  )
}


AmountSelector.propTypes = {
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
  minAmount: PropTypes.number.isRequired,
}