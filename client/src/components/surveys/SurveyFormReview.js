import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import formFields from './formFields'

const SurveyFormReview = ({ onBack, formValues, submitSurvey }) => {
  const renderReview = _.map(formFields, ({ label, name }) => {
    return (
      <React.Fragment key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </React.Fragment>
    )
  })

  return (
    <div>
      <h3>Confirm your input</h3>
      {renderReview}
      <button type="button" onClick={onBack}>
        Back
      </button>
      <button type="button" onClick={() => submitSurvey(formValues)}>
        Submit
      </button>
    </div>
  )
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
