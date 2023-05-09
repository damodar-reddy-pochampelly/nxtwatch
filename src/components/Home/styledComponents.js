import styled from 'styled-components'
import {IoIosSearch} from 'react-icons/io'
import {IoCloseOutline} from 'react-icons/io5'
import {Link} from 'react-router-dom'

export const LinkComponent = styled(Link)`
  text-decoration: none;
`

export const CloseIcon = styled(IoCloseOutline)`
  width: 20px;
  height: 20px;
`

export const SearchIcon = styled(IoIosSearch)`
  color: ${props => {
    if (props.darkmodeactive === 'true') {
      return '#909090'
    }
    return '#1e293b'
  }};
`

export const AppContentContainer = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  background-color: ${props => {
    if (props.darkModeActive) {
      return ' #181818'
    }
    return '#f9f9f9'
  }};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  display: flex;
  justify-content: space-between;
  padding: 25px;
  background-size: cover;
`
export const BannerContentContainer = styled.div``

export const CompanyLogo = styled.img`
  width: 110px;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #181818;
`
export const BannerButton = styled.button`
  background-color: transparent;
  font-family: 'Roboto';
  border: 1px solid #0f0f0f;
  color: #0f0f0f;
  font-size: 15px;
  font-weight: 400;
  padding: 5px 12px;
  margin-top: 20px;
`
export const BannerCloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  width: 80%;
  max-width: 300px;
  margin: 30px;

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 80%;
    max-width: 400px;
    margin: 25px;
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 400px;
  }
`
export const SearchInput = styled.input`
  border: none;
  width: 85%;
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  outline: none;
  font-family: 'Roboto';
  color: ${props => {
    if (props.darkModeActive) {
      return '#f9f9f9'
    }
    return '#475569'
  }};
  background-color: transparent;
`

export const SearchButton = styled.button`
  border: none;
  width: 15%;
  border-left: 1px solid #909090;
  background-color: ${props => {
    if (props.darkModeActive) {
      return '#383838'
    }
    return '#f1f5f9'
  }};
`

export const HomeVideosContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin: 25px;
    margin-top: 50px;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    margin: 25px 1% 25px 25px;
  }
`
export const HomeVideoItem = styled.li`
  list-style-type: none;
  margin-bottom: 30px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 48%;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 768px) {
    width: 31%;
    margin-bottom: 50px;
    margin-right: 2%;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
`

export const ChannelContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
  margin-right: 15px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    margin-left: 0px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`
export const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
`

export const VideoInfoContainer = styled.div`
  margin-left: 15px;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => {
    if (props.darkModeActive) {
      return '#f9f9f9'
    }
    return '#1e293b'
  }};
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 1.5;
`
export const NameViewsContainer = styled.div`
  display: flex;

  @media screen and (min-width: 576px) {
    flex-direction: column;
  }
`

export const ViewsContainerSmall = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const ViewsContainerLarge = styled.div`
  display: none;

  @media screen and (min-width: 576px) {
    display: flex;
    align-items: center;
  }
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: #64748b;
  font-size: 13px;
`

export const Views = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 13px;
  margin-left: 10px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (min-width: 576px) {
    margin-left: 0px;
  }
`
export const Dot = styled.div`
  background-color: #64748b;
  height: 4px;
  width: 4px;
  border-radius: 2px;
  margin-left: 10px;
`

export const UpdatedTime = styled.p`
  margin-left: 10px;
  color: #64748b;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 40px;
  padding: 20px;
`

export const NoSearchResultImage = styled.img`
  width: 50%;
  max-width: 250px;
`

export const NoSearchResultsFoundHeading = styled.h1`
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
export const NoSearchResultsDescription = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 15px;
  color: #64748b;
  margin-top: 0px;
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 18px;
  }
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
