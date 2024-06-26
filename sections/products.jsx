import H2 from '@/components/h2'
import ProductCard from '@/components/product-card'
import Image from 'next/image'
import { productsDataAll } from '@/lib/products'


export default function Prices({}) {

  return (
    <section
      className={`
        prices
        container
        mx-auto
        relative
      `}
      id="prices"
    >

      <Image 
        src="/images/decorator-2.webp"
        alt="decoration image"
        width={350}
        height={30}
        className={`
          dectorator-top-right
          absolute
          top-0
          left-0
          opacity-0 lg:opacity-10
          -z-10
        `}
      />  

      <Image 
        src="/images/decorator-3.webp"
        alt="decoration image"
        width={350}
        height={30}
        className={`
          dectorator-top-right
          absolute
          bottom-0
          right-0
          -z-10
          opacity-0 lg:opacity-10
        `}
      />  

      <H2>Prices</H2>

      <div
        className={`
          prices-cards
          grid
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          max-w-7xl
          mx-auto
        `}
      >

        {
          productsDataAll.map((productData) => (
            <ProductCard 
              key={productData.title}
              title={productData.title}
              price={productData.price}
              details={productData.details}
              image={`/images/products/${productData.title}.jpeg`}
              onClick={() => {
                // Open whatsapp in a new tab
                if (productData.ready_to_order) {
                  window.open('/order', '_blank')
                } else {
                  window.open('/comming-soon', '_blank')
                }
              }}
            />
          ))
        }
      </div>
    </section>
  );
}