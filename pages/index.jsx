import Image from "next/image"
import { Inter } from "next/font/google"
import Hero from "@/sections/hero"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`text-4xl`}
    >
      Hero
    </main>
  );
}
