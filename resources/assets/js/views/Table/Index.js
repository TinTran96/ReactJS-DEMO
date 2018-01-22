import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from '../../components/Card/Card';
import {connect} from "react-redux";
import axios from 'axios';
// import CircularProgress from 'material-ui/CircularProgress';
import { ScaleLoader } from 'react-spinners';

class TableIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', tables: [],isFetchData: false};
        console.log(this.props);
    }
    componentDidMount(){
        this.on();
        this.setState({ isFetchData: true });
        let param={
            'rest_id':2,
            'id':this.props.user.id,
            'area_id':0,
        }
        axios.post('http://api.mysite.local:8080/get_table_by_rest_id_demo', param)
            .then(response=> {
                console.log("Response==",response);
                this.setState({ tables: response.data.tables, isFetchData: false  });
                console.log("====",this.state);
                this.off();
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow(){
        if(this.state.tables instanceof Array){
            return this.state.tables.map(function(object, i){
                return (
                    <tr key={i}>
                        <td>{object.id}</td>
                        <td>{object.name}</td>
                        <td>{object.area_id}</td>
                        <td>{object.slots}</td>
                        <td></td>
                    </tr>
                );
            }.bind(this))
        }
    }
    on() {
        document.getElementById("overlay").style.display = "block";
    }

    off() {
        document.getElementById("overlay").style.display = "none";
    }
    render() {
        return (
            <div className="content">
                <div id="overlay"><div id="overlay-content">
                    {/*<CircularProgress size={80} thickness={5} />*/}
                    <ScaleLoader
                        color={'#50E3C2'}
                        loading={this.state.isFetchData}
                    />
                </div></div>
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            {/*{ this.state.isFetchData ? <CircularProgress size={80} thickness={5} /> : null }*/}

                            <Card
                                title="Striped Table with Hover"
                                category="Here is a subtitle for this table"
                                ctTableFullWidth ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Area</th>
                                                <th>Slot</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {this.tabRow()}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user:state.user
    };
}
export default connect(mapStateToProps)(TableIndex);
