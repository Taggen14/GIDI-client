/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkmode-main-bg': 'var(--darkmode--main--bg)',
        'darkmode-container-prim-bg': 'var(--darkmode--container--prim--bg)',
        'darkmode-container-sec-bg': 'var(--darkmode--container--sec--bg)',
        'darkmode-prim-text': 'var(--darkmode--prim--textcolor)',
        'darkmode-sec-text': 'var(--darkmode--sec--textcolor)',
        'darkmode-prim-btn-bg': 'var(--darkmode--prim--btn--bg)',
        'darkmode-prim-btn-text': 'var(--darkmode--prim--btn--text)',
        'darkmode-positive-green': 'var(--darkmode--positvie--stimuli--green)',
        'darkmode-negative-text': 'var(--darkmode--negative--stimuli--textcolor)',
        'darkmode-negative-container': 'var(--darkmode--negative--stimuli--container)',
        'darkmode-box-shadow': 'var(--darkmode--box--shadow)',
        
        'lightmode-main-bg': 'var(--lightmode--main--bg)',
        'lightmode-container-prim-bg': 'var(--lightmode--container--prim--bg)',
        'lightmode-container-sec-bg': 'var(--lightmode--container--sec--bg)',
        'lightmode-prim-text': 'var(--lightmode--prim--textcolor)',
        'lightmode-sec-text': 'var(--lightmode--sec--textcolor)',
        'lightmode-prim-btn-bg': 'var(--lightmode--prim--btn--bg)',
        'lightmode-prim-btn-text': 'var(--lightmode--prim--btn--text)',
        'lightmode-positive-green': 'var(--lightmode--positvie--stimuli--green)',
        'lightmode-negative-text': 'var(--lightmode--negative--stimuli--textcolor)',
        'lightmode-negative-container': 'var(--lightmode--negative--stimuli--container)',
        'lightmode-box-shadow': 'var(--lightmode--box--shadow)'
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

