import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './blipper.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import blipperReducer from './reducers/blipperReducer';

const store = createStore(blipperReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
);