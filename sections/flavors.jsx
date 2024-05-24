import Title from '@/components/title'
import FlavorCard from '@/components/flavor-card'
import { flavors } from '@/lib/flavors'
import { whatsappLinkBase } from '@/lib/contact'

export default function Flavors() {

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
          flavors["cupcakes"].map((flavorData) => (
            <FlavorCard 
              text={flavorData.text}
              iconType={flavorData.iconType}
              icon={flavorData.icon}
              onClick={() => {
                window.open(
                  `${whatsappLinkBase}I want to order a ${flavorData.text} cupcake`,
                  '_blank'
                )
              }}
            />
            
          ))
        }
      </div>
    </section>

  )
}