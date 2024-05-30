import Image from "next/image"
import RootLayout from "@/layouts/root-layout"

export default function CommingSoon({}) {
  return (
    <RootLayout>
      <div
        className={`
          thanks
          h-screen
          w-screen
          flex
          justify-center
          items-center
          flex-col
        `}
      >

        <Image 
          src="/images/logo.webp"
          alt="Thank you"
          width={400}
          height={400}
          className={`
            w-11/12 md:w-1/2 lg:w-1/3
          `}
        />

        <h1
          className={`
          text-3xl
          text-golden
          mt-14
          text-center
          `}
        >
          Comming Soon
        </h1>

        <p>
          Contact us <a href="tel:+12019061316" className={`font-bold`}>201 906 1316</a>
        </p>


      </div>
    </RootLayout>
  )
}
