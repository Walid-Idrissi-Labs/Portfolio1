"use client";

import React, { useState, useEffect } from "react";
import LightRays from "./lightrays-bit";

export default function LightRaysSection() {

    const [rayLength , setRayLength] = useState(0.8)
    useEffect(() => {
        const updateProps = () => {
            const width = window.innerWidth;

            if (width < 640) {       // sm
                setRayLength(1.67);    

            } else if (width >= 1024) { // lg
                setRayLength(1.2);  

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
        raysColor="#FFFFFF"
        raysSpeed={0.9}
        lightSpread={0.8}
        rayLength={rayLength}
        followMouse={true}
        mouseInfluence={0.67}
        noiseAmount={0.6}
        distortion={0.025}
        className="custom-rays"
        pulsating={true}
        fadeDistance={3.5}
        saturation={1.5}
    />
    )
}