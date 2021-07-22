import './index.css';
import state, { methods } from './redux/state'
import renderUI from './renderUI';


renderUI(state, methods);