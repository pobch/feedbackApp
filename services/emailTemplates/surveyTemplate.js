const keys = require('../../config/keys')

// prettier-ignore
const surveyTemplate = survey => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>We'd love to hear from you</h3>
          <p>Please answer the following question :</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey._id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey._id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `
}
// prettier-ignore-end

module.exports = surveyTemplate
