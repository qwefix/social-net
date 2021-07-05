import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Aside />
        <div className='main'>
          <Route component={Profile} path='/profile' />
          <Route component={Dialogs} path='/dialogs' />
          <Route component={Music} path='/music' />
          <Route component={News} path='/news' />
          <Route component={Settings} path='/settings' />
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
