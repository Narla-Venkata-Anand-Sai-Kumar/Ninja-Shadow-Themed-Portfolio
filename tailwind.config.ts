import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Ninja theme colors
        ninja: {
          black: "hsl(var(--ninja-black))",
          charcoal: "hsl(var(--ninja-charcoal))",
          gray: "hsl(var(--ninja-gray))",
          silver: "hsl(var(--ninja-silver))",
          white: "hsl(var(--ninja-white))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "gradient": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "shimmer": {
          "0%": {
            "background-position": "-468px 0",
          },
          "100%": {
            "background-position": "468px 0",
          },
        },
        // Ninja-themed animations
        "ninja-appear": {
          "0%": { 
            opacity: "0", 
            transform: "scale(0.5) translateY(20px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "scale(1) translateY(0)" 
          },
        },
        "ninja-slide": {
          "0%": { 
            opacity: "0", 
            transform: "translateX(-100px)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)" 
          },
        },
        "ninja-glow": {
          "0%, 100%": { 
            "box-shadow": "0 0 0 rgba(255, 255, 255, 0)" 
          },
          "50%": { 
            "box-shadow": "0 0 20px rgba(255, 255, 255, 0.1)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 0.6s ease-out",
        "slide-in-from-left": "slide-in-from-left 0.6s ease-out",
        "slide-in-from-right": "slide-in-from-right 0.6s ease-out",
        "scale-in": "scale-in 0.6s ease-out",
        "gradient": "gradient 6s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 1.2s ease-in-out infinite",
        // Ninja animations
        "ninja-appear": "ninja-appear 0.8s ease-out",
        "ninja-slide": "ninja-slide 0.6s ease-out",
        "ninja-glow": "ninja-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
