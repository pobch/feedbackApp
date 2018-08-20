const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json())
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in millisecond
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())
// NOTE :
// See how cookie-session and passport work together on
// 'Adding MongoDB' > '[Optional] A Deeper Dive' of the course.

require('./routes/authRoute')(app)
require('./routes/billingRoutes')(app)

if (process.env.NODE_ENV === 'production') {
  // serve static files:
  app.use(express.static('client/build')) // All files in this folder could be accessed via '/' route

  // serve 'index.html' to all remain routes:
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
