import Loader from 'react-loader-spinner'

import {LoadingContainer} from './styledComponents'
import ModeContext from '../../context/ModeContext'

const LoadingView = () => (
  <ModeContext.Consumer>
    {value => {
      const {darkModeActive} = value

      return (
        <LoadingContainer data-testid="loader">
          <Loader
            type="ThreeDots"
            color={darkModeActive ? '#ffffff' : ' #181818'}
            height="50"
            width="50"
          />
        </LoadingContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default LoadingView
