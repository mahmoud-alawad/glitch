/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,tsx}",
  ],
  theme: {
    container:({theme})=>({
      center: true,
      padding: theme('custom.spacing.gutter'),
    }),
    custom: {
      spacing: {
        gutter: '0.75rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
