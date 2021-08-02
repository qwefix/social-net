import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

function renderUI(store) {
    ReactDOM.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
export default renderUI