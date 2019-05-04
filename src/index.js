import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import * as serviceWorker from './serviceWorker';

import AppSong13 from './components/AppSong13';
import AppSong13Reducers from './reducers/AppSong13Reducers';
import AppPost14 from './components/AppPost14';
import AppPost14Reducers from './reducers/AppPost14Reducers';


// Render components

// 13. 
ReactDOM.render(
    <Provider store={createStore(AppSong13Reducers)} >
        <AppSong13 />
    </Provider>
    , document.querySelector('#integrate-react-redux-root #integrate-react-redux-content')
);

// 14. 
const appPost14Store = createStore(AppPost14Reducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={appPost14Store} >
        <AppPost14 />
    </Provider>,
    document.querySelector('#async-with-redux-thunk-root #async-with-redux-thunk-content')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
