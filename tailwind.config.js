const { borderRadius } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // eh possivel criar variaveis adicionais de cores alem do padrao do tailwind
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
      },
      //sobrescrever uma variavel do tailwind
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    //required para stilizacao do forms, tem a documentacao do tailwind
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
