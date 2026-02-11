import React from 'react';
import tailwindConfig from "../tailwind.config";
import Image from "next/image";



import AnimatedList from "./components/AnimatedList-bit";
import AuroraSection from "./components/ui/aurora-section";
import LightRaysSection from "./components/ui/lightrays-section";
import LogoLoopSection from "./components/ui/logoloop-section";
import SplitTextSection from "./components/ui/splittext-section";
import PillNav from "./components/page/pillnav-bit";
import GradientText from "./components/page/gradienttext-bit";
import ProfileCardSection from "./components/ui/profilecard-section"; 
import {TextGenerateEffect} from "./components/ui/textgenerateeffect-bit"; 
import BackgroundBeamsSection from "./components/ui/backgroundbeams-section";
import StaticBackgroundBeamsSection from "./components/ui/staticbackgroundbeams-section";

import { image } from "motion/react-client";

const walid_memoji = "/walid_memoji_face.png";











export default function Home() {
  return (
  < >
  
    <section className={`w-full flex items-center justify-center  px-6 xl:px-16 md:fixed z-90 `}>
      <div className=" flex justify-around  px-1 lg:px-1 font-ibm  font-weight-500">
              <PillNav
              logo={walid_memoji}
              logoAlt="Walid"
              items={[
                { label: 'Home', href: '#home' },
                { label: 'Overview', href: '#overview' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ]}
              activeHref="/"
              className="custom-nav"
              ease="power2.easeOut"
              baseColor = "#0d0d0d99"
              // baseColor={tailwindConfig.theme.extend.colors.not_quite_black}
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

    <section id="home" className = "flex relative w-full h-screen flex-col items-center justify-between p-0 bg-black">
      <div className="absolute z-0 w-full h-full">

          <AuroraSection />
          {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <LightRaysSection />
          </div> */}
        {/* welcome here text */}
        <StaticBackgroundBeamsSection />


      </div> 
         <div className="relative z-1 px-10 flex items-center justify-center h-full w-full max-w-7xl ">
          <SplitTextSection />
          {/* <p className= {` ${unboundedFont.className}  text-beige lg:text-[4rem]  m-3 lg:m-0 text-[36px]  opacity-95`  }  > Welcome <span className={` italic font-unbounded`}>here  </span>  </p> */}

         </div>

    </section>


    {/* <section className="w-full h-200 px-6 lg:px-16 md:px-10 flex flex-col items-center justify-center my-20 leading-relaxed lg:leading-loose font-lato opacity-90">
      <div className="flex flex-col items-center justify-center max-w-80 md:max-w-160 lg:max-w-210 xl:max-w-300">
           <ScrollRevealSection /> 
      </div>
    </section> */}
    <section id="overview" className="min-h-[95vh] pt-4 md:pt-6 w-full px-4 md:px-10 lg:px-15                   outline-red-500 ">
            <div className='z-10 relative w-full h-full flex flex-col items-center justify-center               outline-green-500 '>
              <BackgroundBeamsSection  />
            
            
          {/* <div className="relative w-full  max-w-7xl flex justify-center md:justify-start md:pl-10 lg:pl-16 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-unbounded outline outline-red-600"> */}
            <div  className="relative w-full flex justify-center md:justify-start text-center md:text-left text-[3rem] sm:text-[3.6rem] md:text-[3.8rem] lg:text-[4.4] xl:text-[4.7rem] font-unbounded z-1  outline-red-600">
              {/* <h1 className=" ">Overview</h1> */}
              <GradientText
                  colors={
                    [ tailwindConfig.theme.extend.colors.beige_dark,
                      tailwindConfig.theme.extend.colors.slate,
                      tailwindConfig.theme.extend.colors.beige_bright,
                  ]}
                  animationSpeed={3}
                  showBorder={true}
                  className="custom-class"
                >
                  Overview
              </GradientText>
          </div>

        <section  className=" z-1 flex justify-center items-center h-full w-full mt-3 md:mt-4  outline-cyan-500">


          <div className="flex flex-col gap-10 mx-auto w-full md:flex-row px-2 sm:px-6 md:px-10 py-10   outline-purple-600">
              <div className="flex-1 flex items-center text-[3rem]   outline-amber-600">
                  <div className='flex justify-center items-center pb-0 outline-green-500 w-full'>
                      <TextGenerateEffect 
                      words={"Computer science engineer focused on scalable web systems and meaningful user experiences, turning complex concepts into modern applications and bringing them *into the light*"} />
                  </div>
              </div>
              <div className="flex-1 flex justify-center items-center  outline-blue-600">
                <div className="flex justify-center w-full">
                  <ProfileCardSection/>
                </div>
              </div>
          </div>
        </section>
        </div>
  </section>
    

    <section className="no-scrollbar mt-30">

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
