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


function App({ state }) {
  console.log(state['0'])
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Aside myID={myID} />
        <div className='main'>
          <Route render={(p) => < Dialogs myID={myID} targetID={p.match.params.id} />} path='/dialogs/:id' />
          <Route render={
            (p) => < Profile
              ava={state[p.match.params.id].ava}
              wp={state[p.match.params.id].wp}
              name={state[p.match.params.id].name}
              posts={state[p.match.params.id].posts}
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
