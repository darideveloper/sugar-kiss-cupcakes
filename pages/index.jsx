import Hero from "@/sections/hero"
import Prices from "@/sections/prices"
import RootLayout from "@/layouts/root-layout"
import AnyCupcake from "@/sections/any-cupcake";

export default function Index({}) {
  return (
    <RootLayout>
      <Hero />
      <Prices />
      <AnyCupcake />
    </RootLayout>
  )
}
