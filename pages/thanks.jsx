import Image from "next/image"
import RootLayout from "@/layouts/root-layout"
import MainText from "@/components/main-text"

export default function Index({}) {
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

        <MainText>
          Thank you for your order! We will be in touch soon.
        </MainText>

      </div>
    </RootLayout>
  )
}
