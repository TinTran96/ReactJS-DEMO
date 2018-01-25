import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import HeaderLinks from '../Header/HeaderLinks';

 import imagine from '../../assetss/img/sidebar-3.jpg';
 import logo from '../../assetss/img/reactlogo.png';

import appRoutes from '../../routes/app';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
        console.log("User",this.props.user);
    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){
        // const sidebarBackground = {
        //     backgroundImage: 'url(' + imagine + ')'
        // };
        return (
            <div id="sidebar" className="sidebar" data-color="black" >
                <div className="sidebar-background"></div>
                <div className="logo">
                    <a  className="simple-text logo-mini">
                        <div className="logo-img">
                            {<img src={this.props.user.resInfo.logo_path} alt="logo_image"/>}
                        </div>

                    </a>
                    <a className="simple-text logo-normal">
                        {this.props.user.resInfo.name}
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        { this.state.width <= 991 ? (<HeaderLinks />):null }
                        {
                            appRoutes.map((prop,key) => {
                                if(!prop.redirect)
                                    return (
                                        <li className={prop.upgrade ? "active active-pro":this.activeRoute(prop.path)} key={key}>
                                            <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                                <i className={prop.icon}></i>
                                                <p>{prop.name}</p>
                                            </NavLink>
                                        </li>
                                    );
                                return null;
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    };
}
export default connect(mapStateToProps)(Sidebar);
