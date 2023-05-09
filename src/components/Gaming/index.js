import {Component} from 'react'
import Cookies from 'js-cookie'

import Navbar from '../Navbar'
import LoadingView from '../LoadingView'
import ModeContext from '../../context/ModeContext'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import {AppContentContainer, LinkComponent} from '../Home/styledComponents'

import {
  GamingContainer,
  GamingBanner,
  GamingIcon,
  GamingHeading,
  GamingVideosContainer,
  GamingVideoItem,
  GamingVideoTitle,
  GamingThumbnail,
  ViewsCount,
  GamingVideosViewContainer,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'InPROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount = () => {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const trendingVideosUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const modifiedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gamingVideosList: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  render() {
    const {apiStatus, gamingVideosList} = this.state
    return (
      <>
        <Navbar activeTab="Gaming" />
        <AppContentContainer>
          <Sidebar activeTab="Gaming" />
          <ModeContext.Consumer>
            {value => {
              const {darkModeActive} = value

              const renderSuccessView = () => (
                <GamingVideosViewContainer>
                  <GamingBanner darkModeActive={darkModeActive}>
                    <GamingIcon darkmodeactive={`${darkModeActive}`} />
                    <GamingHeading darkModeActive={darkModeActive}>
                      Gaming
                    </GamingHeading>
                  </GamingBanner>
                  <GamingVideosContainer>
                    {gamingVideosList.map(eachVideo => (
                      <GamingVideoItem key={eachVideo.id}>
                        <LinkComponent to={`/videos/${eachVideo.id}`}>
                          <GamingThumbnail
                            src={eachVideo.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <GamingVideoTitle darkModeActive={darkModeActive}>
                            {eachVideo.title}
                          </GamingVideoTitle>
                          <ViewsCount
                            darkModeActive={darkModeActive}
                          >{`${eachVideo.viewCount} Watching Worldwide`}</ViewsCount>
                        </LinkComponent>
                      </GamingVideoItem>
                    ))}
                  </GamingVideosContainer>
                </GamingVideosViewContainer>
              )

              const renderLoadingView = () => <LoadingView />

              const renderFailureView = () => (
                <FailureView onClickRetry={this.onClickRetry} />
              )

              const renderApiResult = () => {
                switch (apiStatus) {
                  case apiStatusConstants.success:
                    return renderSuccessView()
                  case apiStatusConstants.failure:
                    return renderFailureView()
                  case apiStatusConstants.inProgress:
                    return renderLoadingView()
                  default:
                    return null
                }
              }

              return (
                <GamingContainer
                  data-testid="gaming"
                  darkModeActive={darkModeActive}
                >
                  {renderApiResult()}
                </GamingContainer>
              )
            }}
          </ModeContext.Consumer>
        </AppContentContainer>
      </>
    )
  }
}

export default Gaming
