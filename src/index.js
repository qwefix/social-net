import './index.css';
import store from './redux/redux-store';
import renderUI from './renderUI';

store.subscribe(renderUI);
renderUI(store);