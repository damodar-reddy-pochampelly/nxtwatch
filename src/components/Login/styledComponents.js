import styled from 'styled-components'

export const LoginRouteBGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => {
    if (props.darkModeActive) {
      return '#383838'
    }
    return '#ffffff'
  }};
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  box-shadow: 4px 4px 20px
    ${props => {
      if (props.darkModeActive) {
        return '#0f0f0f'
      }
      return '#e2e8f0'
    }};
  padding: 30px 20px;
  background-color: ${props => {
    if (props.darkModeActive) {
      return '#000000'
    }
    return '#ffffff'
  }};
  @media screen and (min-width: 768px) {
    padding: 40px 30px;
  }
`

export const TitleImage = styled.img`
  width: 130px;
  align-self: center;
`

export const FormElement = styled.form`
  margin-bottom: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const InputLabel = styled.label`
  color: ${props => {
    if (props.darkModeActive) {
      return `#ffffff`
    }
    return `#7e858e`
  }};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
`
export const InputElement = styled.input`
  color: ${props => {
    if (props.darkModeActive) {
      return `#ffffff`
    }
    return ` #475569`
  }};
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: normal;
  border: 1px solid #94a3b8;
  padding: 8px 15px;
  margin-top: 10px;
  outline: none;
`
export const CheckboxInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`
export const CheckboxLabel = styled(InputLabel)`
  color: ${props => {
    if (props.darkModeActive) {
      return `#ffffff`
    }
    return `#1e293b`
  }};
  font-size: 14px;
`
export const CheckboxInput = styled(InputElement)`
  height: 15px;
  width: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 8px;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 15px;
  border: none;
  font-weight: 500;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
`
export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #ff0b37;
  margin-top: 5px;
`
