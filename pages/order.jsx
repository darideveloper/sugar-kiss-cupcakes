import OrderLayout from '@/layouts/order-layout'
import OrderMain from '@/sections/order_main'

export default function Order({}) {
  
  return (
    <OrderLayout 
      pageTitle="Order Now"
      mainText="Order now your delicious cupcakes!"
    >
      <OrderMain />
    </OrderLayout>
  )
}
