"use client";

import React, { useState, useEffect } from "react";
import LightRays from "./lightrays-bit";

export default function LightRaysSection() {

    const [rayLength , setRayLength] = useState(0.8)
    useEffect(() => {
        const updateProps = () => {
            const width = window.innerWidth;

            if (width < 640) {       // sm
                setRayLength(1.87);    

            } else if (width >= 1024) { // lg
                setRayLength(1);  

            } else {                 // md
                setRayLength(0.8);  

            }
        }
        updateProps();
        window.addEventListener("resize", updateProps);
        return () => window.removeEventListener("resize", updateProps);
    }, []);



    return(
    <LightRays
        raysOrigin="top-center"
        // raysColor="#AEA399"
        // raysColor="#DFEBF2"
        raysColor="#eeeeee"
        raysSpeed={0.4}
        lightSpread={2.9}
        rayLength={rayLength}
        followMouse={true}
        mouseInfluence={0.37}
        noiseAmount={1}
        distortion={0.025}
        className="custom-rays"
        pulsating={false}
        fadeDistance={1}
        saturation={1}
    />
    )
}