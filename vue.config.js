module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-event-card/'
    : '/',
  css: {
    extract: false
  }
}