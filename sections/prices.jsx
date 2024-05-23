import Title from '@/components/title'
import ProductCard from '@/components/product-card'
import Image from 'next/image'
import { whatsappLinkBase } from '@/lib/contact'


export default function Prices({}) {

  const pricesData = [
    {
      "title": "Basic gourmet flavors",
      "price": "$2.50",
      "details": "Chocolate/vanilla only",
    },
    {
      "title": "Filled gourmet flavors",
      "price": "$2.75",
      "details": "Filling inside cupcake with custard, jelly, cream or mousse",
    },
    {
      "title": "Decorated gourmet flavors",
      "price": "$3.00",
      "details": "Sugar flowers, embellishments, characters",
    },
    {
      "title": "Boozy flavors",
      "price": "$3 - $3.50",
      "details": "Infused with any liquor or wine & can be filled",
    },
    {
      "title": "Dessert parfait cups",
      "price": "$3 - $3.50",
      "details": "Any flavor",
    },
    {
      "title": "Mini tray cakes",
      "price": "$3.50",
      "details": "Any flavor, great for two people",
    },
    {
      "title": "Small cakes",
      "price": "$30 - $65",
      "details": 'Any flavor, two layer with a filling in 6", 8", 10"',
    },
  ]

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
          pricesData.map((priceData) => (
            <ProductCard 
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