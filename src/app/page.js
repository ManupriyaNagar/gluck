import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Banner1 from "@/components/Home/Banner1";
import IndiaPresenceMap from "@/components/Home/IndiaPresenceMap";
import SliderCaurosal from "@/components/Home/SliderCaurosal";
import WorldMap1 from "@/components/Home/WorldMap1";
import { WorldMapDemo } from "@/components/Home/WorldMapDemo";
import { WorldMap } from "@/components/ui/world-map";
import Image from "next/image";

export default function Home() {
  return (
    <>
  <div>
    <Banner/>
    <SliderCaurosal/>
    <About/>
     <WorldMapDemo/>
    {/* <Banner1/> */}
    {/* <IndiaPresenceMap/> */}
   
  </div>
    </>
    
  );
}
