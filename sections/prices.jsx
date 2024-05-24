import Title from '@/components/title'
import ProductCard from '@/components/product-card'
import Image from 'next/image'
import { whatsappLinkBase } from '@/lib/contact'
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

      <Title>Prices</Title>

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
          productsDataAll.map((priceData) => (
            <ProductCard 
              key={priceData.title}
              title={priceData.title}
              price={priceData.price}
              details={priceData.details}
              image={`/images/products/${priceData.title}.jpeg`}
              key={priceData.title}
              onClick={() => {
                // Open whatsapp in a new tab
                window.open(
                  `${whatsappLinkBase} I am interested in ${priceData.title} cupcakes.`,
                  '_blank'
                )
              }}
            />
          ))
        }
      </div>
    </section>
  );
}