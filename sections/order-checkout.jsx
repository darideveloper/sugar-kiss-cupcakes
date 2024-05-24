import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"

export default function OrderCheckout ({}) {

  const { 
    orderCurrentStep,
    setOrderCurrentStep,
  } = useContext(OrderContext)

  return (
    <div 
      className="frosting"
    >
      <button
        onClick={() => {
          // Go to next step
          setOrderCurrentStep(orderCurrentStep + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}