import Data from "@/components/productspage/Data";
import Hero from "@/components/productspage/Hero";
import Providers from "@/components/productspage/Providers";
import "@/app/globals.css";

export default function Products() {
  return (
    <div className="container">
      <Hero />
      <Providers />
      <Data />
    </div>
  );
}
