import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

if (localStorage.getItem('idReactSocialNet') === null) {
  localStorage.setItem('idReactSocialNet', '0');
  window.mySNQId = '0';
} else {
  window.mySNQId = localStorage.getItem('idReactSocialNet');
}


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Aside />
        <div className='main'>
          {/* <Route exact path='/dialogs'><Redirect to="/dialogs/null" /></Route> */}
          <Route component={Dialogs} path='/dialogs/:id' />
          <Route component={Profile} path='/profile/:id' />
          <Route component={Music} path='/music' />
          <Route component={News} path='/news' />
          <Route component={Settings} path='/settings' />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
