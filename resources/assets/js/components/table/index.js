import React, { Component } from 'react'
import LeftMenu from '../../containers/left-menu'
import Nav from '../nav'
import axios from 'axios'

class TableIndex extends Component {

    constructor(props){
        super(props);
        this.state={
            tableList:[]
        }
    }

    componentDidMount()
    {
        axios.post('/get_table_by_rest_id')
    }

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



export default TableIndex;

