const _ = require('lodash')
const Path = require('path-parser').default
const { URL } = require('url')
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredit = require('../middlewares/requireCredit')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
const Mailer = require('../services/Mailer')

const Survey = mongoose.model('Survey')

module.exports = app => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for your feedback!')
  })

  app.post('/api/surveys/webhook', (req, res) => {
    const events = _.map(req.body, ({ url }) => {
      const pathname = new URL(url).pathname
      const p = new Path('/api/surveys/:surveyId/:choice')
      return p.test(pathname)
    })
    console.log(events)
    res.send('OK')
  })

  app.post('/api/surveys', requireLogin, requireCredit, async (req, res) => {
    const { title, subject, body, recipients } = req.body

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    })

    const mailer = new Mailer(survey, surveyTemplate(survey))
    try {
      await mailer.send()
      await survey.save()
      req.user.credits -= 1
      const user = await req.user.save()

      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
