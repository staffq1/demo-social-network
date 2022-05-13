import React, {Suspense, useEffect } from 'react'
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, HashRouter } from "react-router-dom"
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { useMatch } from "react-router-dom";
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/commen/Preloader/Preloader';

import { Provider } from 'react-redux';
import store from './redux/redux-store';


// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const App = (props) => {

  useEffect(() => {
    props.initializeApp()
  })

  let match = useMatch({
    path: '/profile/:userId'
  })

  if (!props.initializaed) {
    return <Preloader />
  }
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile/:userId' element={<Suspense fallback={<div>Загрузка...</div>}>
            <ProfileContainer match={match} />
          </Suspense>} />
          {/* <Route path='/profile/:userId' element={<ProfileContainer match={match}/>} /> */}

          <Route path='/dialogs/*' element={<Suspense fallback={<div>Загрузка...</div>}><DialogsContainer /></Suspense>} />
          {/* <Route path='/dialogs/*' element={<DialogsContainer />} /> */}
          <Route path='/users' element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initializaed: state.app.initializaed
})

const AppContainer = connect(mapStateToProps, { initializeApp })(App)

const ProjectApp = (props) => {

  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default ProjectApp