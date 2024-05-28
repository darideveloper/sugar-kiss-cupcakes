import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"
import { fontTitle } from "@/lib/fonts"
import { useState, useEffect } from "react"

import H2 from '@/components/h2'
import FlavorCard from "@/components/flavor-card"
import Image from "next/image"
import AmountSelector from "@/components/amount-selector"
import Input from "@/components/input"
import Map from "@/components/map"
import InputRadio from "@/components/input-radio"
import Loading from "@/components/loading"

export default function OrderCheckout({ }) {

  function getTotal(amount, price) {

    let priceClean = price.replace("$", "")
    let priceFloat = parseFloat(priceClean)

    return (amount * priceFloat).toFixed(2)
  }

  const { orderProduct, orderFlavor, orderFrosting } = useContext(OrderContext)

  // Checkout consts
  const minAmount = 6

  // Order state
  const [amount, setAmount] = useState(minAmount)
  const [total, setTotal] = useState(getTotal(amount, orderProduct.price))
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [orderType, setOrderType] = useState("pickup")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [address, setAddress] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Error state
  const [firstNameError, setFirstNameError] = useState("")
  const [lastNameError, setLastNameError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [dateError, setDateError] = useState("")
  const [timeError, setTimeError] = useState("")
  const [addressError, setAddressError] = useState("")
  const [postalCodeError, setPostalCodeError] = useState("")

  // Redirect URL
  const redirect = `http://${window.location.host}/thanks`

  // Update total when amount changes
  useEffect(() => {
    setTotal(getTotal(amount, orderProduct.price))
  }, [amount])

  function handleSubmit(e) {

    e.preventDefault()

    // Validate all fields
    const fieldsErrorsSetters = [
      [firstName, setFirstNameError],
      [lastName, setLastNameError],
      [email, setEmailError],
      [phone, setPhoneError],
      [date, setDateError],
      [time, setTimeError],
    ]

    // Delivery fields
    if (orderType === "delivery") {
      fieldsErrorsSetters.push([address, setAddressError])
      fieldsErrorsSetters.push([postalCode, setPostalCodeError])
    }

    let missingFields = false
    for (const [field, setError] of fieldsErrorsSetters) {
      if (field === "") {
        missingFields = true
        setError("This field is required")
      } else {
        setError("")
      }
    }

    // Show alert if missing fields
    if (missingFields) {
      alert("Please fill all required fields")
    } else {
      // Submt form
      setIsLoading(true)
      console.log("Order Submitted")
      e.target.submit()
    }
  }

  return (
    <div
      className="checkout"
    >

      <Loading isLoading={isLoading} />

      <H2
        className={`
          mt-0
          pt-6
        `}
      >
        Order Summary
      </H2>

      <section
        className={`
          summary
          grid
          grid-cols-1 md:grid-cols-2
          max-w-3xl
          mx-auto
        `}>

        <div
          className={`
            product
          `}
        >
          <h3
            className={`
              ${fontTitle.className}
              text-3xl
              text-center
              text-pink-dark
              mb-4
            `}
          >
            {orderProduct.title}
          </h3>

          <Image
            src={`/images/products/${orderProduct.image}.jpeg`}
            width={300}
            height={300}
            alt={orderProduct.title}
            className={`
              mx-auto
              rounded-2xl
            `}
          />

          <p
            className={`
              text-center
              text-xl
              text-black
              mt-4
              font-bold
              ${fontTitle.className}
            `}
          >
            {orderProduct.price} each
          </p>

        </div>

        <div
          className={`
            details
            flex
            flex-col
            items-center
            justify-center
          `}
        >
          <div 
            className={`
              total
              ${fontTitle.className}
              text-2xl
              font-bold
              -ml-3
            `}
          >
            $ {total}
          </div>

          <AmountSelector
            amount={amount}
            setAmount={setAmount}
            minAmount={minAmount}
          />

          <div
            className={`
              flavors
              flex
              items-center
              justify-center
            `}
          >
            <FlavorCard
              text={orderFlavor.text}
              iconType={orderFlavor.iconType}
              icon={orderFlavor.icon}
              heading="FLAVOR:"
            />
            <FlavorCard
              text={orderFrosting.text}
              iconType={orderFrosting.iconType}
              icon={orderFrosting.icon}
              imageFolder="frostings"
              heading="FROSTING:"
            />
          </div>
        </div>
      </section>

      <H2>
        Contact info
      </H2>

      <section
        className={`
          contact
          w-11/12
          mx-auto
          grid
          grid-cols-1 md:grid-cols-2
          gap-4
          max-w-3xl
        `}
      >
        <Input
          label="First Name"
          value={firstName}
          setValue={setFirstName}
          placeholder="John"
          type="text"
          required={true}
          error={firstNameError}
        />

        <Input
          label="Last Name"
          value={lastName}
          setValue={setLastName}
          placeholder="Doe"
          type="text"
          required={true}
          error={lastNameError}
        />

        <Input
          label="Email"
          value={email}
          setValue={setEmail}
          placeholder="example@gmail.com"
          type="email"
          required={true}
          error={emailError}
        />

        <Input
          label="Phone"
          value={phone}
          setValue={setPhone}
          placeholder="123-456-7890"
          type="tel"
          required={true}
          error={phoneError}
        />
      </section>

      <H2>
        Delivery Or Pickup
      </H2>

      <section
        className={`
          order-type-date
          max-w-3xl
          mx-auto
          flex
          flex-col md:flex-row
          justify-evenly
          items-center
        `}
      >

        <div
          className={`
            left
            mt-5
            w-11/12 md:w-1/6
          `}
        >
          <InputRadio
            name="order-type"
            value="pickup"
            checked={orderType === "pickup"}
            setValue={() => setOrderType("pickup")}
          />

          <InputRadio
            name="order-type"
            value="delivery"
            checked={orderType === "delivery"}
            setValue={() => setOrderType("delivery")}
          />
        </div>

        <div
          className={`
            right
            flex
            flex-col md:flex-row
            justify-evenly
            items-center
            gap-4
            w-11/12 md:w-2/3
          `}
        >

          <Input
            label="Date"
            value={date}
            setValue={setDate}
            type="date"
            required={true}
            className={`
              w-full md:w-2/3
            `}
            error={dateError}
          />

          <Input
            label="Time"
            value={time}
            setValue={setTime}
            type="time"
            required={true}
            className={`
              w-full md:w-1/3
            `}
            error={timeError}
          />

        </div>

      </section>

      <H2>
        {orderType === "pickup" ? "Pickup Location" : "Delivery Location"}
      </H2>

      {
        orderType === "pickup"
          ?
          <div
            className={`
                map-wrapper
                relative
                container
                mx-auto
              `}
          >
            <Map />
          </div>
          :
          <div
            className={`
              address
              flex
              flex-col md:flex-row
              justify-center
              items-center
              w-full
              mx-auto
              gap-4
              max-w-2xl
            `}
          >
            <Input
              label="Address"
              value={address}
              setValue={setAddress}
              type="text"
              required={true}
              placeholder="123 Main St"
              className={`
                w-11/12 md:w-2/3
              `}
              error={addressError}
            />

            <Input
              label="Postal Code"
              value={postalCode}
              setValue={setPostalCode}
              type="text"
              required={true}
              placeholder="12345"
              className={`
                w-11/12 md:w-1/3
              `}
              error={postalCodeError}
            />
          </div>
      }

    <form
      className={`
        flex
        flex-col
        items-center
        justify-center
      `}
      onSubmit={handleSubmit}
      action={process.env.NEXT_PUBLIC_CONTACT_FORM_URL}
      method='post'
    >
      <input type="hidden" name="product" value={orderProduct.title} />
      <input type="hidden" name="price" value={orderProduct.price.replace("$", "")} />
      <input type="hidden" name="amount" value={amount} />
      <input type="hidden" name="total" value={total} />
      <input type="hidden" name="flavor" value={orderFlavor.text} />
      <input type="hidden" name="frosting" value={orderFrosting.text} />
      <input type="hidden" name="first name" value={firstName} />
      <input type="hidden" name="last name" value={lastName} />
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="phone" value={phone} />
      <input type="hidden" name="order type" value={orderType} />
      <input type="hidden" name="date" value={date} />
      <input type="hidden" name="time" value={time} />
      <input type="hidden" name="address" value={address} />
      <input type="hidden" name="postal code" value={postalCode} />
      <input type="hidden" name="user" value={process.env.NEXT_PUBLIC_CONTACT_FORM_USER} />
      <input type="hidden" name="api_key" value={process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY} />
      <input type="hidden" name="redirect" value={redirect} />
      <input type="hidden" name="subject" value={`New Order in Sugar Kiss Cupcakes from ${email}`} />
      
      <input 
        type="submit"
        value="Order Now"
        className={`
          ${fontTitle.className}
          text-3xl
          mx-auto
          rounded-2xl
          px-12
          py-2
          my-16
          bg-pink-dark
          text-white
          font-bold
          cursor-pointer
          duration-500
          hover:scale-105
          hover:opacity-80
        `}
      />

    </form>


    </div>
  )
}