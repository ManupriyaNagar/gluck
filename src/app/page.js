import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";

import SliderCaurosal from "@/components/Home/SliderCaurosal";

import { WorldMapDemo } from "@/components/Home/WorldMapDemo";


export default function Home() {
  return (
    <>
  <div>
    <Banner/>
    <SliderCaurosal/>
    <About/>
     <WorldMapDemo/>
 
   
  </div>
    </>
    
  );
}
