import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Payments from './Payments'

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        // deciding whether an user is logged in or not
        return
      case false:
        // an user is not logged in
        return (
          <li>
            <a href="/auth/google">Log in With Google</a>
          </li>
        )
      default:
        // an user is already logged in
        return [
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credit : {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Log Out</a>
          </li>
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            GetFeedback
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(Header)
