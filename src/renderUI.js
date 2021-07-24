import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

function renderUI(store) {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}
export default renderUI