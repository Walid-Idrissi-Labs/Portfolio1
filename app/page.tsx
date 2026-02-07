import Image from "next/image";
import { DM_Sans, IBM_Plex_Mono , Unbounded} from "next/font/google";
import AnimatedList from "./components/AnimatedList-bit";
import Aurora from "./components/aurora-bit";
import LightRaysSection from "./components/lightrays-section";
import LogoLoopSection from "./components/logoloop-section";
import SplitTextSection from "./components/splittext-section";
import { image } from "motion/react-client";

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 

const priFont = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700']  , style : ['normal' , 'italic']})
const secFont = IBM_Plex_Mono({ subsets: ['latin'], weight: ['500'] })
const unboundedFont = Unbounded({ subsets: ['latin'], weight: ['400', '500', '700']  , style : ['normal' ] , variable : "--font-unbounded" })








export default function Home() {
  return (
  < >
    
    <section className = "flex relative w-full h-[90vh] flex-col items-center justify-between p-0 bg-black">
      <div className="absolute z-0 w-full h-full">
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <LightRaysSection />
          </div>
      {/* welcome here text */}


      </div> 
         <div className="   font-primary  relative z-10 flex items-center justify-center h-full w-[90vh]  ">
          <SplitTextSection />
          {/* <p className= {` font-unbounded text-beige lg:text-[4rem]  m-3 lg:m-0 text-[36px]  opacity-95`  }  > Welcome <span className="text-red font-mono italic">here  </span>  </p> */}
         </div>

    </section>

    <section className="">

          <div style={{ height: '100px', position: 'relative', overflowX: 'hidden' , paddingTop : '15px'  }}>
      {/* Basic horizontal loop */}
            <LogoLoopSection />
         </div>

    </section>
    <p>hi</p>
  </>  



  );
}
