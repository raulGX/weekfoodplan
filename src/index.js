import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import App from './components/App.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'

render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('react')
)