import { flavors } from '@/lib/flavors'
import FlavorCard from '@/components/flavor-card'

import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"

export default function OrderFlavors({}) {

  // Get product context
  const { 
    setOrderFlavor,
    OrderCurrentStep,
    setOrderCurrentStep,
    orderProductCategory
  } = useContext(OrderContext)

  return (
    <div 
        className={`
          order-flavors
          flex
          flex-wrap
          justify-center
        `}
      >
        {
          flavors[orderProductCategory].map((flavorData) => (
            <FlavorCard 
              text={flavorData.text}
              iconType={flavorData.iconType}
              icon={flavorData.icon}
              onClick={() => {
                setOrderFlavor(flavorData.text)
                setOrderCurrentStep(OrderCurrentStep + 1)
              }}
            />
            
          ))
        }
    </div>
  )
}
