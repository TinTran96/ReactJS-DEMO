import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {userLogout} from '../../actions/index'
import {withRouter} from "react-router-dom";
class HeaderLinks extends Component{
    onLogout()
    {
        this.props.userLogout();
        this.props.history.push("/login");
    }
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <i className="fa fa-dashboard"></i>
                        <p className="hidden-lg hidden-md">Dashboard</p>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                        <i className="fa fa-search"></i>
                        <p className="hidden-lg hidden-md">Search</p>
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1}>Welcome <b>{this.props.user.userInfo.email}</b></NavItem>
                    <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown-right">
                        <MenuItem eventKey={2.1}>Action</MenuItem>
                        <MenuItem eventKey={2.2}>Another action</MenuItem>
                        <MenuItem eventKey={2.3}>Something</MenuItem>
                        <MenuItem eventKey={2.4}>Another action</MenuItem>
                        <MenuItem eventKey={2.5}>Something</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.5}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} onClick={()=>this.onLogout()}>Log out</NavItem>
                </Nav>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({userLogout: userLogout}, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(withRouter(HeaderLinks));
