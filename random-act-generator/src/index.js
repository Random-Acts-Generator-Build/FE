import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"; //Import router
// import 'bootstrap/dist/css/bootstrap.min.css'; //Import bootstrap

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
    );


