import Image from 'next/image'
import { fontAlternative, fontTitle } from '@/lib/fonts'

export default function Hero({}) {
  return (
    <div 
      className={`
        hero
        w-full
        flex
        items-center
        justify-evenly
        container
        mx-auto
      `}>

      <Image 
        src="/images/hero.webp"
        alt="Nadine in cartoon version"
        width={500}
        height={500}
      />

      <div 
        className={`
          text
          text-center
        `}
      >

        <h1
          className={`
            ${fontAlternative.className}
            text-6xl
            text-pink-dark
          `}
        >
          Sugar Kiss your day!
        </h1>
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
            ${fontTitle.className}
            text-xl
            mt-4
            rgba(text-red-light
          `}
        >
          Custom cupcakes made from scratch<br />using hight quality ingredients
        </p>

      </div>
    </div>
  );
}