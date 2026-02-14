/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Poppins', 'sans-serif'],
            },
            colors: {
                mildexia: {
                    cream: '#F4F7F2',
                    sage: '#D1E0D6',
                    deep: '#0B1410',
                    charcoal: '#1A2320',
                    neon: '#4ADE80',
                    primary: '#10B981',
                    darkPrimary: '#059669',
                },
            },
            backgroundImage: {
                'hero-light': 'linear-gradient(135deg, #1A2E22 0%, #D1E0D6 100%)',
                'hero-dark': 'linear-gradient(135deg, #020403 0%, #112920 100%)',
            },
        },
    },
    plugins: [],
};
