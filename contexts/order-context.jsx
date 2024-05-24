import { createContext, useContext, useState, useEffect } from 'react'

export const OrderContext = createContext()

const intialStep = {
  "title": 'Select a product',
  "icon": '🧁'
}
const stepsCupcakesParfait = [
  intialStep,
  {
    "title": "Select a flavor",
    "icon": "🍫"
  },
  {
    "title": "Select a frosting",
    "icon": "🍦"
  },
  {
    "title": "Order",
    // money icon
    "icon": "💵"
  }
]
const steps = {
  "initial": [
    intialStep
  ],
  "cupcakes": stepsCupcakesParfait,
  "parfait": stepsCupcakesParfait,
}

export function OrderContextProvider(props) {
  const [orderProductCategory, setOrderProductCategory] = useState('initial')
  const [orderSteps, setOrderSteps] = useState(steps[orderProductCategory])
  const [orderCurrentStep, setOrderCurrentStep] = useState(0)
  const [orderProduct, setOrderProduct] = useState(null)
  const [orderFlavor, setOrderFlavor] = useState(null)
  const [orderFrosting, setOrderFrosting] = useState(null)

  // DEBUG: add default values
  // useEffect(() => {
  //   setOrderProductCategory('cupcakes')
  //   setOrderProduct('Basic gourmet flavors')
  //   setOrderFlavor('Chocolate/vanilla only')
  // }, [])

  // Update order steps based on category
  useEffect(() => {
    setOrderSteps(steps[orderProductCategory])
  }, [orderProductCategory])

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