module.exports = {
  content: [
    './layouts/**/*.html',
  ],
  theme: {
    extend: {
        colors: {
          'body': '#17171F',
          'selected-text': '#00ABE4',
          'theme': '#3F3FFF',
          'nav': '#404053',
          'secondary': '#9191a4',
          'badge': '#3F3F51',
          'input-border': '#00ABE4',
          'input': '#2A2A35'
        },
        'fontFamily': {
          'poppins': ['Poppins', 'sans-serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
        },
      },
    },
    
  plugins: [
    require('@tailwindcss/typography')
  ],
}
