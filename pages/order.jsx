import OrderLayout from '@/layouts/order-layout'
import OrderMain from '@/sections/order-main'

export default function Order({}) {
  
  return (
    <OrderLayout 
      pageTitle="Order Now"
      mainText="Order now!"
      subText="(gluten-free and/or dairy free options are available in certain flavors, inquire within)"
    >
      <OrderMain />
    </OrderLayout>
  )
}
