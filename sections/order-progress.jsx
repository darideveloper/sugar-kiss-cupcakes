import { OrderContext } from "@/contexts/order-context"
import { useContext } from "react"
import { fontTitle } from "@/lib/fonts"

export default function OrderProgress ({}) {

  // Get order steps from context
  const { orderSteps, orderCurrentStep } = useContext(OrderContext)

  return (
    <section
      className={`
        steps
        flex
        justify-evenly
        align-center
        py-12
      `}
    >

      {
        orderSteps.map((step, index) => {
          return (
            <div
              key={index}
              className={`
                step
                relative
                inline-block
                w-24
                duration-300
                ${orderCurrentStep == index ? 'scale-110' : 'opacity-50'}
              `}
            >
              <p
                className={`
                  number
                  text-md
                  w-8
                  h-8
                  p-1
                  inline-block
                  rounded-full
                  text-center
                  bg-pink-dark
                  font-bold
                  text-white
                  scale-125
                  absolute
                  top-0
                  left-0
                  -z-10
                  mt-2
                  duration-300
                  group-hover:scale-150
                  group-hover:ml-12
                  ${orderCurrentStep != index ? 'scale-125' : 'scale-150'}
                `}
              >
                {index + 1}
              </p>
              <p
                className={`
                  icon
                  text-5xl
                  ml-4
                  duration-300
                  group-hover:ml-0
                `}
              >
                {step.icon}
              </p>
              <p
                className={`
                  title
                  mt-2
                  text-center
                  ${fontTitle.className}
                  duration-300
                  text-xl
                  leading-4
                  group-hover:text-pink-dark
                  group-hover:scale-125
                  group-hover:mt-5
                `}
              >
                {step.title}
              </p>
            </div>
          )
        })
      }
    </section>
  )
}