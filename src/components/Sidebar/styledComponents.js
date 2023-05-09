import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'

import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'

export const LinkComponent = styled(Link)`
  text-decoration: none;
`
export const SocialMediaImage = styled.img`
  width: 25px;
  margin-right: 10px;
`

export const BiListPlusIcon = styled(BiListPlus)`
  color: ${props => {
    if (props.active === 'true') {
      return '#ff0b37'
    }
    if (props.darkmodeactive === 'true') {
      return '#cbd5e1'
    }
    return '#383838'
  }};
  width: 18px;
  height: 18px;
  margin-right: 10px;
`

export const SiYoutubegamingIcon = styled(SiYoutubegaming)`
  color: ${props => {
    if (props.active === 'true') {
      return '#ff0b37'
    }
    if (props.darkmodeactive === 'true') {
      return '#cbd5e1'
    }
    return '#383838'
  }};
  width: 18px;
  height: 18px;
  margin-right: 10px;
`

export const HiFireIcon = styled(HiFire)`
  color: ${props => {
    if (props.active === 'true') {
      return '#ff0b37'
    }
    if (props.darkmodeactive === 'true') {
      return '#cbd5e1'
    }
    return '#383838'
  }};
  width: 18px;
  height: 18px;
  margin-right: 10px;
`

export const AiFillHomeIcon = styled(AiFillHome)`
  color: ${props => {
    if (props.active === 'true') {
      return '#ff0b37'
    }
    if (props.darkmodeactive === 'true') {
      return '#cbd5e1'
    }
    return '#383838'
  }};
  width: 18px;
  height: 18px;
  margin-right: 10px;
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 20%;
    background-color: ${props => {
      if (props.darkModeActive) {
        return '#212121'
      }
      return '#ffffff'
    }};
  }
`
export const SidebarItemsContainer = styled.ul`
  padding-left: 0px;
`
export const SidebarItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-family: 'roboto';
  font-size: 15px;
  color: ${props => {
    if (!props.darkModeActive) {
      return '#1e293b'
    }
    return '#ffffff'
  }};
  font-weight: ${props => {
    if (props.activeTab) {
      return 'bold'
    }
    return 'normal'
  }};
  background-color: ${props => {
    if (props.activeTab) {
      if (props.darkModeActive) {
        return '#383838'
      }
      return '#f1f5f9'
    }
    return 'transparent'
  }};
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
`
export const ContactUsContainer = styled.div`
  padding-left: 30px;
  margin-top: 130px;
`

export const ContactUsHeading = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => {
    if (props.darkModeActive) {
      return '#ffffff'
    }
    return '#0f0f0f'
  }};
`
export const SocialMediaIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const ContactUsWishes = styled(ContactUsHeading)`
  font-size: 15px;
  font-family: 'Roboto';
  width: 70%;
  font-weight: 400;
  line-height: 1.25;
`
