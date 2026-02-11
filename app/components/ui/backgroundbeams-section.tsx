"use client";
import tailwindConfig from "@/tailwind.config";
import { BackgroundBeams } from "./backgroundbeams-bit";

export default function BackgroundBeamsSection() {
    return (

      <BackgroundBeams 
        isStatic={false}
        beamColors={{primary:"#ffffff" , mid:"#ffffff" , end:"#ffffff"}}
        duration={7}


      />





)};