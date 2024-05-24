import Title from '@/components/title'
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
      <Title>Pickup</Title>

      <Map />
      
    </section>
  )
}