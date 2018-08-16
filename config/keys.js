// heroku auto add NODE_ENV env var
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
} else {
  module.exports = require('./dev')
}
