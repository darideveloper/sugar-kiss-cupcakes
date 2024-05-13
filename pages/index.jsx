import Hero from "@/sections/hero"
import Prices from "@/sections/prices"
import RootLayout from "@/layouts/root-layout";

export default function Index({}) {
  return (
    <RootLayout>
      <Hero />
      <Prices />
    </RootLayout>
  );
}
