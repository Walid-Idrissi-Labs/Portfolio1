"use client";

import React, { useRef, useEffect, useState } from 'react';
import SplitText from './splittext-bit';





export default function SplitTextSection() {

    const [tailwind , setTailwind] = useState("text-center text-[2.5rem]  md:text-[4.7rem] lg:text-[5.5rem] font-unbounded   opacity-90")

    return (   
        <SplitText
            className={tailwind}
            delay={90}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={() => null}
        >
            Welcome <span className="font-ibm italic text-slate">here</span>
        </SplitText>

    )

}