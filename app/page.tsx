import tailwindConfig from "../tailwind.config";
import Image from "next/image";


import AnimatedList from "./components/AnimatedList-bit";
import AuroraSection from "./components/aurora-section";
import LightRaysSection from "./components/lightrays-section";
import LogoLoopSection from "./components/logoloop-section";
import SplitTextSection from "./components/splittext-section";
import PillNav from "./components/pillnav-bit";
import ScrollFloat from "./components/scrollfloat-bit";
import { image } from "motion/react-client";

const memojiLogo = "/memoji.svg";



const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']; 











export default function Home() {
  return (
  < >
  
    <section className={`w-full flex items-center justify-center  px-6 xl:px-16 fixed z-90 `}>
      <div className=" flex justify-around  px-1 lg:px-1 font-ibm  font-weight-500">
              <PillNav
              logo={memojiLogo}
              logoAlt="Company Logo"
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '#overview' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ]}
              activeHref="/"
              className="custom-nav"
              ease="power2.easeOut"
              baseColor = "#000000aa"
              pillColor = {tailwindConfig.theme.extend.colors.not_quite_black}
              hoveredPillTextColor = {tailwindConfig.theme.extend.colors.beige_bright}
              pillTextColor={tailwindConfig.theme.extend.colors.slate}

              // baseColor="#000000"
              // pillColor="#ffffff"
              // hoveredPillTextColor="#ffffff"
              initialLoadAnimation
                />
      </div>
    </section> 

    <section className = "flex relative w-full h-screen flex-col items-center justify-between p-0 bg-black">
      <div className="absolute z-0 w-full h-full">

          <AuroraSection />
          {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <LightRaysSection />
          </div> */}
        {/* welcome here text */}


      </div> 
         <div className="relative z-10 flex items-center justify-center h-full w-full max-w-7xl px-6">
          <SplitTextSection />
          {/* <p className= {` ${unboundedFont.className}  text-beige lg:text-[4rem]  m-3 lg:m-0 text-[36px]  opacity-95`  }  > Welcome <span className={` italic font-unbounded`}>here  </span>  </p> */}

         </div>

    </section>


    {/* <section className="w-full h-200 px-6 lg:px-16 md:px-10 flex flex-col items-center justify-center my-20 leading-relaxed lg:leading-loose font-lato opacity-90">
      <div className="flex flex-col items-center justify-center max-w-80 md:max-w-160 lg:max-w-210 xl:max-w-300">
           <ScrollRevealSection /> 
      </div>
    </section> */}
  <section className="h-[60vh]  w-[95vw]">
        <div className="text-center  outline outline-red-600">
          
        <ScrollFloat 
          animationDuration={4}
          ease='back.inOut(2)'
          scrollStart='center bottom+=60%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.08}
          >  Overview
        </ScrollFloat>
      </div>

    <section id="overview" className="flex justify-center items-center h-full w-full pt-5">


      <div className="flex flex-col gap-4 w-[90vw] md:flex-row ">
        <div className="flex-1 outline  outline-amber-600">
          <p className="text-center h-50">  hi1</p>
        </div>
        <div className="flex-1 outline  outline-blue-600">
          <p className="text-center h-50"> hi2</p>
        </div>

      </div>
    </section>
  </section>
    

    <section className="no-scrollbar">

          <div style={{ height: '110px', position: 'relative', overflow: 'hidden'   }}>
      {/* Basic horizontal loop */}
            <LogoLoopSection />
         </div>

    </section>
    <p className="font-lato italic">hi</p>
    

    <section id="projects">
      <p>hi</p>
    </section>

    <section id="contact">
      <p>hi</p>
    </section>

  </>  



  );
}
