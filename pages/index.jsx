import Hero from "@/sections/hero"
import Products from "@/sections/products"
import RootLayout from "@/layouts/root-layout"
import AnyCupcake from "@/sections/any-cupcake"
import Flavors from "@/sections/flavors"
import About from "@/sections/about"
import Pickup from "@/sections/pickup"
import Gallery from "@/sections/gallery"

export default function Index({}) {
  return (
    <RootLayout>
      <Hero />
      <Products />
      <AnyCupcake />
      <Flavors />
      <About />
      <Pickup />
      <Gallery />
    </RootLayout>
  )
}
