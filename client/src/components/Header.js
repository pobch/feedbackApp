import React, {Component} from 'react'
import {connect} from 'react-redux'

import Payments from './Payments'


class Header extends Component {
  renderMenu = () => {
    switch(this.props.auth) {
      case null:
        // deciding whether an user is logged in or not
        return
      case false:
        // an user is not logged in
        return <li><a href="/auth/google">Log in With Google</a></li>
      default:
        // an user is already logged in
        return [
          <li key="1"><Payments/></li>,
          <li key="2"><a href="/api/logout">Log Out</a></li>
        ]
    }
  }
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">Emaily</a>
          <ul className="right">
            { this.renderMenu() }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => { 
  return { auth } 
}

export default connect(mapStateToProps)(Header)