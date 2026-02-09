import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#d9d9d9",
                // brick : "#A66066",
                red: "#D9414E",

                // beige : "#AEA399",
                slate: "#74818C",
                "beige_bright": "#F2E6D8",
                "beige_dark": "#D9CEC5",
                "faint_white": "#e6e6e6",
                "not_quite_black" : "#0D0D0D",
            },
            fontFamily: {
                // 'primary' : ['DM Sans', 'sans-serif'],
                ibm: ["var(--font-ibm)", "monospace"],
                unbounded: ["var(--font-unbounded)", "sans-serif"],
                lato : ["var(--font-lato)", "sans-serif"],
            },
            backgroundImage: {
                "silver-text-gradient": "linear-gradient(to right, #D9D9D9, #8C8C8C)",
            },
        },
    },
} satisfies Config;
