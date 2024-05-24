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
          flavors["cupcakes"].map((flavor) => (
            <FlavorCard 
              text={flavor.text}
              iconType={flavor.iconType}
              icon={flavor.icon}
              onClick={() => {
                // Open WhatsApp with a message in a new tab
                window.open(
                  `${whatsappLinkBase}I want to order a ${flavor.text} cupcake`,
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