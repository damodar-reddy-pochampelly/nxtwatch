import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'

import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import LoadingView from '../LoadingView'
import ModeContext from '../../context/ModeContext'
import {
  VideoItemDetailsContainer,
  VideoContainer,
  VideoTitleElement,
  VideoContentInfoContainer,
  ViewCount,
  UpdatedTimeToNow,
  UserActionButtonsContainer,
  UserActionButton,
  LikeIcon,
  DislikeIcon,
  SaveIcon,
  HorizontalLine,
  ChannelInfoContainer,
  ChannelLogo,
  SubscriberCountContainer,
  ChannelName,
  Subscribers,
  VideoDescription,
  ViewsUserActionsContainer,
  VideoDescriptionLarge,
  VideoPlayerContainer,
  ViewsContainer,
  FailureViewContainer,
  FailureViewImage,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
} from './styledComponents'
import {Dot, AppContentContainer} from '../Home/styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount = () => {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoItemDetailsUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoItemDetailsUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const modifiedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
      }
      this.setState({
        videoDetails: modifiedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDisLikeButton = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisliked: !prevState.isDisliked,
    }))
  }

  onClickSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  onClickRetry = () => {
    this.getVideoItemDetails()
  }

  render() {
    const {apiStatus, videoDetails, isLiked, isDisliked, isSaved} = this.state

    return (
      <>
        <Navbar />
        <AppContentContainer>
          <Sidebar />
          <ModeContext.Consumer>
            {value => {
              const {
                darkModeActive,
                addToSavedVideos,
                removeFromSavedVideos,
              } = value

              const onClickAddToSave = () => {
                this.onClickSave()
                addToSavedVideos(videoDetails)
              }

              const onClickRemoveFromSave = () => {
                this.onClickSave()
                removeFromSavedVideos(videoDetails)
              }

              const renderSuccessView = () => (
                <VideoContainer>
                  <VideoPlayerContainer>
                    <ReactPlayer
                      url={videoDetails.videoUrl}
                      width="100%"
                      height="100%"
                    />
                  </VideoPlayerContainer>
                  <VideoContentInfoContainer>
                    <VideoTitleElement darkModeActive={darkModeActive}>
                      {videoDetails.title}
                    </VideoTitleElement>
                    <ViewsUserActionsContainer>
                      <ViewsContainer>
                        <ViewCount darkModeActive={darkModeActive}>
                          {videoDetails.viewCount} views
                        </ViewCount>
                        <Dot />
                        <UpdatedTimeToNow darkModeActive={darkModeActive}>
                          {`${formatDistanceToNow(
                            new Date(videoDetails.publishedAt),
                          )
                            .split(' ')
                            .slice(1)
                            .join(' ')} ago`}
                        </UpdatedTimeToNow>
                      </ViewsContainer>
                      <UserActionButtonsContainer>
                        <UserActionButton
                          type="button"
                          onClick={this.onClickLikeButton}
                          isLiked={isLiked}
                        >
                          <LikeIcon /> Like
                        </UserActionButton>
                        <UserActionButton
                          type="button"
                          onClick={this.onClickDisLikeButton}
                          isDisliked={isDisliked}
                        >
                          <DislikeIcon /> Dislike
                        </UserActionButton>
                        {!isSaved ? (
                          <UserActionButton
                            type="button"
                            onClick={onClickAddToSave}
                          >
                            <SaveIcon /> Save
                          </UserActionButton>
                        ) : (
                          <UserActionButton
                            type="button"
                            isSaved={isSaved}
                            onClick={onClickRemoveFromSave}
                          >
                            <SaveIcon /> Saved
                          </UserActionButton>
                        )}
                      </UserActionButtonsContainer>
                    </ViewsUserActionsContainer>
                    <HorizontalLine />
                    <ChannelInfoContainer>
                      <ChannelLogo
                        src={videoDetails.channel.profileImageUrl}
                        alt="channel logo"
                      />
                      <SubscriberCountContainer>
                        <ChannelName darkModeActive={darkModeActive}>
                          {videoDetails.channel.name}
                        </ChannelName>
                        <Subscribers darkModeActive={darkModeActive}>
                          {videoDetails.channel.subscriberCount} subscribers
                        </Subscribers>
                        <VideoDescriptionLarge darkModeActive={darkModeActive}>
                          {videoDetails.description}
                        </VideoDescriptionLarge>
                      </SubscriberCountContainer>
                    </ChannelInfoContainer>
                    <VideoDescription darkModeActive={darkModeActive}>
                      {videoDetails.description}
                    </VideoDescription>
                  </VideoContentInfoContainer>
                </VideoContainer>
              )

              const renderLoadingView = () => <LoadingView />

              const renderFailureView = () => (
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
                    We are having some trouble to complete your request. Please
                    try again.
                  </FailureViewDescription>
                  <RetryButton onClick={this.getVideoItemDetails} type="button">
                    Retry
                  </RetryButton>
                </FailureViewContainer>
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
                <VideoItemDetailsContainer
                  data-testid="videoItemDetails"
                  darkModeActive={darkModeActive}
                >
                  {renderApiResult()}
                </VideoItemDetailsContainer>
              )
            }}
          </ModeContext.Consumer>
        </AppContentContainer>
      </>
    )
  }
}

export default VideoItemDetails
