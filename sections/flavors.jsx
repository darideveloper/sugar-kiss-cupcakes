import Title from '@/components/title'
import { whatsappLinkBase } from '@/lib/contact'

export default function Flavors() {

  const flavorsData = [
    {
      "icon": "🍓",
      "text": "Strawberry Shortcake"
    },
    {
      "icon": "🫐",
      "text": "Fresh Berry Vanilla"
    },
    {
      "icon": "🍌",
      "text": "Banana Cream Pie"
    },
    {
      "icon": "🍓",
      "text": "Strawberry Banana"
    },
    {
      "icon": "🍪",
      "text": "Cookies & Cream"
    },
    {
      "icon": "🌈",
      "text": "Confetti Surprise"
    },
    {
      "icon": "🤍",
      "text": "White Chocolate"
    },
    {
      "icon": "🌿",
      "text": "Mint chocolate"
    },
    {
      "icon": "🍋",
      "text": "Lemon Meringue"
    },
    {
      "icon": "🎃",
      "text": "Pumpkin Spice"
    },
    {
      "icon": "🍫",
      "text": "Milk Chocolate"
    },
    {
      "icon": "🍊",
      "text": "Orange Cream"
    },
    {
      "icon": "🥑",
      "text": "Avocado Spice"
    },
    {
      "icon": "🍂",
      "text": "French Vanilla"
    },
    {
      "icon": "🥕",
      "text": "Carrot Spice"
    },
    {
      "icon": "🧈",
      "text": "Butter Pecan"
    },
    {
      "icon": "🍒",
      "text": "Cherry Pie"
    },
    {
      "icon": "🥭",
      "text": "Mango Kiwi"
    },
    {
      "icon": "🍑",
      "text": "Peach Cobbler"
    },
    {
      "icon": "🍍",
      "text": "Pina Colada"
    },
    {
      "icon": "🍎",
      "text": "Apple Honey"
    },
    {
      "icon": "🍈",
      "text": "Key Lime Pie"
    },
    {
      "icon": "☕",
      "text": "Espresso"
    },
    {
      "icon": "🥨",
      "text": "Pretzel Carmel"
    },
    {
      "icon": "🍫",
      "text": "Nutella"
    },
    {
      "icon": "🌰",
      "text": "Pistachio"
    },
    {
      "icon": "🇮🇹",
      "text": "Tiramisu"
    }
  ]

  return (

    <section
      className={`
        flavors
        container
        mx-auto
      `}
    >

      <Title>Flavors</Title>

      <div 
        className={`
          flavors-wrap
          flex
          flex-wrap
          justify-center
        `}
      >
        {
          flavorsData.map((flavorData) => (
            <a 
              className={`
                flavor
                w-28
                flex
                flex-col
                items-center
                justify-center
                m-4
                group
                cursor-pointer
              `}
              key={flavorData.text}
              href={`${whatsappLinkBase} I am interested in ${flavorData.text} cupcakes.`}
              target="_blank"
            >
              <p
                className={`
                  text-6xl
                  opacity-50
                  duration-500
                  group-hover:-translate-y-2
                  group-hover:scale-110
                  group-hover:opacity-70
                `}
              >
                {flavorData.icon}
              </p>
              <p
                className={`
                  w-full
                  text-center
                  text-black
                  text-sm
                  font-bold
                  bg-white
                  p-2
                  rounded-lg
                  -mt-8
                  pt-12
                  duration-500
                  group-hover:text-pink-dark
                `}
              >
                {flavorData.text}
              </p>
            </a>
          ))
        }
      </div>
    </section>

  )
}