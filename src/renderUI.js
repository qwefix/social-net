import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

function renderUI(state, funcs) {
    ReactDOM.render(
        <App state={state} newPostFuncs={funcs} />,
        document.getElementById('root')
    );
}
export default renderUI