import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import StoreContext from './StoreContext';

function App({ state, store }) {
  return (
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <div className="app">
          <Header />
          <Aside {...state.aside} />
          <div className='main'>
            <Route render={
              (p) => < Dialogs
                {...state.dialogs}
                targetID={p.match.params.id}
              />}
              path='/dialogs/:id'
            />
            <Route render={
              (p) => < Profile
                {...state.profiles[p.match.params.id]}
                targetID={p.match.params.id}
              />}
              path='/profile/:id' />

            <Route component={Music} path='/music' />
            <Route component={News} path='/news' />
            <Route component={Settings} path='/settings' />
          </div>
        </div>
      </StoreContext.Provider>
    </BrowserRouter >
  );
}

export default App;
