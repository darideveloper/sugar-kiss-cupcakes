import Image from "next/image" 
import { fontTitle } from "@/lib/fonts"

export default function AnyCupcake() {
  return (
    <section 
      className={`
        any-cupcake
        container
        mx-auto
        my-48
        flex
        items-center
        justify-center
        flex-col md:flex-row
      `}
      id="any-cupcake"
    >

      <Image
        src="/images/decorator-4.webp"
        alt="Decorative image"
        width={200}
        height={200}
        className={`
          decorator-left
          w-36
          opacity-50
          rotate-90
          hidden md:block
        `}
      />
      <p
        className={`
          ${fontTitle.className}
          text-4xl
          text-center
          w-full md:w-1/2
          px-2
        `}
        data-aos="zoom-in"
        data-aos-delay="0"
        data-aos-duration="1000"
      >
        Any cupcake flavor can also be made into a dessert parfait cup
      </p>

      <Image
        src="/images/decorator-4.webp"
        alt="Decorative image"
        width={200}
        height={200}
        className={`
          decorator-right
          w-36
          opacity-50
          -rotate-90
          hidden md:block
        `}
      />

      <Image
        src="/images/decorator-4.webp"
        alt="Decorative image"
        width={200}
        height={200}
        className={`
          decorator-bottom
          w-48
          opacity-50
          block md:hidden
          mt-4
        `}
      />
    </section>
  )
}