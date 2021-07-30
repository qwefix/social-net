import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

function App({ store }) {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Aside {...store.getAsideData()} />
        <div className='main'>
          <Route render={
            (p) => < Dialogs
              {...store.getState().dialogs}
              targetID={p.match.params.id}
              dispatch={store.dispatch.bind(store)}
            />}
            path='/dialogs/:id'
          />
          <Route render={
            (p) => < Profile {...store.getProfileData(p.match.params.id)} />}
            path='/profile/:id' />

          <Route component={Music} path='/music' />
          <Route component={News} path='/news' />
          <Route component={Settings} path='/settings' />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
