import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-grow: 1;
  background-color: ${props => {
    if (props.darkModeActive) {
      return '#0f0f0f'
    }
    return '#f9f9f9'
  }};
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const NotFoundImage = styled.img`
  width: 80%;
  max-width: 300px;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  color: ${props => {
    if (props.darkModeActive) {
      return '#ffffff'
    }
    return '#0f0f0f'
  }};
  margin-top: 50px;
`

export const NotFoundText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  color: ${props => {
    if (props.darkModeActive) {
      return '#ffffff'
    }
    return '#212121'
  }};
  text-align: center;
  margin-top: 5px;
`
