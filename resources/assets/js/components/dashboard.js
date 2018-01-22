import React, { Component } from 'react'
import Nav from './nav'
import { Statistic } from 'semantic-ui-react'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import LeftMenu from '../containers/left-menu'

class DashBoard extends Component {
	render() {
	    return (
            <div>
                <Nav />
                <div className="row">
                    <div className="col-sm-4">
                        <LeftMenu />
                    </div>
                    <div className="col-sm-8">
                        <Statistic>
                            <Statistic.Value>6,666</Statistic.Value>
                            <Statistic.Label>Downloads</Statistic.Label>
                        </Statistic>
                    </div>
                </div>
            </div>
            
           
	    );
    }
}



export default DashBoard;
