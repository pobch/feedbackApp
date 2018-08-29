import React, { Component } from 'react'

class SurveyNew extends Component {
  state = {
    showReview: false
  }

  renderContent = () => {
    if (this.state.showReview) {
      return <div>Review</div>
    }
    return <div>Form</div>
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

export default SurveyNew
