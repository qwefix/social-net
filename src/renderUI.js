import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

function renderUI(state, methods) {
    ReactDOM.render(
        <App state={state} methods={methods}/>,
        document.getElementById('root')
    );
}
export default renderUI