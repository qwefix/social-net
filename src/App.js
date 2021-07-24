import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import store from './redux/store';

let myID
if (localStorage.getItem('idReactSocialNet') === null) {
  localStorage.setItem('idReactSocialNet', '0');
  myID = '0';
} else {
  myID = localStorage.getItem('idReactSocialNet');
}

function App({ state, methods }) {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Aside myID={myID} />
        <div className='main'>
          <Route render={
            (p) => < Dialogs {...store.getDialogsData(myID, p.match.params.id)}/>}
            path='/dialogs/:id' />
            
          <Route render={
            (p) => < Profile
              addPostObj={
                {
                  id: p.match.params.id,
                  myID,
                  inputValue: state[myID].postInput[p.match.params.id]
                }
              }
              newPostMethods={methods.newPost}
              ava={state[p.match.params.id].ava}
              wp={state[p.match.params.id].wp}
              name={state[p.match.params.id].name}
              posts={state[p.match.params.id].posts
                .map(a => {
                  return {
                    content: a.content,
                    likes: a.likes,
                    authorId: a.author,
                    ava: state[a.author].ava,
                    name: state[a.author].name
                  }
                })
              }
            />}
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
