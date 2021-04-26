import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
// import Controller from './screens/Controller';
import Home from './screens/Home/Home';
// import Header from './common/header/Header.js'

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
