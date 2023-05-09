import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import ModeContext from '../../context/ModeContext'
import {
  NavbarContainer,
  NavbarResponsiveContainer,
  CompanyLogoContainer,
  CompanyLogo,
  NavItemsContainer,
  NavItem,
  OptionButton,
  NavItemsContainerLarge,
  ProfileIcon,
  LogoutButton,
  GiHamburgerMenuIcon,
  FiLogOutIcon,
  FaMoonIcon,
  BsBrightnessHighIcon,
  PopupContainer,
  PopupHeading,
  CancelButton,
  ConfirmButton,
  MenuContainer,
  LinkComponent,
  SidebarItem,
  AiFillHomeIcon,
  HiFireIcon,
  SiYoutubegamingIcon,
  BiListPlusIcon,
  SidebarItemsContainer,
  CloseIcon,
  PopCloseButton,
} from './styledComponents'

const Navbar = props => (
  <ModeContext.Consumer>
    {value => {
      const {darkModeActive, changeMode} = value
      const {activeTab} = props

      const onClickChangeMode = () => {
        changeMode()
      }

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const logoutPopUp = () => close => (
        <PopupContainer darkModeActive={darkModeActive}>
          <PopupHeading darkModeActive={darkModeActive}>
            Are you sure, you want to logout
          </PopupHeading>
          <CancelButton
            onClick={() => close()}
            darkModeActive={darkModeActive}
            type="button"
          >
            Cancel
          </CancelButton>
          <ConfirmButton onClick={onClickLogout} type="button">
            Confirm
          </ConfirmButton>
        </PopupContainer>
      )

      const menuPopUp = () => close => (
        <MenuContainer darkModeActive={darkModeActive}>
          <PopCloseButton onClick={() => close()}>
            <CloseIcon darkmodeactive={`${darkModeActive}`} />
          </PopCloseButton>
          <SidebarItemsContainer>
            <LinkComponent to="/">
              <SidebarItem
                activeTab={activeTab === 'Home'}
                darkModeActive={darkModeActive}
              >
                <AiFillHomeIcon
                  active={`${activeTab === 'Home'}`}
                  darkmodeactive={`${darkModeActive}`}
                />
                Home
              </SidebarItem>
            </LinkComponent>
            <LinkComponent to="/trending">
              <SidebarItem
                activeTab={activeTab === 'Trending'}
                darkModeActive={darkModeActive}
              >
                <HiFireIcon
                  active={`${activeTab === 'Trending'}`}
                  darkmodeactive={`${darkModeActive}`}
                />
                Trending
              </SidebarItem>
            </LinkComponent>
            <LinkComponent to="/gaming">
              <SidebarItem
                activeTab={activeTab === 'Gaming'}
                darkModeActive={darkModeActive}
              >
                <SiYoutubegamingIcon
                  active={`${activeTab === 'Gaming'}`}
                  darkmodeactive={`${darkModeActive}`}
                />
                Gaming
              </SidebarItem>
            </LinkComponent>
            <LinkComponent to="/saved-videos">
              <SidebarItem
                activeTab={activeTab === 'SavedVideos'}
                darkModeActive={darkModeActive}
              >
                <BiListPlusIcon
                  active={`${activeTab === 'SavedVideos'}`}
                  darkmodeactive={`${darkModeActive}`}
                />
                Saved Videos
              </SidebarItem>
            </LinkComponent>
          </SidebarItemsContainer>
        </MenuContainer>
      )

      return (
        <NavbarContainer darkModeActive={darkModeActive}>
          <NavbarResponsiveContainer>
            <CompanyLogoContainer>
              <LinkComponent to="/">
                <CompanyLogo
                  src={
                    darkModeActive
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </LinkComponent>
            </CompanyLogoContainer>
            <NavItemsContainer>
              <NavItem>
                <OptionButton
                  onClick={onClickChangeMode}
                  data-testid="theme"
                  type="button"
                >
                  {darkModeActive ? <BsBrightnessHighIcon /> : <FaMoonIcon />}
                </OptionButton>
              </NavItem>
              <NavItem>
                <Popup
                  modal
                  trigger={
                    <OptionButton type="button">
                      <GiHamburgerMenuIcon
                        darkmodeactive={`${darkModeActive}`}
                      />
                    </OptionButton>
                  }
                >
                  {menuPopUp()}
                </Popup>
              </NavItem>
              <NavItem>
                <Popup
                  modal
                  trigger={
                    <OptionButton type="button">
                      <FiLogOutIcon darkmodeactive={`${darkModeActive}`} />
                    </OptionButton>
                  }
                >
                  {logoutPopUp()}
                </Popup>
              </NavItem>
            </NavItemsContainer>
            <NavItemsContainerLarge>
              <NavItem>
                <OptionButton onClick={onClickChangeMode} type="button">
                  {darkModeActive ? <BsBrightnessHighIcon /> : <FaMoonIcon />}
                </OptionButton>
              </NavItem>
              <NavItem>
                <OptionButton type="button">
                  <ProfileIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </OptionButton>
              </NavItem>
              <NavItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton darkModeActive={darkModeActive} type="button">
                      Logout
                    </LogoutButton>
                  }
                >
                  {logoutPopUp()}
                </Popup>
              </NavItem>
            </NavItemsContainerLarge>
          </NavbarResponsiveContainer>
        </NavbarContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default withRouter(Navbar)
