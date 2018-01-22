import React, { Component } from 'react'
import {connect} from 'react-redux'
import NavLink from 'react-router-dom/NavLink'
class Nav extends Component{
    constructor(props){
        super(props);
        console.log("PROPS",props.user);
     }
    render(){
        return(
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">React iFoodGo Demo</a>
              </div>
              <ul className="nav navbar-nav navbar-right">
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/login'>login</NavLink></li>
                <li><NavLink to='/example'>Example</NavLink></li>
                <li><a>{this.props.user.last_name} {this.props.user.first_name}</a></li>
              </ul>
          </div>
        </nav>
        )};
}

function mapStateToProps(state){
    return{
        user:state.user
    };
}
export default connect(mapStateToProps)(Nav);
