if (process.env.NODE_ENV === 'production') { // heroku auto add this env var
  module.exports = require('./prod')
} else {
  module.exports = require('./dev')
}