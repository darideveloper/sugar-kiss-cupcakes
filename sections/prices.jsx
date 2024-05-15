import Title from '@/components/title'
import PriceCard from '@/components/price-card'
import Image from 'next/image'

export default function Prices({}) {

  const pricesData = [
    {
      "title": "Basic gourmet flavor",
      "price": "$2.50",
      "details": "Chocolate/vanilla only",
      "image": "prices/1.jpeg"
    },
    {
      "title": "Filled gourmet flavor",
      "price": "$2.75",
      "details": "Filling inside cupcake with custard, jelly, cream or mousse",
      "image": "prices/2.jpeg"
    },
    {
      "title": "Decorated gourmet flavor",
      "price": "$3.00",
      "details": "Sugar flowers, embellishments, characters",
      "image": "prices/3.jpeg"
    },
    {
      "title": "Boozy cupcakes",
      "price": "$3.00",
      "details": "Infused with any liquor or wine & can be filled",
      "image": "prices/4.jpeg"
    },
    {
      "title": "Dessert parfait cups",
      "price": "$3- $3.50",
      "details": "Any flavor",
      "image": "prices/5.jpeg"
    },
    {
      "title": "Mini tray cakes",
      "price": "$3.50",
      "details": "Any flavor, great for two people",
      "image": "prices/6.jpeg"
    },
    {
      "title": "Small Cakes",
      "price": "$30 - $65",
      "details": 'Any flavor, two layer with a filling in 6", 8", 10"',
      "image": "prices/7.jpeg"
    },
  ]

  return (
    <section
      className={`
        prices
        container
        mx-auto
        relative
      `}>

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
      >  
      </Image>

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
      >  
      </Image>

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
            <PriceCard 
              title={priceData.title}
              price={priceData.price}
              details={priceData.details}
              image={priceData.image}
              key={priceData.title}
            />
          ))
        }
      </div>

      <p
        className={`
          warnning
          container
          mx-auto
          text-center
        `}>
        Minimum order for cupcakes & mini pies are 4 per flavor
        <br />
        Discounts offered for large orders over 24 cupcakes
        <br />
        All orders could be made with whipped cream,
      </p>


    </section>
  );
}