import React from 'react';
import { render } from 'react-dom';
import App from './app';
import {Provider} from 'react-redux'
import store from './store'
<<<<<<< HEAD

render(
    <Provider store={store}>
       <App /> 
=======


render(
    <Provider store={store}>
        <App />
>>>>>>> fd54adf34a0dba846e3a84c67863167f829ddec7
    </Provider>,
    document.querySelector('#app'),
)