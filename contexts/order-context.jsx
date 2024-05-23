import { createContext, useContext, useState, useEffect } from 'react'

export const OrderContext = createContext()

const intialStep = {
  "title": 'Select a product',
  "icon": '🧁'
}
const steps = {
  "initial": [
    intialStep,
  ],
  "cupcakes": [
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
  ],
  "parfait": [
    intialStep,
    {
      "title": "Select a flavor",
      "icon": "🍫"
    },
    {
      "title": "Order",
      // money icon
      "icon": "💵"
    }
  ]
}

export function OrderContextProvider(props) {
  const [orderProductCategory, setOrderProductCategory] = useState('initial')
  const [orderSteps, setOrderSteps] = useState(steps[orderProductCategory])
  const [orderCurrentStep, setOrderCurrentStep] = useState(0)
  const [orderProduct, setOrderProduct] = useState(null)

  // Update order steps based on category
  useEffect(() => {
    setOrderSteps(steps[orderProductCategory])
  }, [orderProductCategory])

  return (
    <OrderContext.Provider value={{ 
      orderSteps, setOrderSteps,
      orderCurrentStep, setOrderCurrentStep,
      orderProduct, setOrderProduct,
      orderProductCategory, setOrderProductCategory
    }}>
      {props.children}
    </OrderContext.Provider>
  )
}