import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actions from '../../actions'
import formFields from './formFields'

const SurveyFormReview = ({ onBack, formValues, submitSurvey, history }) => {
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
      <h5>Please confirm your entries</h5>
      {renderReview}
      <button
        type="button"
        className="yellow darken-3 btn-flat white-text"
        onClick={onBack}
      >
        Back
      </button>
      <button
        type="button"
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
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
)(withRouter(SurveyFormReview))
