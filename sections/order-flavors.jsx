import PropTypes from 'prop-types'
import FlavorCard from '@/components/flavor-card'
import { flavors } from '@/lib/flavors'
import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"

export default function OrderFlavors({setValue, flavors}) {

  // Get product context
  const { goNextStep } = useContext(OrderContext)

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
          flavors.map((flavor) => (
            <FlavorCard 
              key={flavor.text}
              text={flavor.text}
              iconType={flavor.iconType}
              icon={flavor.icon}
              onClick={() => {
                // Save flavor and go next step
                setValue(flavor)
                goNextStep()
              }}
            />
            
          ))
        }
    </div>
  )
}
