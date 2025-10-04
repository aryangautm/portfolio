/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#000000',
                    card: '#0a0a0a',
                    border: '#1a1a1a',
                },
                light: {
                    bg: '#ffffff',
                    card: '#f8f9fa',
                    border: '#e9ecef',
                }
            },
            fontSize: {
                'xs': '0.7rem',
                'sm': '0.8rem',
                'base': '0.875rem',
                'lg': '0.95rem',
                'xl': '1.1rem',
                '2xl': '1.3rem',
                '3xl': '1.6rem',
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

