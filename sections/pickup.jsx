import H2 from '@/components/h2'
import Map from '@/components/map'

export default function Pickup ({}) {


  return (

    <section 
      className={`
        container
        mx-auto
        relative
        mb-56 xs:mb-0
      `}
      id="pickup"
    >
      <H2>Pickup</H2>

      <Map />
      
    </section>
  )
}