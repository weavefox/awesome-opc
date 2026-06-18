/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#a6311f',
        'primary-container': '#c84934',
        'primary-fixed': '#ffdad4',
        'on-primary-fixed': '#3f0300',
        'on-primary-fixed-variant': '#8a1c0c',
        secondary: '#575e70',
        'secondary-container': '#d9dff5',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#5c6274',
        tertiary: '#006474',
        'tertiary-container': '#007f92',
        background: '#fff8f6',
        'on-background': '#251916',
        'surface': '#fff8f6',
        'surface-bright': '#fff8f6',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#fff0ee',
        'surface-container': '#ffe9e5',
        'surface-container-high': '#fbe3df',
        'surface-container-highest': '#f5ddd9',
        'surface-dim': '#ecd5d1',
        'on-surface': '#251916',
        'on-surface-variant': '#58413d',
        outline: '#8c716c',
        'outline-variant': '#e0bfb9',
        'on-primary': '#ffffff',
        'on-primary-container': '#fffaf9',
        'accent-green': '#10B981',
        'accent-blue': '#3B82F6',
        'warm-surface': '#F9F9F8',
        'muted-text': '#6B7280',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'inverse-surface': '#3b2d2a',
        'inverse-on-surface': '#ffede9',
        'inverse-primary': '#ffb4a6',
        'tertiary-fixed': '#a6eeff',
        'on-tertiary-fixed': '#001f25',
        'secondary-fixed': '#dce2f7',
        'on-secondary-fixed': '#141b2b',
        'border-default': '#e0bfb9'
      },
      fontSize: {
        'headline-xl': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '1.2', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0', fontWeight: '500' }],
        'label-sm': ['13px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '500' }]
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        full: '9999px'
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(166, 49, 31, 0.05)',
        layered: '0 10px 15px -3px rgba(166, 49, 31, 0.08), 0 4px 6px -2px rgba(166, 49, 31, 0.04)',
        '3xl': '0 35px 60px -15px rgba(166, 49, 31, 0.25)'
      },
      maxWidth: {
        'container-max': '1280px',
        'max-width': '1280px'
      },
      spacing: {
        'margin-desktop': '48px',
        'margin-mobile': '16px',
        'section-padding': '80px'
      }
    }
  },
  plugins: []
};