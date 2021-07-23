import './index.css';
import state, { methods, subscriber } from './redux/state'
import renderUI from './renderUI';

renderUI(state, methods);
subscriber(renderUI)