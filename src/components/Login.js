import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {fakeAuth} from '../utils/helpers'

class Login extends React.Component {
  state = {
    redirectToRefferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToRefferrer: true
      }))
    })
  }

  render() {
    const { redirectToRefferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToRefferrer === true) {
      return (
        <Redirect to={from} />
      )
    }

    return (
      <div>
        <p>You must log in to view this page at {from.pathname}</p>
        <button onClick={this.login}>Log in </button>
      </div>
    )

  }
}

export default Login