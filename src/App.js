import './App.css';
import logoIcon from './header-icon.svg';
// import wallpaper from './wallpaper.jpg';

function App() {
  return (
    <div className="app">
      <header>
        <img src={logoIcon} width='40' alt='logo' />
        <p>Header</p>
        <p>Inform</p>
      </header>
      <aside>
        <nav>
          <ul>
            <li>Profile</li>
            <li>Messages</li>
            <li>News</li>
            <li>Music</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main>
        <div className="wallpaper" />
        <div className='ava' >
          ava+desc
        </div>
        <div className='my-posts'>
          my posts
          <div>
            Post
          </div>
          <div>
            Post
          </div>
          <div>
            Post
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
