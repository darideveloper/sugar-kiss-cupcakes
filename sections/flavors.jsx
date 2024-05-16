import Image from 'next/image'
import Title from '@/components/title'
import { whatsappLinkBase } from '@/lib/contact'

export default function Flavors() {

  const flavorsData = [
    {
      "icon": "🍓",
      "text": "Strawberry Shortcake",
      "type_icon": "text",
    },
    {
      "icon": "🫐",
      "text": "Fresh Berry Vanilla",
      "type_icon": "text",
    },
    {
      "icon": "🍌",
      "text": "Banana Cream Pie",
      "type_icon": "text",
    },
    {
      "icon": "🍓",
      "text": "Strawberry Banana",
      "type_icon": "text",
    },
    {
      "icon": "🍪",
      "text": "Cookies & Cream",
      "type_icon": "text",
    },
    {
      "icon": "🌈",
      "text": "Confetti Surprise",
      "type_icon": "text",
    },
    {
      "icon": "🤍",
      "text": "White Chocolate",
      "type_icon": "text",
    },
    {
      "icon": "🌿",
      "text": "Mint chocolate",
      "type_icon": "text",
    },
    {
      "icon": "🍋",
      "text": "Lemon Meringue",
      "type_icon": "text",
    },
    {
      "icon": "🎃",
      "text": "Pumpkin Spice",
      "type_icon": "text",
    },
    {
      "icon": "🍫",
      "text": "Milk Chocolate",
      "type_icon": "text",
    },
    {
      "icon": "🍊",
      "text": "Orange Cream",
      "type_icon": "text",
    },
    {
      "icon": "🥑",
      "text": "Avocado Spice",
      "type_icon": "text",
    },
    {
      "icon": "🍂",
      "text": "French Vanilla",
      "type_icon": "text",
    },
    {
      "icon": "🥕",
      "text": "Carrot Spice",
      "type_icon": "text",
    },
    {
      "icon": "🧈",
      "text": "Butter Pecan",
      "type_icon": "text",
    },
    {
      "icon": "🍒",
      "text": "Cherry Pie",
      "type_icon": "text",
    },
    {
      "icon": "🥭",
      "text": "Mango Kiwi",
      "type_icon": "text",
    },
    {
      "icon": "🍑",
      "text": "Peach Cobbler",
      "type_icon": "text",
      "type_icon": "text",
    },
    {
      "icon": "🍍",
      "text": "Pina Colada",
      "type_icon": "text",
    },
    {
      "icon": "🍎",
      "text": "Apple Honey",
      "type_icon": "text",
    },
    {
      "icon": "🍈",
      "text": "Key Lime Pie",
      "type_icon": "text",
    },
    {
      "icon": "☕",
      "text": "Espresso",
      "type_icon": "text",
    },
    {
      "icon": "🥨",
      "text": "Pretzel Carmel",
      "type_icon": "text",
    },
    {
      "icon": "🍫",
      "text": "Nutella",
      "type_icon": "text",
    },
    {
      "icon": "🌰",
      "text": "Pistachio",
      "type_icon": "text",
    },
    {
      "icon": "🇮🇹",
      "text": "Tiramisu",
      "type_icon": "text",
    },
    {
      "icon": "",
      "text": "Fruity pebbles",
      "type_icon": "image",
    },
    {
      "icon": "",
      "text": "Cocoa Crisp",
      "type_icon": "image",
    },
  ]

  return (

    <section
      className={`
        flavors
        container
        mx-auto
      `}
      id="flavors"
    >

      <Title>Cupcake Flavors</Title>
      
      <p
        className={`
          text-center
          max-w-lg
          mx-auto
          mb-8
          px-4
        `}
      >
        Any flavor, color or theme can be made with buttercream, whipped cream or cream cheese frosting
      </p>

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
              <div 
                className={`
                  icon
                  opacity-50
                  duration-500
                  group-hover:-translate-y-2
                  group-hover:scale-110
                  group-hover:opacity-70
                `}
              >
                {
                  flavorData.type_icon == "text"
                  ?
                  <p
                    className={`
                      text-6xl
                    `}
                  >
                    {flavorData.icon}
                  </p>
                  :
                  <Image 
                    src={`/images/flavors/${flavorData.text} flavor.jpeg`}
                    width={60}
                    height={60}
                    alt={`${flavorData.text} flavor`}
                    className={`

                    `}
                  />
                }
              </div>

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