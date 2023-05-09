import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'
import {VideoTitle, Thumbnail, ChannelLogo} from '../Home/styledComponents'

import {
  TrendingContainer,
  TrendingBanner,
  TrendingHeading,
} from '../Trending/styledComponents'

export const SavedVideosContainer = styled(TrendingContainer)`
  display: flex;
`

export const SavedVideosBanner = styled(TrendingBanner)``

export const TrendingIcon = styled(HiFire)`
  color: #ff0000;
  width: 50px;
  height: 50px;
  background-color: ${props => {
    if (props.darkmodeactive === 'true') {
      return '#000000'
    }
    return '#d7dfe9'
  }};
  padding: 10px;
  border-radius: 30px;
`
export const SavedVideosHeading = styled(TrendingHeading)``

export const TrendingVideosContainer = styled.ul`
  padding-left: 0px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 40px;
  }
`

export const TrendingVideoItem = styled.li`
  list-style-type: none;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) {
    display: flex;
    margin-bottom: 50px;
  }
`
export const TrendingVideoTitle = styled(VideoTitle)`
  font-weight: 500;
`
export const TrendingThumbnail = styled(Thumbnail)`
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const TrendingChannelLogo = styled(ChannelLogo)`
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const NoSavedVideosContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  flex-grow: 1;
`
export const NoSavedVideosImage = styled.img`
  width: 70%;
  max-width: 280px;
`

export const NoSavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 600;
  color: ${props => {
    if (props.darkModeActive) {
      return '#ffffff'
    }
    return '#0f0f0f'
  }};
`

export const NoSavedVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => {
    if (props.darkModeActive) {
      return '#ffffff'
    }
    return '#212121'
  }};
  text-align: center;
`

export const SavedVideosView = styled.div``
