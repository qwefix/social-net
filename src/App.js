import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom';

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
const myProfile = require(`./UsersJSON/${myID}/info.json`);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Aside myID={myID} />
        <div className='main'>
          <Route render={
            (p) => < Dialogs
              dialogsList={
                Object.keys(myProfile.dialogs).map((a, i) => {
                  return {
                    ava: require(`./UsersJSON/${a}/ava.jpg`).default,
                    name: require(`./UsersJSON/${a}/info.json`).name,
                    id: require(`./UsersJSON/${a}/info.json`).id,
                  }
                })}
              dialog={myProfile.dialogs[p.match.params.id]
                .map(a => {
                  return {
                    ava: require(`./UsersJSON/${a.sendBy}/ava.jpg`).default,
                    name: require(`./UsersJSON/${a.sendBy}/info.json`).name,
                    sendBy: a.sendBy,
                    content: a.content
                  }
                })
              }
              myID={myID}
            />} path='/dialogs/:id' />
          <Route render={
            (p) => < Profile
              ava={require(`./UsersJSON/${p.match.params.id}/ava.jpg`).default}
              wp={require(`./UsersJSON/${p.match.params.id}/wp.jpg`).default}
              name={require(`./UsersJSON/${p.match.params.id}/info.json`).name}
              posts={require(`./UsersJSON/${p.match.params.id}/info.json`).posts
                .map(a => {
                  return {
                    content:a.content,
                    likes:a.likes,
                    authorId:a.author,
                    ava:require(`./UsersJSON/${a.author}/ava.jpg`).default,
                    name:require(`./UsersJSON/${a.author}/info.json`).name
                  }
                })
              }
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
