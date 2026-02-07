module.exports = {
    darkMode : 'class',
    content : [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme : {
        extend : {
            colors : {
                primary : '#d9d9d9',
                // brick : "#A66066",
                red : "#D9414E",
                
                // beige : "#AEA399",
                slate : "#74818C",
                "beige-bright" : "#F2E6D8",
                "beige-dark" : "#D9CEC5",
            },
            fontFamily : {
                // 'primary' : ['DM Sans', 'sans-serif'],
                'mono' : ['IBM Plex Mono', 'monospace'],
                "primary" : ['Unbounded', 'sans-serif'],
                "unbounded" : ['var(--font-unbounded)']
            },
            backgroundImage : {
                'silver-text-gradient': 'linear-gradient(to right, #D9D9D9, #8C8C8C)',
            },
            },
        },
    }
