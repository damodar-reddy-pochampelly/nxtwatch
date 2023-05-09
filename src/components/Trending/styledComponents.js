import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'
import {
  VideoTitle,
  HomeContainer,
  Thumbnail,
  ChannelLogo,
} from '../Home/styledComponents'

export const TrendingContainer = styled(HomeContainer)`
  padding-bottom: 20px;
  background-color: ${props => {
    if (props.darkModeActive) {
      return '#0f0f0f'
    }
    return '#f9f9f9'
  }};
`

export const TrendingBanner = styled.div`
  background-color: ${props => {
    if (props.darkModeActive) {
      return '#212121'
    }
    return '#f1f1f1'
  }};
  display: flex;
  align-items: center;
  padding: 15px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
  }
`

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
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 20px;
  color: ${props => {
    if (props.darkModeActive) {
      return '#f9f9f9'
    }
    return '#0f0f0f'
  }};
  margin-left: 20px;
`
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
