import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
        tokens: {
          colors: {
            WHITE: { value: '#FFFFFF' },
            HONEYDEW: { value: '#E0F2E9' },
            PALE_DOGWOOD: { value: '#CEB5A7' },
            BEAVER: { value: '#A17C6B' },
            HOOKERS_GREEN: { value: '#5B7B7A' },
            DARK_CYAN: { value: '#3C887E' },
          },
          fontSizes: {
          },
        },
      },
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    
})