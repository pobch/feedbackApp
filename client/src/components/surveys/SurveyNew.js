import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

import SurveyForm from './SurveyForm'

class SurveyNew extends Component {
  state = {
    showReview: false
  }

  renderContent = () => {
    if (this.state.showReview) {
      return <div>Review</div>
    }
    return <SurveyForm onNext={() => this.setState({ showReview: true })} />
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)
