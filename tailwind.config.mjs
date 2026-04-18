/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-playfair-display)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '2rem',
                fontWeight: 600,
              },
              h3: {
                fontSize: '1.5rem',
              },
              h4: {
                fontSize: '1.25rem',
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '3rem',
              },
              h3: {
                fontSize: '2rem',
              },
              h4: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      },
    },
  },
}

export default config
