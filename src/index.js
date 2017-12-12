/**
 * Created by Fernando on 4/10/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Route, BrowserRouter} from 'react-router-dom'
import App from './components/app'
import reducers from './reducers';
import promise from 'redux-promise';
require ('../style/style.css');

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));

