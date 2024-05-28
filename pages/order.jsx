import OrderLayout from '@/layouts/order-layout'
import OrderMain from '@/sections/order-main'

export default function Order({}) {
  
  return (
    <OrderLayout 
      pageTitle="Order Now"
      mainText="Order now!"
      subText="(gluten-free and dairy free options are available, inquire within)"
    >
      <OrderMain />
    </OrderLayout>
  )
}
