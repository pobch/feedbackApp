import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import formFields from './formFields'

class SurveyFormReview extends Component {
  renderReview = () => {
    return _.map(formFields, ({ label, name }) => {
      return (
        <React.Fragment key={name}>
          <div>{label}</div>
          <div>{this.props.formValues[name]}</div>
        </React.Fragment>
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Confirm your input</h3>
        {this.renderReview()}
        <button type="button" onClick={this.props.onBack}>
          Back
        </button>
        <button
          type="button"
          onClick={() => this.props.submitSurvey(this.props.formValues)}
        >
          Submit
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  }
}

export default connect(
  mapStateToProps,
  actions
)(SurveyFormReview)
