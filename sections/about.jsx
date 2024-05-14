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
        We strive to make the BEST TASTING cupcake instead of focusing on cheap, sugary designs like many of the commercial store bakeries do. We DO NOT use fondant (many people are not a fan of it) and we prefer to showcase our designs with better flavors and beautiful piping with our fresh toppings. <br /> <br /> Only the finest, most natural ingredients are used to make our Creations. We're a peanut free HOME kitchen, however, we are NOT Tree nut, gluten free or dairy free operation. <br /> <br /> We use flour, baking powder, sugar, milk, butter, eggs, natural extracts, natural flavors and natural colors in our recipes. (only Watkins natural food dyes are used!) We can also make any cupcake filling with your choice of jelly, mousse or cream 
        <br /><br />
        <span
          className={`
            font-bold
            text-pink-dark
            text-lg
          `}
        >
          We can make liquor or wine infused cupcakes!
        </span>
      </p>

      <Image 
        src="/images/cupcakes-stickers/9.png"
        width={300}
        height={300}
        alt="Cupcake background image"
        className={`
          bg-image-right
          opacity-10
          absolute
          bottom-0
          right-0
          blur-sm lg:blur-none
        `}
      />

      <Image 
        src="/images/cupcakes-stickers/9.png"
        width={300}
        height={300}
        alt="Cupcake background image"
        className={`
          bg-image-left
          opacity-10
          absolute
          bottom-0
          left-0
          mirror-x
          hidden lg:block
        `}
      />
    </section>
  )
}