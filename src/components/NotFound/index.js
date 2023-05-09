import ModeContext from '../../context/ModeContext'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

import {AppContentContainer} from '../Home/styledComponents'

const NotFound = () => (
  <>
    <Navbar />
    <AppContentContainer>
      <Sidebar />
      <ModeContext.Consumer>
        {value => {
          const {darkModeActive} = value

          return (
            <NotFoundContainer
              darkModeActive={darkModeActive}
              data-testid="videoItemDetails"
            >
              <NotFoundImage
                src={
                  darkModeActive
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading darkModeActive={darkModeActive}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundText darkModeActive={darkModeActive}>
                We are sorry, the page you requested could not be found.
              </NotFoundText>
            </NotFoundContainer>
          )
        }}
      </ModeContext.Consumer>
    </AppContentContainer>
  </>
)

export default NotFound
