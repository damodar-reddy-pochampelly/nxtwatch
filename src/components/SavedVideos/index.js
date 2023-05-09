import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import Navbar from '../Navbar'
import ModeContext from '../../context/ModeContext'
import Sidebar from '../Sidebar'
import {
  ChannelContainer,
  VideoInfoContainer,
  NameViewsContainer,
  ChannelName,
  Dot,
  Views,
  UpdatedTime,
  AppContentContainer,
  ViewsContainerSmall,
  ViewsContainerLarge,
  LinkComponent,
} from '../Home/styledComponents'

import {
  SavedVideosContainer,
  SavedVideosBanner,
  TrendingIcon,
  SavedVideosHeading,
  TrendingVideosContainer,
  TrendingVideoItem,
  TrendingVideoTitle,
  TrendingThumbnail,
  TrendingChannelLogo,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
  SavedVideosView,
} from './styledComponents'

class Trending extends Component {
  render() {
    return (
      <>
        <Navbar activeTab="SavedVideos" />
        <AppContentContainer>
          <Sidebar activeTab="SavedVideos" />
          <ModeContext.Consumer>
            {value => {
              const {darkModeActive, savedVideosList} = value

              const renderSuccessView = () => {
                if (savedVideosList.length === 0) {
                  return (
                    <NoSavedVideosContainer>
                      <NoSavedVideosImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                        alt=" no saved videos"
                      />
                      <NoSavedVideosHeading darkModeActive={darkModeActive}>
                        No saved videos found
                      </NoSavedVideosHeading>
                      <NoSavedVideosText darkModeActive={darkModeActive}>
                        You can save your videos while watching them
                      </NoSavedVideosText>
                    </NoSavedVideosContainer>
                  )
                }

                return (
                  <SavedVideosView>
                    <SavedVideosBanner darkModeActive={darkModeActive}>
                      <TrendingIcon darkmodeactive={`${darkModeActive}`} />
                      <SavedVideosHeading darkModeActive={darkModeActive}>
                        Saved Videos
                      </SavedVideosHeading>
                    </SavedVideosBanner>
                    <TrendingVideosContainer>
                      {savedVideosList.map(eachVideo => (
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
                  </SavedVideosView>
                )
              }

              return (
                <SavedVideosContainer
                  data-testid="savedVideos"
                  darkModeActive={darkModeActive}
                >
                  {renderSuccessView()}
                </SavedVideosContainer>
              )
            }}
          </ModeContext.Consumer>
        </AppContentContainer>
      </>
    )
  }
}

export default Trending
