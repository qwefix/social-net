import './index.css';
import state, { methods, subscriber } from './redux/state'
import store from './redux/store';
import renderUI from './renderUI';


renderUI(store,state, methods);
subscriber(renderUI);
store.takeRenderFunction(renderUI);