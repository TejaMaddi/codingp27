// Write your JS code here
import './index.css'

import {Component} from 'react'

class LoginForm extends Component {
  state = {
    userInput: '',
    passwordInput: '',
    errorMsg: '',
    showSubmitError: false,
  }

  onChangeUser = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  onChangePass = event => {
    this.setState({
      passwordInput: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {userInput, passwordInput} = this.state
    const userDetails = {userInput, passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {userInput, passwordInput, showSubmitError, errorMsg} = this.state
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <div className="medium-login">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login"
          />
          <form className="form" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-medium"
            />
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="input-element"
              onChange={this.onChangeUser}
              value={userInput}
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="input-element"
              value={passwordInput}
              onChange={this.onChangePass}
            />
            <button type="submit" className="login-button">
              Login
            </button>
            {showSubmitError && <p className="error-message">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
