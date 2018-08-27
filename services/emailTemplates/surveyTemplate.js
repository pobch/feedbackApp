const keys = require('../../config/keys')

const surveyTemplate = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>We'd love to hear from you</h3>
          <p>Please answer the following question :</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}">No</a>
          </div>
        </div>
      </body>
    </html>
  `
}

module.exports = surveyTemplate
