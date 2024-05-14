import Title from '@/components/title'
import PriceCard from '@/components/priceCard'

export default function Hero({}) {

  const pricesData = [
    {
      "title": "Basic cupcakes",
      "price": "$2.25",
      "details": "Chocolate/vanilla only",
      "image": "price-1.png"
    },
    {
      "title": "Gourmet flavored cupcakes",
      "price": "$2.50",
      "details": "Flavor is baked into cupcake, but no filling inside",
      "image": "price-1.png"
    },
    {
      "title": "Gourmet flavored & filled cupcakes",
      "price": "$2.75",
      "details": "Filling inside cupcake with custard, jelly, cream or mousse",
      "image": "price-1.png"
    },
    {
      "title": "Design/Decoration cupcakes",
      "price": "$3.00",
      "details": "Sugar flowers, embellishments, characters",
      "image": "price-1.png"
    },
    {
      "title": "Boozy cupcakes",
      "price": "$3.00",
      "details": "Infused with any liquor or wine & can be filled",
      "image": "price-1.png"
    },
    {
      "title": "Mini Fruit Pies",
      "price": "$2.50",
      "details": "Any flavor",
      "image": "price-1.png"
    },
    {
      "title": "Mini tray cakes",
      "price": "$3.50",
      "details": "Any flavor, great for two people",
      "image": "price-1.png"
    },
    {
      "title": "Small Cakes",
      "price": "$30 - $65",
      "details": 'Any flavor, two layer with a filling in 6", 8", 10"',
      "image": "price-1.png"
    },
  ]

  return (
    <section
      className={`
        prices
        container
        mx-auto
      `}>

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