import Hero from "@/sections/hero"
import Prices from "@/sections/prices"
import RootLayout from "@/layouts/root-layout"
import AnyCupcake from "@/sections/any-cupcake"
import Flavors from "@/sections/flavors"

export default function Index({}) {
  return (
    <RootLayout>
      <Hero />
      <Prices />
      <AnyCupcake />
      <Flavors />
    </RootLayout>
  )
}
