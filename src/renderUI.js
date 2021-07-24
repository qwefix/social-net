import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

function renderUI(store,state, methods) {
    ReactDOM.render(
        <App store={store} state={state} methods={methods}/>,
        document.getElementById('root')
    );
}
export default renderUI