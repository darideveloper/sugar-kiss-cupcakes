import { createContext, useContext, useState, useEffect } from 'react'

export const OrderContext = createContext()

const intialStep = {
  "title": 'Select a product',
  "icon": '🧁',
  "type": "text"
}
const stepsNoCakes = [
  intialStep,
  {
    "title": "Select a flavor",
    "icon": "🧁",
    "type": "text"
  },
  {
    "title": "Select a frosting",
    "icon": "",
    "type": "image"
  },
  {
    "title": "Checkout",
    // money icon
    "icon": "💵",
    "type": "text"
  }
]
const steps = {
  "initial": [
    intialStep
  ],
  "cupcakes": stepsNoCakes,
  "parfait": stepsNoCakes,
  "tray-cakes": stepsNoCakes
}

export function OrderContextProvider(props) {
  const [orderProductCategory, setOrderProductCategory] = useState('initial')
  const [orderSteps, setOrderSteps] = useState(steps[orderProductCategory])
  const [orderCurrentStep, setOrderCurrentStep] = useState(0)
  const [orderProduct, setOrderProduct] = useState(null)
  const [orderFlavor, setOrderFlavor] = useState(null)
  const [orderFrosting, setOrderFrosting] = useState(null)

  // Update order steps based on category
  useEffect(() => {
    setOrderSteps(steps[orderProductCategory])
  }, [orderProductCategory])

  // Go to next step
  function goNextStep () {
    setOrderCurrentStep(orderCurrentStep + 1)
  }

  return (
    <OrderContext.Provider value={{ 
      goNextStep,
      orderSteps, setOrderSteps,
      orderCurrentStep, setOrderCurrentStep,
      orderProduct, setOrderProduct,
      orderProductCategory, setOrderProductCategory,
      orderFlavor, setOrderFlavor,
      orderFrosting, setOrderFrosting,
    }}>
      {props.children}
    </OrderContext.Provider>
  )
}