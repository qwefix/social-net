import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

let myID
if (localStorage.getItem('idReactSocialNet') === null) {
  localStorage.setItem('idReactSocialNet', '0');
  myID = '0';
} else {
  myID = localStorage.getItem('idReactSocialNet');
}


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Aside myID={myID} />
        <div className='main'>
          <Route render={(p) => < Dialogs myID={myID} targetID={p.match.params.id} />} path='/dialogs/:id' />

          <Route render={
            (p) => < Profile
              ava={require(`./UsersJSON/${p.match.params.id}/ava.jpg`).default}
              wp={require(`./UsersJSON/${p.match.params.id}/wp.jpg`).default}
              user={require(`./UsersJSON/${p.match.params.id}/info.json`)}
              myID={myID}
              targetID={p.match.params.id}
            />} path='/profile/:id' />

          <Route component={Music} path='/music' />
          <Route component={News} path='/news' />
          <Route component={Settings} path='/settings' />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
