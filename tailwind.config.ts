import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    colors: {
      purple: {
        light: {
          normal: '#f2e6ff',
          hover: '#ecd9ff',
          active: '#d8b0ff',
        },
        normal: {
          normal: '#8000ff',
          hover: '#7300e6',
          active: '#6600cc',
        },
        dark: {
          normal: '#6000bf',
          darkhover: '#4d0099',
          darkactive: '#3a0073',
        },
        darker: '#2d0059',
      },
      gray: {
        light: {
          normal: '#f5f6f6',
          lighthover: '#f1f1f1',
          lightactive: '#e1e2e2',
        },
        normal: {
          normal: '#9fa0a0',
          normalhover: '#8f9090',
          normalactive: '#7f8080',
        },
        dark: {
          normal: '#777878',
          darkhover: '#5f6060',
          darkactive: '#484848',
        },
        darker: '#383838',
      },
      semantic: {
        info: {
          normal: '#0090ff',
          dark: '#006cbf',
        },
        success: {
          normal: '#9ae214',
          dark: '#74aa0f',
        },
        warning: {
          normal: '#ffd002',
          dark: '#bf9c02',
        },
        danger: {
          normal: '#ff4457',
          dark: '#bf3341',
        },
      },
    },
  },
  plugins: [],
};

export default config;
