"use client";

import React, { useRef, useEffect, useState } from 'react';
import SplitText from './splittext-bit';





export default function SplitTextSection() {

    const [tailwind , setTailwind] = useState("text-center text-[2.5rem] text-beige_bright  md:text-[4.7rem] lg:text-[5.5rem] xl:text-[6.7rem] font-unbounded   opacity-90")

    return (   
        <SplitText
            className={tailwind}
            delay={140}
            duration={5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 15 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            tag="div"
            textAlign="center"
            onLetterAnimationComplete={() => null}
        >
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                <span className="whitespace-nowrap">Less noise.</span>
                <span className="whitespace-nowrap font-ibm italic text-slate">More signal</span>
            </div>
        </SplitText>

    )

}