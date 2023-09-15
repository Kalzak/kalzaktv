/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "10px 10px 0px -1px rgba(0,0,0,1)",
      },
      colors: {
        tvblue: {
          0: '#E6E6F9',
          1: '#C2C2F2',
          2: '#9E9EEC',
          3: '#7A7AE5',
          4: '#5555DF',
          5: '#3131D9',
          6: '#0C01DC',
          7: '#0B01C2',
          8: '#0901A8',
          9: '#07018E',
          10: '#050173',
        },
        tvblueinverse: '#f3fe23',
        tvgreen: {
          0: '#E6FCE6',
          1: '#C2FAC2',
          2: '#9EF79E',
          3: '#79F479',
          4: '#55F255',
          5: '#31F031',
          6: '#05ED09',
          7: '#05D208',
          8: '#05B707',
          9: '#059C06',
          10: '#058105',
        },
        tvgreeninverse: '#fa12f6',
        tvpink: {
          0: '#F6E6F1',
          1: '#EDA3DC',
          2: '#E561C7',
          3: '#E21FB2',
          4: '#DF009D',
          5: '#DC0089',
          6: '#E108D9',
          7: '#C207C0',
          8: '#A306A7',
          9: '#85008D',
          10: '#670073',
        },
        tvpinkinverse: '#1ef726',
        tvred: {
          0: '#F6E6E6',
          1: '#EDB3B3',
          2: '#E58181',
          3: '#E25050',
          4: '#DF2020',
          5: '#DC0000',
          6: '#E80409',
          7: '#C70308',
          8: '#A60206',
          9: '#850405',
          10: '#670303',
        },
        tvredinverse: '#17fbf6',
        tvlightblue: {
          0: '#E6F8F8',
          1: '#B3F1F1',
          2: '#81EBEB',
          3: '#4FE6E6',
          4: '#1EE2E2',
          5: '#00DEDE',
          6: '#09EBEB',
          7: '#08CFCF',
          8: '#06B3B3',
          9: '#089797',
          10: '#067B7B',
        },
        tvlightblueinverse: '#f61414',
        tvyellow: {
          0: '#F9F8E6',
          1: '#F3F2C2',
          2: '#EDEC9E',
          3: '#E8E57A',
          4: '#E4DF55',
          5: '#E1DA31',
          6: '#E6EB13',
          7: '#C7D112',
          8: '#A9B710',
          9: '#8A9D0E',
          10: '#6C830C',
        },
        tvyellowinverse: '#1914ec',
        tvwhite: '#ebebea',
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-tv(blue|green|pink|red|lightblue|yellow|white)/
    } 
  ]
}

