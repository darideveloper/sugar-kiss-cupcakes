import Image from 'next/image'
import Cta from '@/components/cta'
import MainText from '@/components/main-text';

export default function Hero({}) {
  
  const arrowPath = <path d="m2.005 12.002c0-5.517 4.48-9.997 9.997-9.997 5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998zm6.21 1.524s1.505 1.501 3.259 3.254c.147.147.338.22.53.22s.384-.073.531-.22c1.753-1.752 3.258-3.254 3.258-3.254.145-.145.217-.335.216-.526 0-.192-.074-.384-.22-.53-.293-.293-.766-.295-1.057-.004l-1.978 1.977v-6.693c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6.693l-1.978-1.978c-.289-.289-.762-.287-1.055.006-.146.147-.22.339-.221.53s.071.38.215.525z" fillRule="nonzero"/>
  
  return (
    <section 
      className={`
        hero
        container
        mx-auto
        px-4
      `}
      id="hero"
    >

      <div 
        className={`
          content
          flex
          items-center
          justify-evenly
          w-full
          flex-col md:flex-row
          max-w-5xl
          mx-auto
        `}
      >

        <Image 
          src="/images/logo.webp"
          alt="Nadine in cartoon version"
          width={500}
          height={500}
          className={`
            w-10/12 md:w-1/3 lg:auto
            mx-auto md:-ml-0
          `}
        />

        <div 
          className={`
            text
            text-center
          `}
        >

          <MainText>
            Welcome
          </MainText>

          <Image 
            src="/images/decorator-1.webp"
            alt="Decorative image"
            width={200}
            height={200}
            className={`
                mx-auto
                w-60
                opacity-50
            `}
          />
          <p
            className={`
              text-xl
              mt-4
              text-black
            `}
          >
            Custom, gourmet cupcakes, dessert, cups, and cakes. All scratch, made using high-quality all natural ingredients.
          </p>

          <Cta
            content="Order now"
            href="/order"
            iconPath={arrowPath}
            type='primary'
            small={true}
            className={`
              mt-8
            `}
          />

        </div>
      </div>
    </section>
  );
}