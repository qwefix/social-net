import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Profile from './components/Profile';
// import wallpaper from './wallpaper.jpg';

function App() {
  return (
    <div className="app">
      <Header />
      <Aside />
      <Profile />
    </div>
  );
}

export default App;
