import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import AppSong13 from './components/AppSong13';
import reducers from './reducers';


// Render components
ReactDOM.render(
    <Provider store={createStore(reducers)} >
        <AppSong13 />
    </Provider>
    , document.querySelector('#integrate-react-redux-root #integrate-react-redux-content')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
