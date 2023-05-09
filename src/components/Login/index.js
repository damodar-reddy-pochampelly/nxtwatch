import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import ModeContext from '../../context/ModeContext'
import {
  LoginRouteBGContainer,
  LoginFormContainer,
  TitleImage,
  FormElement,
  InputLabel,
  InputElement,
  InputContainer,
  CheckboxInputContainer,
  CheckboxLabel,
  CheckboxInput,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    errorMessage: ``,
    showErrorMsg: false,
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const loginUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({errorMessage: errorMsg, showErrorMsg: true})
    }
  }

  render() {
    const {showPassword, errorMessage, showErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ModeContext.Consumer>
        {value => {
          const {darkModeActive} = value

          return (
            <LoginRouteBGContainer darkModeActive={darkModeActive}>
              <LoginFormContainer darkModeActive={darkModeActive}>
                <TitleImage
                  src={
                    darkModeActive
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <FormElement onSubmit={this.onSubmitForm}>
                  <InputContainer>
                    <InputLabel
                      htmlFor="USERNAME"
                      darkModeActive={darkModeActive}
                    >
                      USERNAME
                    </InputLabel>
                    <InputElement
                      type="text"
                      id="USERNAME"
                      placeholder="Username"
                      onChange={this.onChangeUserName}
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel
                      htmlFor="PASSWORD"
                      darkModeActive={darkModeActive}
                    >
                      PASSWORD
                    </InputLabel>
                    <InputElement
                      type={showPassword ? 'text' : 'password'}
                      id="PASSWORD"
                      placeholder="Password"
                      onChange={this.onChangePassword}
                    />
                  </InputContainer>
                  <CheckboxInputContainer>
                    <CheckboxInput
                      type="checkbox"
                      id="SHOW_PASSWORD"
                      onChange={this.onClickShowPassword}
                    />
                    <CheckboxLabel
                      htmlFor="SHOW_PASSWORD"
                      darkModeActive={darkModeActive}
                    >
                      Show Password
                    </CheckboxLabel>
                  </CheckboxInputContainer>
                  <LoginButton>Login</LoginButton>
                  {showErrorMsg && <ErrorMessage>*{errorMessage}</ErrorMessage>}
                </FormElement>
              </LoginFormContainer>
            </LoginRouteBGContainer>
          )
        }}
      </ModeContext.Consumer>
    )
  }
}

export default Login
