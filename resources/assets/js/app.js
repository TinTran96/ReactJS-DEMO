
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/Example');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Store from './store/store';
import App from './containers/App/App';
import Login from './containers/Login/Login';
import './assetss/css/bootstrap.min.css';
import './assetss/css/animate.min.css';
import './assetss/sass/light-bootstrap-dashboard.css';
import './assetss/css/demo.css';
import './assetss/css/pe-icon-7-stroke.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
ReactDOM.render((
    <Provider store={Store}>
        <MuiThemeProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/login"  component={Login}/>
                    <Route path='/' name="Home" component={App}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
),document.getElementById('app'));

