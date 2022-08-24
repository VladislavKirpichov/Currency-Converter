/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    content: ["./src/**/*.{html, js}", './public/index.html'],
    theme: {    
        fontFamily: {
            sans: ['Helvetica']
        }
    },
    plugins: [],
};
