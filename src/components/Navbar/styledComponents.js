import styled from 'styled-components'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {IoCloseOutline} from 'react-icons/io5'

export const BsBrightnessHighIcon = styled(BsBrightnessHigh)`
  width: 18px;
  height: 18px;
  color: #ffffff;
`

export const GiHamburgerMenuIcon = styled(GiHamburgerMenu)`
  color: ${props => {
    if (props.darkmodeactive === 'true') {
      return '#ffffff'
    }
    return `#000000`
  }};
  width: 18px;
  height: 20px;
`
export const FiLogOutIcon = styled(FiLogOut)`
  color: ${props => {
    if (props.darkmodeactive === 'true') {
      return '#ffffff'
    }
    return `#000000`
  }};
  width: 18px;
  height: 18px;
`
export const FaMoonIcon = styled(FaMoon)`
  width: 18px;
  height: 18px;
`

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => {
    if (props.darkModeActive === true) {
      return '#212121'
    }
    return '#ffffff'
  }};
`
export const NavbarResponsiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`
export const CompanyLogoContainer = styled.div``

export const CompanyLogo = styled.img`
  width: 100px;

  @media screen and ((min-width: 576px) and (max-width: 766px)) {
    width: 130px;
  }
`

export const NavItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 5px;

  @media screen and (min-width: 576px) {
    margin-left: 15px;
  }
`
export const OptionButton = styled.button`
  background-color: transparent;
  border: none;
`
export const NavItemsContainerLarge = styled.ul`
  display: none;
  @media screen and (min-width: 767px) {
    padding-left: 0px;
    display: flex;
    align-items: center;
  }
`
export const ProfileIcon = styled.img`
  width: 25px;
  height: 25px;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => {
    if (props.darkModeActive === true) {
      return '#ffffff'
    }
    return '#3b82f6'
  }};
  font-family: 'Roboto'
  font-size: 13px;
  font-weight: 600;
  color: ${props => {
    if (props.darkModeActive === true) {
      return '#ffffff'
    }
    return '#3b82f6'
  }};
  padding: 4px 10px;
  border-radius: 3px;
`

export const PopupContainer = styled.div`
  background-color: ${props => {
    if (props.darkModeActive) {
      return '#212121'
    }
    return '#ffffff'
  }};
  padding: 30px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 30px 50px;
  }
`

export const PopupHeading = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => {
    if (props.darkModeActive) {
      return '#ffffff'
    }
    return '#00306e'
  }};
  margin-bottom: 30px;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid
    ${props => {
      if (props.darkModeActive) {
        return '#94a3b8'
      }
      return ' #475569'
    }};
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => {
    if (props.darkModeActive) {
      return '#94a3b8'
    }
    return ' #475569'
  }};
  padding: 8px 15px;
`

export const ConfirmButton = styled(CancelButton)`
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  padding: 9px 15px;
  margin-left: 30px;
`
export const MenuContainer = styled.div`
  background-color: ${props => {
    if (props.darkModeActive) {
      return '#212121'
    }
    return '#ffffff'
  }};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const LinkComponent = styled(Link)`
  text-decoration: none;
`

export const SidebarItemsContainer = styled.ul`
  padding-left: 0px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding-left: 38%;
  padding-top: 15px;
  padding-bottom: 15px;
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

export const CloseIcon = styled(IoCloseOutline)`
  width: 30px;
  height: 30px;
  color: ${props => {
    if (props.darkmodeactive === 'true') {
      return '#ffffff'
    }
    return ' #0f0f0f'
  }};
`

export const PopCloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  padding-top: 30px;
  padding-right: 30px;
`
