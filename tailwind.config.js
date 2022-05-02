module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // eh possivel criar variaveis adicionais de cores alem do padrao do tailwind
      colors: {
        brand: {
          500: '#8257e6',
        }
      }
    },
  },
  plugins: [],
}
