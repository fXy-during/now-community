import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutUs from "./container/about-us";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
<Switch>
    <Route path="/info" component={App}/>
    <Route path="/aboutus" component={AboutUs}/>
    
</Switch>
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
