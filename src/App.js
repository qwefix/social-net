import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

function App({ state }) {
  return (
    <BrowserRouter>
      <div className="app">
        <HeaderContainer />
        <Aside {...state.aside} />
        <div className='main'>
          <Route render={
            (p) => < Dialogs
              {...state.dialogs}
              targetID={p.match.params.id}
            />}
            path='/dialogs/:id'
          />
          <Route
            render={(p) => < ProfileContainer
              targetID={p.match.params.id || 18822}
            />}
            path='/profile/:id?'
          />
          <Route path='/users'
            render={(p) => <UsersContainer />}
          />
          <Route component={Music} path='/music' />
          <Route component={News} path='/news' />
          <Route component={Settings} path='/settings' />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
