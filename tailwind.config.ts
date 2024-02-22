import daisyui from 'daisyui'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue', './app.vue', './error.vue'],
  darkMode: ['class', '[data-theme]'],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: true,
    logs: false,
  },
}

export default config

/* 
.theme {
  color: #8a2be2;
  background-color: #f0f9ff;
}
.theme {
  color: #000000;
  background-color: #ddd6ff;
}

*/
