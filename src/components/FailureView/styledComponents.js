import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  align-self: stretch;
  justify-content: center;
  flex-grow: 1;
`

export const FailureViewImage = styled.img`
  width: 50%;
  max-width: 250px;
`

export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => {
    if (props.darkModeActive) {
      return ' #f9f9f9'
    }
    return '#1e293b'
  }};
  margin-top: 30px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 20px;
  }
`
export const FailureViewDescription = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 15px;
  color: #64748b;
  margin-top: 0px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  color: #f9f9f9;
  font-family: 'Roboto';
  background-color: #4f46e5;
  font-size: 13px;
  font-weight: 500;
  border: none;
  padding: 8px 25px;
  border-radius: 3px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 15px;
  }
`
