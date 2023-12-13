import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    colors: {
      white: '#fff',
      purple: {
        light: {
          normal: '#e9ebf8',
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
          hover: '#4d0099',
          active: '#3a0073',
        },
        darker: '#2d0059',
      },
      gray: {
        light: {
          normal: '#f5f6f6',
          hover: '#f1f1f1',
          active: '#e1e2e2',
        },
        normal: {
          normal: '#9fa0a0',
          hover: '#8f9090',
          active: '#7f8080',
        },
        dark: {
          normal: '#777878',
          hover: '#5f6060',
          active: '#484848',
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
    fontFamily: {
      Pretendard: ['Pretendard', 'sans-serif'],
      GmarketSans: ['GmarketSans', 'sans-serif'],
      'S-CoreDream': ['S-CoreDream', 'sans-serif'],
      'yg-jalnan': ['yg-jalnan', 'sans-serif'],
      Cafe24Ssurround: ['Cafe24Ssurround', 'sans-serif'],
      NanumSquare: ['NanumSquare', 'sans-serif'],
      NotoSansKR: ['NotoSansKR', 'sans-serif'],
      Chosunilbo_myungjo: ['Chosunilbo_myungjo', 'serif'],
      'KBO-Dia-Gothic': ['KBO-Dia-Gothic', 'sans-serif'],
      BMJUA: ['BMJUA', 'sans-serif'],
      Hahmlet: ['Hahmlet', 'sans-serif'],
      GyeonggiTitle: ['GyeonggiTitle', 'sans-serif'],
    },
  },
  plugins: [],
};

export default config;
