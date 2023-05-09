import React from 'react'

const ModeContext = React.createContext({
  darkModeActive: false,
  changeMode: () => {},
  activeTab: 'Home',
  changeTab: () => {},
  savedVideosList: [],
  addToSavedVideos: () => {},
  removeFromSavedVideos: () => {},
})

export default ModeContext
