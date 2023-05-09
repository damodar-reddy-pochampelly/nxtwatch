import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ModeContext from './context/ModeContext'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    darkModeActive: false,
    activeTab: 'Home',
    savedVideosList: [],
  }

  changeMode = () => {
    this.setState(prevState => ({darkModeActive: !prevState.darkModeActive}))
  }

  changeTab = currentTab => {
    this.setState({activeTab: currentTab})
  }

  addToSavedVideos = video => {
    const {savedVideosList} = this.state

    const doesVideoExists = savedVideosList.some(
      eachVideo => eachVideo.id === video.id,
    )

    if (!doesVideoExists) {
      this.setState({savedVideosList: [...savedVideosList, video]})
    }
  }

  removeFromSavedVideos = video => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(
        eachVideo => eachVideo.id !== video.id,
      ),
    }))
  }

  render() {
    const {darkModeActive, activeTab, savedVideosList} = this.state

    return (
      <ModeContext.Provider
        value={{
          darkModeActive,
          changeMode: this.changeMode,
          activeTab,
          changeTab: this.changeTab,
          savedVideosList,
          addToSavedVideos: this.addToSavedVideos,
          removeFromSavedVideos: this.removeFromSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ModeContext.Provider>
    )
  }
}

export default App
