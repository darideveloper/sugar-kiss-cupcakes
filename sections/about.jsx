import Image from 'next/image'
import Title from '@/components/title'

export default function About() {
  return (

    <section 
      className={`
        about
        relative
        overflow-hidden
        container
        mx-auto
      `}
      id="about"
    >

      <Title>About Us</Title>

      <p
        className={`
          text-center
          w-11/12
          max-w-4xl
          mx-auto
        `}
      >
        We strive to make the BEST TASTING cupcake instead of focusing on cheap, sugary designs like many of the commercial store bakeries do. We DO NOT use fondant (many people are not a fan of it) and we prefer to showcase our designs with better flavors and beautiful piping with our fresh toppings. <br /><br /> We use flour, baking powder, sugar, milk, butter, eggs, natural extracts, natural flavors and natural colors in our recipes. (only Watkins natural food dyes are used!) We can also make any cupcake filling with your choice of jelly, mousse or cream <br /><br />

        <span
          className={`
            font-bold
          `}
        >
          Minimun order is 6 for each flavor
        </span>
      </p>
    </section>
  )
}