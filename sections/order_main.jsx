import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"
import OrderProducts from '@/sections/order_products'
import OrderFlavors from "@/sections/order_flavors"

export default function OrderMain({}) {
  
  const { orderCurrentStep } = useContext(OrderContext)

  // Render section based on current step
  let component = null
  if (orderCurrentStep == 0) {
    component = <OrderProducts />
  } else if (orderCurrentStep == 1) {
    component = <OrderFlavors />
  }

  return (
    <div 
      className={`
        order
        max-w-3xl
        mx-auto
      `}>
      {component}
    </div>
  )
}
