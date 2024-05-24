export default function InputRadio ({name, value, setValue, checked}) {
  return (
    <>
      <label 
        htmlFor={`${name} ${value}`} 
        className={`
          flex items-center justify-start
          gap-2
          my-4
          ml-4
          hover:ml-6
          cursor-pointer
          duration-200

        `}
      >
        <span
          className={`
            circle
            w-6 h-6
            border-2 border-pink-light
            flex items-center justify-center
            rounded-full
          `}
        >
          {
            checked &&
            <span
              className={`
                inner-circle
                w-4 h-4
                bg-pink-light
                rounded-full
              `}
            ></span>
          }
        </span>
        <p
          className={`
            capitalize
          `}
        >
          {value}
        </p>        
      </label>
      <input 
        type="radio" 
        name={name} 
        id={`${name} ${value}`} 
        value={value}
        onChange={setValue}
        checked={checked}
        className="hidden"
      />
    </>
  )
}