import './index.css';
import state, { newPostFuncs } from './redux/state'
import renderUI from './renderUI';

renderUI(state, newPostFuncs);