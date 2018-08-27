const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredit = require('../middlewares/requireCredit')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')
const Mailer = require('../services/Mailer')

const Survey = mongoose.model('Survey')

module.exports = app => {
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
      res.send('11111111')
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
