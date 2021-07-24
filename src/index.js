import './index.css';
import store from './redux/store';
import renderUI from './renderUI';

store.takeRenderFunction(renderUI);
renderUI(store);