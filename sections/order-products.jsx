import ProductCard from '@/components/product-card'
import { useState, useEffect } from 'react'
import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"
import { productsDataCategory } from '@/lib/products'

export default function OrderProducts({}) {

  // filter ready to order products
  const productsData = productsDataCategory.filter(product => product.ready_to_order)

  // Save products to state
  const [currentProducts, setCurrentProducts] = useState(productsData)

  // Get product context
  const { 
    orderProduct,
    setOrderProduct,
    goNextStep,
    setOrderProductCategory
  } = useContext(OrderContext)


  // Manage product selection
  useEffect(() => {
    // render subproducts data when orderProduct is set
    if (orderProduct) {
      
      if (orderProduct.subproducts.length > 0) {
        // Show subproducts
        setCurrentProducts(orderProduct.subproducts)
      } else {
        // Go to next page
        goNextStep()
      }
    }


  }, [orderProduct])

  return (
    <>
      <div 
        className={`
          order-product
          grid
          grid-cols-1 xs:grid-cols-2
          max-w-3xl
          mx-auto
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
                // Save product
                setOrderProduct(product)
                if (product.category) {
                  // Save product category
                  setOrderProductCategory(product.category)
                }
              }}
              details={product.extra_details}
              
            />
          ))
        }
      </div>
    </>
  )
}