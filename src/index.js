import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA_3uC5GOWggCu4PNaCQvB5H3kFWk9hPiU",
    authDomain: "lifehab-802cb.firebaseapp.com",
    databaseURL: "https://lifehab-802cb.firebaseio.com",
};

firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
