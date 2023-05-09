import Cookies from 'js-cookie'
import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import ModeContext from '../../context/ModeContext'
import LoadingView from '../LoadingView'
import FailureView from '../FailureView'

import {
  AppContentContainer,
  HomeContainer,
  BannerContainer,
  BannerContentContainer,
  CompanyLogo,
  BannerDescription,
  BannerButton,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeVideosContainer,
  HomeVideoItem,
  Thumbnail,
  ChannelContainer,
  ChannelLogo,
  VideoTitle,
  VideoInfoContainer,
  NameViewsContainer,
  ChannelName,
  ViewsContainerSmall,
  ViewsContainerLarge,
  Views,
  UpdatedTime,
  SearchIcon,
  CloseIcon,
  NoSearchResultImage,
  NoSearchResultsFoundHeading,
  NoSearchResultsDescription,
  RetryButton,
  NoSearchResultsContainer,
  LinkComponent,
  Dot,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Home extends Component {
  state = {
    bannerClosed: false,
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount = () => {
    this.getVideosDetails()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideosDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
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
        videosList: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onFilterSearch = () => {
    const {searchInput} = this.state
    this.setState({searchInput}, this.getVideosDetails)
  }

  OnCloseBanner = () => {
    this.setState(prevState => ({bannerClosed: !prevState.bannerClosed}))
  }

  onClickRetry = () => {
    this.getVideosDetails()
  }

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerContentContainer>
        <CompanyLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <BannerButton>GET IT NOW</BannerButton>
      </BannerContentContainer>
      <BannerCloseButton data-testid="close" onClick={this.OnCloseBanner}>
        <CloseIcon />
      </BannerCloseButton>
    </BannerContainer>
  )

  render() {
    const {bannerClosed} = this.state
    return (
      <>
        <Navbar activeTab="Home" />
        <AppContentContainer>
          <Sidebar activeTab="Home" />
          <ModeContext.Consumer>
            {value => {
              const {darkModeActive} = value

              const renderSearchContainer = () => (
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                    darkModeActive={darkModeActive}
                  />
                  <SearchButton
                    type="button"
                    data-testid="searchButton"
                    onClick={this.onFilterSearch}
                    darkModeActive={darkModeActive}
                  >
                    <SearchIcon darkmodeactive={`${darkModeActive}`} />
                  </SearchButton>
                </SearchContainer>
              )

              const renderLoadingView = () => <LoadingView />

              const renderSuccessView = () => {
                const {videosList} = this.state

                if (videosList.length === 0) {
                  return (
                    <NoSearchResultsContainer>
                      <NoSearchResultImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        alt="no videos"
                      />
                      <NoSearchResultsFoundHeading
                        darkModeActive={darkModeActive}
                      >
                        No Search results found
                      </NoSearchResultsFoundHeading>
                      <NoSearchResultsDescription>
                        Try different key words or remove search filter
                      </NoSearchResultsDescription>
                      <RetryButton
                        onClick={this.getVideosDetails}
                        type="button"
                      >
                        Retry
                      </RetryButton>
                    </NoSearchResultsContainer>
                  )
                }

                return (
                  <HomeVideosContainer>
                    {videosList.map(eachVideo => (
                      <HomeVideoItem key={eachVideo.id}>
                        <LinkComponent to={`/videos/${eachVideo.id}`}>
                          <Thumbnail
                            src={eachVideo.thumbnailUrl}
                            alt="video thumbnail"
                          />
                          <ChannelContainer>
                            <ChannelLogo
                              src={eachVideo.channel.profileImageUrl}
                              alt="channel logo"
                            />
                            <VideoInfoContainer>
                              <VideoTitle darkModeActive={darkModeActive}>
                                {eachVideo.title}
                              </VideoTitle>
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
                        </LinkComponent>
                      </HomeVideoItem>
                    ))}
                  </HomeVideosContainer>
                )
              }

              const renderFailureView = () => (
                <FailureView onClickRetry={this.onClickRetry} />
              )

              const renderApiResult = () => {
                const {apiStatus} = this.state

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
                <HomeContainer
                  data-testid="home"
                  darkModeActive={darkModeActive}
                >
                  {bannerClosed ? null : this.renderBanner()}
                  {renderSearchContainer()}
                  {renderApiResult()}
                </HomeContainer>
              )
            }}
          </ModeContext.Consumer>
        </AppContentContainer>
      </>
    )
  }
}

export default Home
