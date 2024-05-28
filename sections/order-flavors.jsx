import PropTypes from 'prop-types'
import FlavorCard from '@/components/flavor-card'
import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"

export default function OrderFlavors({setValue, flavors, imageFolder}) {

  // Get product context
  const { goNextStep } = useContext(OrderContext)

  return (
    <div 
        className={`
          order-flavors
          flex
          flex-wrap
          justify-center
          max-w-3xl
          mx-auto
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
              imageFolder={imageFolder}
            />
            
          ))
        }
    </div>
  )
}

OrderFlavors.propTypes = {
  setValue: PropTypes.func.isRequired,
  flavors: PropTypes.array.isRequired,
  imageFolder: PropTypes.string.isRequired,
}