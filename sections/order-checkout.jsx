import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"
import { fontTitle } from "@/lib/fonts"
import { useState } from "react"
import Title from "@/components/Title"
import FlavorCard from "@/components/flavor-card"
import Image from "next/image"
import AmountSelector from "@/components/amount-selector"

export default function OrderCheckout ({}) {

  const { orderProduct, orderFlavor, orderFrosting } = useContext(OrderContext)

  // Checkout consts
  const minAmount = 6

  // Checkout local states
  const [amount, setAmount] = useState(minAmount)

  return (
    <div 
      className="checkout"
    >
      <Title
        className={`
          -mt-0
        `}
      >
        Order Summary
      </Title>

      <section 
        className={`
          summary
          grid
          grid-cols-1 md:grid-cols-2
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
              text={`FLAVOR: ${orderFlavor.text}`}
              iconType={orderFlavor.iconType}
              icon={orderFlavor.icon}
            />
            <FlavorCard 
              text={`FROSTING: ${orderFrosting.text}`}
              iconType={orderFrosting.iconType}
              icon={orderFrosting.icon}
            />
          </div>
        </div>

        


      </section>
      <button
        onClick={() => {
          goNextStep()
        }}
      >
        Next
      </button>
    </div>
  )
}