import { createContext, useContext, useState } from 'react'

export const OrderContext = createContext()

export function OrderContextProvider(props) {
  const [orderSteps, setOrderSteps] = useState([
    {
      "title": 'Select a product',
      "icon": '🧁'
    }
  ])
  const [orderCurrentStep, setOrderCurrentStep] = useState(0)


  return (
    <OrderContext.Provider value={{ 
      orderSteps,
      setOrderSteps,
      orderCurrentStep,
      setOrderCurrentStep 
    }}>
      {props.children}
    </OrderContext.Provider>
  )
}