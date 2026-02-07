import Image from "next/image";

import AnimatedList from "./components/AnimatedList-bit";
import Aurora from "./components/aurora-bit";
import LightRaysSection from "./components/lightrays-section";
import LogoLoopSection from "./components/logoloop-section";
import SplitTextSection from "./components/splittext-section";
import { image } from "motion/react-client";
import { unboundedFont , ibmFont} from "./fonts";

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 











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
         <div className="    relative z-10 flex items-center justify-center h-full w-[90vh]  ">
          <SplitTextSection />
          {/* <p className= {` ${unboundedFont.className}  text-beige lg:text-[4rem]  m-3 lg:m-0 text-[36px]  opacity-95`  }  > Welcome <span className={` italic font-unbounded`}>here  </span>  </p> */}

         </div>

    </section>

    <section className="no-scrollbar">

          <div style={{ height: '110px', position: 'relative', overflow: 'hidden'   }}>
      {/* Basic horizontal loop */}
            <LogoLoopSection />
         </div>

    </section>
    <p>hi</p>
  </>  



  );
}
