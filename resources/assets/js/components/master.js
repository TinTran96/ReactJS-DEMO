import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import LeftMenu from '../containers/left-menu'
import AppBar from 'material-ui/AppBar';
import Nav from './nav'
class Master extends Component {
    constructor(props){
        super(props);
        console.log("PROPS",props);
     }
  render(){
    return (
    <div>
    <div className="nav-bar">
        <Nav />
    </div>
    <div className="container">
        <div>
              {this.props.children}
        </div>
    </div>
    </div>
    )
  }
}
export default Master;