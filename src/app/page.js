import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Banner1 from "@/components/Home/Banner1";
import SliderCaurosal from "@/components/Home/SliderCaurosal";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <div>
    <Banner/>
    <SliderCaurosal/>
    <About/>
    <Banner1/>
  </div>
    </>
    
  );
}
