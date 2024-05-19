/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#6DAEDB",
                "secondary": "#2892D7",
                "tertiary": "#173753",
            },
        },
    },
    plugins: [],
}

