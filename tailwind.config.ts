import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/UI/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        clamp(value) {
          // load font sizes from theme
          const sizes: any = theme('fontSize') ?? '';

          // parse the value passed in from class name
          // split it by "-" and compare pieces to fontSize values
          const split = value.split('-').map((v) => (sizes[v] ? sizes[v]['0'] : v));

          // return a clamped font-size
          return {
            fontSize: `clamp(${split[0]}, ${split[1]}, ${split[2]})`,
          };
        },
      });
    }),
  ],
};
export default config;
