"use client";

import React, { useRef, useEffect, useState } from 'react';
import SplitText from './splittext-bit';





export default function SplitTextSection() {

    const [tailwind , setTailwind] = useState("font-unbounded text-center text-[3rem]  md:text-[5rem] lg:text-[6rem]    opacity-95")

    return (   
        <SplitText
            text={'Welcome <span class="text-[#D9414E] italic">here</span>'}
            allowHtml
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
        />

    )

}