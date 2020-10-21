const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${resolve('./src/styles/vars.less')}";`,
        }
      }
    }
  }
}