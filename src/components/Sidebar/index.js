import ModeContext from '../../context/ModeContext'

import {
  SidebarContainer,
  SidebarItemsContainer,
  SidebarItem,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaIconsContainer,
  ContactUsWishes,
  AiFillHomeIcon,
  HiFireIcon,
  SiYoutubegamingIcon,
  BiListPlusIcon,
  LinkComponent,
  SocialMediaImage,
} from './styledComponents'

const Sidebar = props => (
  <ModeContext.Consumer>
    {value => {
      const {darkModeActive} = value
      const {activeTab} = props

      return (
        <SidebarContainer darkModeActive={darkModeActive}>
          <SidebarItemsContainer>
            <LinkComponent to="/" className="link">
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
            <LinkComponent to="/trending" className="link">
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
            <LinkComponent to="/gaming" className="link">
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
            <LinkComponent to="/saved-videos" className="link">
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
          <ContactUsContainer>
            <ContactUsHeading darkModeActive={darkModeActive}>
              CONTACT US
            </ContactUsHeading>
            <SocialMediaIconsContainer>
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIconsContainer>
            <ContactUsWishes darkModeActive={darkModeActive}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsWishes>
          </ContactUsContainer>
        </SidebarContainer>
      )
    }}
  </ModeContext.Consumer>
)

export default Sidebar
