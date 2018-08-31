import _ from 'lodash'
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'
import formFields from './formFields'
import SurveyField from './SurveyField'

const renderFields = () => {
  return _.map(formFields, ({ label, name }) => {
    return (
      <Field
        key={name}
        name={name}
        label={label}
        type="text"
        component={SurveyField}
      />
    )
  })
}

const SurveyForm = props => {
  return (
    <form onSubmit={props.handleSubmit(props.onNext)}>
      {renderFields()}
      <Link to="/surveys" className="btn">
        Cancel
      </Link>
      <button type="submit" className="btn right red">
        Next
        <i className="material-icons">done</i>
      </button>
    </form>
  )
}

const validate = values => {
  const errors = {}
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  })
  return errors
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm)
