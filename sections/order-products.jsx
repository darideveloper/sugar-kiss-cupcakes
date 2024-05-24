import ProductCard from '@/components/product-card'
import { useState, useEffect } from 'react'
import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"
import { productsDataCategory } from '@/lib/products'

export default function OrderProducts({}) {

  // Remove mini tray cakes and small cakes from products
  productsDataCategory.splice(2, 2)

  // Save products to state
  const [currentProducts, setCurrentProducts] = useState(productsDataCategory)

  // Get product context
  const { 
    orderProduct,
    setOrderProduct,
    setOrderCurrentStep,
    setOrderProductCategory
  } = useContext(OrderContext)


  // Manage product selection
  useEffect(() => {
    // render subproducts data when orderProduct is set
    const product = productsDataCategory.find(product => product.title == orderProduct)
    if (product && product.subproducts.length > 0) {
      setCurrentProducts(product.subproducts)
      return
    }

    // Save product and move to next step
    if (orderProduct) {
      setOrderProduct(orderProduct)
      setOrderCurrentStep(1)
    }

  }, [orderProduct])

  return (
    <>
      <div 
        className={`
          order-product
          debug
          grid
          grid-cols-1 xs:grid-cols-2
        `}
      >
        {
          currentProducts.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              price={product.price}
              image={`/images/products/${product.image}.jpeg`}
              onClick={() => {
                setOrderProduct(product.title)
                if (product.category) {
                  setOrderProductCategory(product.category)
                }
              }}
              
            />
          ))
        }
      </div>
    </>
  )
}