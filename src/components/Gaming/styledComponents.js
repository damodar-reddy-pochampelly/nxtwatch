import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'
import {VideoTitle, Thumbnail} from '../Home/styledComponents'

import {
  TrendingContainer,
  TrendingBanner,
  TrendingHeading,
} from '../Trending/styledComponents'

export const GamingContainer = styled(TrendingContainer)`
  display: flex;
`
export const GamingVideosViewContainer = styled.div``

export const GamingBanner = styled(TrendingBanner)`
  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 20px 30px;
  }
`

export const GamingIcon = styled(SiYoutubegaming)`
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
export const GamingHeading = styled(TrendingHeading)``

export const GamingVideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  padding-left: 0px;
  margin-left: 15px;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    margin-left: 40px;
    // padding-right: 40px;
    margin-top: 40px;
  }
`

export const GamingVideoItem = styled.li`
  list-style-type: none;
  margin-bottom: 30px;
  width: 48%;
  @media screen and (min-width: 576px) {
    width: 32%;
  }
`
export const GamingVideoTitle = styled(VideoTitle)`
  font-weight: 500;
  margin-top: 15px;
`
export const GamingThumbnail = styled(Thumbnail)``

export const ViewsCount = styled.p`
  font-family: 'Roboto';
  color: ${props => {
    if (props.darkModeActive) {
      return '#94a3b8'
    }
    return ' #616e7c'
  }};
  margin-top: 5px;
`
