import styled from 'styled-components'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import {TrendingContainer} from '../Trending/styledComponents'
import {VideoTitle, Views, UpdatedTime} from '../Home/styledComponents'

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 200px;
  @media screen and (min-width: 450px) and (max-width: 768px) {
    height: 300px;
  }
  @media screen and (min-width: 768px) {
    height: 450px;
  }
`

export const VideoItemDetailsContainer = styled(TrendingContainer)`
  display: flex;
  @media screen and (min-width: 768px) {
    padding: 30px 20px;
  }
`

export const VideoContainer = styled.div`
  flex-grow: 1;
`

export const VideoContentInfoContainer = styled.div`
  padding: 30px 15px;
`

export const VideoTitleElement = styled(VideoTitle)`
  font-size: 19px;
`
export const ViewsUserActionsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const ViewCount = styled(Views)`
  list-style-type: none;
  margin-left: 0px;
  font-size: 15px;
  color: ${props => {
    if (props.darkModeActive) {
      return '#94a3b8'
    }
    return ' #616e7c'
  }};
`
export const UpdatedTimeToNow = styled(UpdatedTime)`
  font-size: 15px;
  color: ${props => {
    if (props.darkModeActive) {
      return '#94a3b8'
    }
    return ' #616e7c'
  }};
`
export const UserActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const UserActionButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 18px;
  padding-left: 0px;
  margin-right: 10px;
  margin-top: 8px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  color: ${props => {
    if (props.isLiked || props.isDisliked || props.isSaved) {
      return ' #2563eb '
    }
    return ' #64748b'
  }};
`

export const LikeIcon = styled(BiLike)`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`

export const DislikeIcon = styled(BiDislike)`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`

export const SaveIcon = styled(BiListPlus)`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`

export const HorizontalLine = styled.hr`
  margin-top: 30px;
  margin-bottom: 30px;
`

export const ChannelInfoContainer = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`

export const SubscriberCountContainer = styled.div``

export const ChannelName = styled(VideoTitle)``

export const Subscribers = styled.p`
  margin-top: 4px;
  color: ${props => {
    if (props.darkModeActive) {
      return '#94a3b8'
    }
    return ' #616e7c'
  }};
  font-family: 'Roboto';
  font-weight: 400;
`

export const VideoDescription = styled(VideoTitle)`
  font-size: 15px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoDescriptionLarge = styled(VideoTitle)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-size: 15px;
    margin-top: 10px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
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
