import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA_3uC5GOWggCu4PNaCQvB5H3kFWk9hPiU",
    authDomain: "lifehab-802cb.firebaseapp.com",
    databaseURL: "https://lifehab-802cb.firebaseio.com",
};

firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
