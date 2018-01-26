import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';

import Card from '../../components/Card/Card';
import {connect} from "react-redux";
import axios from 'axios';
import {TableService} from '../../services'

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
            'rest_id':this.props.user.resInfo.id,
            'id':this.props.user.userInfo.id,
        }

        TableService.findTableByRestID(param)
            .then((response) => {
                console.log("Response CALL BACK",response);
                this.setState({ tables: response.tables, isFetchData: false  });
                this.off();
            })
            .catch(error => error)
    }
    tabRow(){
        if(this.state.tables instanceof Array){
            return this.state.tables.map(function(object, i){
                return (
                    <Col key={object.id} lg={3} sm={6}>
                        <Card
                            id={object.id}
                            title={object.name}
                            content={
                                <div>
                                    
                                </div>
                                }
                        />
                    </Col>
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
                                    <Row>
                                        {this.tabRow()}
                                    </Row>
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
