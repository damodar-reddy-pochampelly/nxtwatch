import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'

import Navbar from '../Navbar'
import LoadingView from '../LoadingView'
import ModeContext from '../../context/ModeContext'
import Sidebar from '../Sidebar'
import FailureView from '../FailureView'
import {
  ChannelContainer,
  VideoInfoContainer,
  NameViewsContainer,
  ChannelName,
  Views,
  Dot,
  UpdatedTime,
  AppContentContainer,
  ViewsContainerSmall,
  ViewsContainerLarge,
  LinkComponent,
} from '../Home/styledComponents'

import {
  TrendingContainer,
  TrendingBanner,
  TrendingIcon,
  TrendingHeading,
  TrendingVideosContainer,
  TrendingVideoItem,
  TrendingVideoTitle,
  TrendingThumbnail,
  TrendingChannelLogo,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const trendingVideosUrl = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        trendingVideosList: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  render() {
    const {apiStatus, trendingVideosList} = this.state
    return (
      <>
        <Navbar activeTab="Trending" />
        <AppContentContainer>
          <Sidebar activeTab="Trending" />
          <ModeContext.Consumer>
            {value => {
              const {darkModeActive} = value

              const renderSuccessView = () => (
                <>
                  <TrendingBanner darkModeActive={darkModeActive}>
                    <TrendingIcon darkmodeactive={`${darkModeActive}`} />
                    <TrendingHeading darkModeActive={darkModeActive}>
                      Trending
                    </TrendingHeading>
                  </TrendingBanner>
                  <TrendingVideosContainer>
                    {trendingVideosList.map(eachVideo => (
                      <LinkComponent
                        to={`/videos/${eachVideo.id}`}
                        key={eachVideo.id}
                      >
                        <TrendingVideoItem>
                          <TrendingThumbnail
                            src={eachVideo.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <ChannelContainer>
                            <TrendingChannelLogo
                              src={eachVideo.channel.profileImageUrl}
                              alt="channel logo"
                            />
                            <VideoInfoContainer>
                              <TrendingVideoTitle
                                darkModeActive={darkModeActive}
                              >
                                {eachVideo.title}
                              </TrendingVideoTitle>
                              <NameViewsContainer>
                                <ChannelName>
                                  {eachVideo.channel.name}
                                </ChannelName>
                                <ViewsContainerSmall>
                                  <Dot />
                                  <Views>{eachVideo.viewCount}</Views>
                                  <Dot />
                                  <UpdatedTime>
                                    {`${formatDistanceToNow(
                                      new Date(eachVideo.publishedAt),
                                    )
                                      .split(' ')
                                      .slice(1)
                                      .join(' ')} ago`}
                                  </UpdatedTime>
                                </ViewsContainerSmall>
                                <ViewsContainerLarge>
                                  <Views>{eachVideo.viewCount}</Views>
                                  <Dot />
                                  <UpdatedTime>
                                    {`${formatDistanceToNow(
                                      new Date(eachVideo.publishedAt),
                                    )
                                      .split(' ')
                                      .slice(1)
                                      .join(' ')} ago`}
                                  </UpdatedTime>
                                </ViewsContainerLarge>
                              </NameViewsContainer>
                            </VideoInfoContainer>
                          </ChannelContainer>
                        </TrendingVideoItem>
                      </LinkComponent>
                    ))}
                  </TrendingVideosContainer>
                </>
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
                <TrendingContainer
                  data-testid="trending"
                  darkModeActive={darkModeActive}
                >
                  {renderApiResult()}
                </TrendingContainer>
              )
            }}
          </ModeContext.Consumer>
        </AppContentContainer>
      </>
    )
  }
}

export default Trending
