const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PrerenderSpaPlugin(
            path.join(__dirname, 'dist'),
            [ '/', '/about' ]
          )
        ]
      }
    }
  }
}
