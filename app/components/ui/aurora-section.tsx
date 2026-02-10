"use client";

import React, { useEffect, useRef } from "react";
import Aurora from "./aurora-bit";




import tailwindConfig from "../../../tailwind.config";


export default function AuroraSection() {



    const [colors , setColors] = React.useState<string[]>([
        // "#7cff67",
        tailwindConfig.theme.extend.colors.beige_bright,
        // tailwindConfig.theme.extend.colors.beige_dark ,
        "#ffffff",
        tailwindConfig.theme.extend.colors.slate 
    ]);


    useEffect(() => {
        const updateProps = () => {
            const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (darkMode) {
                setColors(["#7cff67","#B19EEF","#5227FF"]);
            } else {
                setColors(["#7cff67","#B19EEF","#5227FF"]);
                console.log("light mode");
            }
        }

        //DONT CHECK FOR NOW, LIGHTMODE ISNT NEEDED, DEFAUT TO DARK MODE
        // updateProps();
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateProps);
        return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateProps);
    }, []);



    return (
        <Aurora
        colorStops={colors}
        blend={0.99}
        amplitude={0.37}
        speed={1.1}
        />
    )
};