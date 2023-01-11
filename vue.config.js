 

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/panel/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}