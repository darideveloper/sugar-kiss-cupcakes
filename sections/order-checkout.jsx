import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"

export default function OrderCheckout ({}) {

  const { goNextStep } = useContext(OrderContext)

  return (
    <div 
      className="frosting"
    >
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