import OrderLayout from '@/layouts/order-layout'
import OrderProducts from '@/sections/order_products'
import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"

export default function OrderMain({}) {
  
  const { orderSteps, orderCurrentStep } = useContext(OrderContext)

  // Render section based on current step

  return (
    <div className="order">
      <OrderProducts />
    </div>
  )
}
