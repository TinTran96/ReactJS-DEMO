
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
import Login from './components/login';
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
                    <Route path="/ho" name="Home" component={App}/>
                    <Route path='/' component={Login}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>
),document.getElementById('app'));


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Login from './components/login'
// import Store from './store/store'
// import DashBoard from './components/dashboard'
// import 'primereact/resources/primereact.min.css'
// import 'primereact/resources/themes/omega/theme.css'
// import 'font-awesome/css/font-awesome.css'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// ReactDOM.render(
//     <Provider store={Store}>
//         <MuiThemeProvider>
// 		<Router>
// 		    <Switch>
//             <Route exact path='/' component={Login}/>
//             <Route path='/dashboard' component={DashBoard}/>
// 		</Switch>
//         </Router>
//         </MuiThemeProvider>
// 	</Provider>,
//     document.getElementById('app')
// );