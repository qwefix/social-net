import './index.css';
import store from './redux/redux-store';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

function renderUI(store) {
    ReactDOM.render(
        <Provider store={store}>
            <App
                state={store.getState()}
            />
        </Provider>,
        document.getElementById('root')
    );
}

store.subscribe(() => renderUI(store));
renderUI(store);