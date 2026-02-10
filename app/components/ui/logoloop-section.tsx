"use client";

// ------ note toself : 
// this section represents the logo loop, but its responsive given the client size window

//why not put it directly in app? 
    /*the App (page.tsx) was starting to get cluttered, but thats not even the main reason
     - to be able to use the window.innerWidth thing, useEffect is needed, but useEffect has to be rendered clientside (or so i believe, point is it cannot be used unless the directive "use client" is specified 
     - which gives the need for a new component which imports the other component and can render it dynamically given the screen size of the client, this way i dont have to make the whole app on the client side, as i believe that wouldnt be good performance-wise and would defeat the point of nextjs optimization
     - evntually i should do the same with the rays, since they look weird on moblie*/

import { useState, useEffect } from "react";
import LogoLoop from "./logoloop-bit";


// Alternative with image sources
const imageLogos = [
  { src: "/logo-html5.svg", alt: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: "/logo-react.svg", alt: "React", href: "https://react.dev/" },
  { src: "/logo-vue.svg", alt: "VueJS", href: "https://vuejs.org/" },
  { src: "/logo-js.svg", alt: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: "/logo-typescript.svg", alt: "TypeScript", href: "https://www.typescriptlang.org/" },
  { src: "/logo-nextjs.svg", alt: "Next.js", href: "https://nextjs.org/" },
  { src: "/logo-tailwind.svg", alt: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { src: "/logo-terraform.svg", alt: "Terraform", href: "https://www.terraform.io/" },
  { src: "/logo-aws.svg", alt: "AWS", href: "https://aws.amazon.com/" },
  { src: "/logo-python.svg", alt: "Python", href: "https://www.python.org/" },
  { src: "/logo-postgres.svg", alt: "PostgreSQL", href: "https://www.postgresql.org/" },
  { src: "/logo-bash.svg", alt: "Bash", href: "https://www.gnu.org/software/bash/" },
  { src: "/logo-css3.svg", alt: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  // { src : "" , alt:"null" , href : "null" } // placeholder to make the loop smoother, it will be hidden with css
  
];




export default function LogoLoopSection() {
  const [logoHeight, setLogoHeight] = useState(60);
  const [gap, setGap] = useState(67);
  const [speed , setSpeed] = useState(60)




  useEffect(() => {
    const updateSizes = () => {
      const width = window.innerWidth;

      if (width < 640) {       // sm 
        setLogoHeight(50);  setGap(35);  setSpeed(35); 

      } else if (width >= 1024) { // lg
        setLogoHeight(50);  setGap(70);  setSpeed(50);

      } else {                 // md
        setLogoHeight(40);  setGap(67);  setSpeed(60);
      }
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);

  }, []);

  return (
        <LogoLoop
        logos={imageLogos}
        speed={speed}
        hoverSpeed={9}
        direction="left"
        logoHeight={logoHeight}
        gap={gap}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technologies"
        />
  );
}