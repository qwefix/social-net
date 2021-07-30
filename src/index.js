import './index.css';
import store from './redux/store';
import renderUI from './renderUI';

store.subscribe(renderUI);
renderUI(store);