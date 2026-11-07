/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#220409',
          900: '#330810',
          850: '#460C16',
          800: '#5A121D',
          700: '#731926',
          600: '#8C1F30',
        },
        gold: {
          50: '#FFFAF0',
          100: '#FEF3D6',
          200: '#FDE4A4',
          300: '#F9D16F',
          400: '#EABF3E',
          500: '#D4AF37', // Royal Gold
          600: '#B88E28',
          700: '#946E1B',
          800: '#715014',
          900: '#4D340C',
        },
        temple: {
          50: '#FCF3F3',
          100: '#F6DFE0',
          600: '#C02938',
          700: '#A31F2C',
          800: '#851722',
          900: '#5E0E17',
        },
        ivory: {
          50: '#FCFAF7',
          100: '#F8F4EC',
          200: '#F2EBDE',
          300: '#E6DCCB',
        },
        sandalwood: {
          50: '#FAF6F0',
          100: '#F3ECE0',
          200: '#E7DAC8',
          300: '#D4C1A7',
          400: '#B9A083',
        }
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        heading: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        royal: ['"Rozha One"', '"Cinzel Decorative"', 'serif'],
        subheading: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #FFE58F 0%, #D4AF37 50%, #996515 100%)',
        'maroon-silk': 'radial-gradient(ellipse at top, #5A121D 0%, #330810 60%, #1A0307 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'flame-flicker': 'flameFlicker 1.8s ease-in-out infinite alternate',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.7))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 24px rgba(249,209,111,0.95))' },
        },
        flameFlicker: {
          '0%': { transform: 'scale(1) skewX(0deg)', opacity: '0.9' },
          '35%': { transform: 'scale(1.08, 0.95) skewX(2deg)', opacity: '1' },
          '70%': { transform: 'scale(0.96, 1.05) skewX(-2deg)', opacity: '0.85' },
          '100%': { transform: 'scale(1.03, 1.02) skewX(1deg)', opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
