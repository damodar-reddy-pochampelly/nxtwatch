import {
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
} from './styledComponents'
import ModeContext from '../../context/ModeContext'

const FailureView = props => (
  <ModeContext.Consumer>
    {value => {
      const {darkModeActive} = value
      const {onClickRetry} = props

      const onRetry = () => {
        onClickRetry()
      }

      return (
        <FailureViewContainer>
          <FailureViewImage
            src={
              darkModeActive
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
            alt="failure view"
          />
          <FailureViewHeading darkModeActive={darkModeActive}>
            Oops! Something Went Wrong
          </FailureViewHeading>
          <FailureViewDescription>
            We are having some trouble to complete your request. Please try
            again.
          </FailureViewDescription>
          <RetryButton onClick={onRetry} type="button">
            Retry
          </RetryButton>
        </FailureViewContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default FailureView
