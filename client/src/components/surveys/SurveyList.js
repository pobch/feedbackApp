import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys()
  }

  // prettier-ignore
  renderSurveys = () => {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">{`Sent on: ${new Date(survey.dateSent).toLocaleDateString()}`}</p>
          </div>
          <div className="card-action">
            <a>{`YES: ${survey.yes}`}</a>
            <a>{`NO: ${survey.no}`}</a>
          </div>
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderSurveys()}</div>
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys }
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList)