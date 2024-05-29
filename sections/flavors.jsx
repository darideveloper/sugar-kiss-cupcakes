import H2 from '@/components/h2'
import FlavorCard from '@/components/flavor-card'
import { flavors } from '@/lib/flavors'

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

      <H2>Cupcake Flavors</H2>
      
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
              key={flavor.text}
              text={flavor.text}
              iconType={flavor.iconType}
              icon={flavor.icon}
              onClick={() => {
                window.open(
                  `/order`,
                )
              }}
            />
            
          ))
        }
      </div>
    </section>

  )
}