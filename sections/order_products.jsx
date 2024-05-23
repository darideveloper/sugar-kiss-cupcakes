import ProductCard from '@/components/product-card'
import { useState, useEffect } from 'react'
import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"


export default function OrderProducts({}) {

  // Products and subproduects
  const productsData = [
    {
      "title": "Cupcakes",
      "price": "$2.50 - $3.50",
      "image": "Basic gourmet flavors",
      "category": "cupcakes",
      "subproducts": [
        {
          "title": "Basic gourmet flavors",
          "price": "$2.50",
          "details": "Chocolate/vanilla only",
          "image": "Basic gourmet flavors",
        },
        {
          "title": "Filled gourmet flavors",
          "price": "$2.75",
          "details": "Filling inside cupcake with custard, jelly, cream or mousse",
          "image": "Filled gourmet flavors",
        },
        {
          "title": "Decorated gourmet flavors",
          "price": "$3.00",
          "details": "Sugar flowers, embellishments, characters",
          "image": "Decorated gourmet flavors",
        },
        {
          "title": "Boozy flavors",
          "price": "$3 - $3.50",
          "details": "Infused with any liquor or wine & can be filled",
          "image": "Boozy flavors",
        }
      ]
    },
    {
      "title": "Dessert parfait cups",
      "price": "$3 - $3.50",
      "image": "Dessert parfait cups",
      "category": "parfait",
      "subproducts": [],
    },
  ]

  const [currentProducts, setCurrentProducts] = useState(productsData)

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
    const product = productsData.find(product => product.title == orderProduct)
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
    <div 
      className={`
        order-product
        debug
        max-w-3xl
        mx-auto
        grid
        grid-cols-2
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
  )
}