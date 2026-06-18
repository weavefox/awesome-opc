/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1565C0',
        'primary-container': '#1976D2',
        'primary-fixed': '#E3F2FD',
        'on-primary-fixed': '#0D47A1',
        'on-primary-fixed-variant': '#1565C0',
        secondary: '#575e70',
        'secondary-container': '#d9dff5',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#5c6274',
        tertiary: '#006474',
        'tertiary-container': '#007f92',
        background: '#F0F7FF',
        'on-background': '#1A1C1E',
        'surface': '#F0F7FF',
        'surface-bright': '#F0F7FF',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#E8F4FD',
        'surface-container': '#E1EFFB',
        'surface-container-high': '#D6E9F8',
        'surface-container-highest': '#C9E1F4',
        'surface-dim': '#C5DAF0',
        'on-surface': '#1A1C1E',
        'on-surface-variant': '#42474E',
        outline: '#73777F',
        'outline-variant': '#C3C7CF',
        'on-primary': '#ffffff',
        'on-primary-container': '#E8F4FD',
        'accent-green': '#10B981',
        'accent-blue': '#3B82F6',
        'warm-surface': '#F5F9FF',
        'muted-text': '#6B7280',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'inverse-surface': '#2E3236',
        'inverse-on-surface': '#F0F7FF',
        'inverse-primary': '#90CAF9',
        'tertiary-fixed': '#a6eeff',
        'on-tertiary-fixed': '#001f25',
        'secondary-fixed': '#dce2f7',
        'on-secondary-fixed': '#141b2b',
        'border-default': '#C3C7CF'
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
        soft: '0 4px 20px -2px rgba(21, 101, 192, 0.05)',
        layered: '0 10px 15px -3px rgba(21, 101, 192, 0.08), 0 4px 6px -2px rgba(21, 101, 192, 0.04)',
        '3xl': '0 35px 60px -15px rgba(21, 101, 192, 0.25)'
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