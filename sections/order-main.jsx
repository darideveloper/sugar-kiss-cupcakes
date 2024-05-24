import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"
import { flavors } from "@/lib/flavors"
import { frostings } from "@/lib/frostings"
import OrderProducts from '@/sections/order-products'
import OrderFlavors from "@/sections/order-flavors"
import OrderCheckout from "@/sections/order-checkout"

export default function OrderMain({}) {
  
  const { 
    orderCurrentStep,
    setOrderFlavor,
    setOrderFrosting,
    orderProductCategory,
  } = useContext(OrderContext)

  // Render section based on current step
  let component = null
  if (orderCurrentStep == 0) {
    component = <OrderProducts />
  } else if (orderCurrentStep == 1) {
    component = <OrderFlavors
                  setValue={setOrderFlavor}
                  flavors={flavors[orderProductCategory]}          
                />
  } else if (orderCurrentStep == 2) {
    component = <OrderFlavors 
                  setValue={setOrderFrosting}
                  flavors={frostings[orderProductCategory]}
                />
  } else if (orderCurrentStep == 3) {
    component = <OrderCheckout />
  }

  // component = <OrderFlavors />

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
