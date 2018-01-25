import React, { Component } from 'react';
// import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';

import {connect} from "react-redux";
import {Card} from '../../components/Card/Card';
import {StatsCard} from '../../components/StatsCard/StatsCard';
import {Tasks} from '../../components/Tasks/Tasks';
import { ScaleLoader } from 'react-spinners';
import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from '../../variables/Variables';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
                        contactCount: 0,
                        tableCount:0,
                        optionFoodItemCount: 0,
                        categoryCount:0,
                        orderCount:0,
                        totalEmail:0,
                        totalReservation:0,
                        isFetchData: false
                    };
        console.log(this.props);
    }
    
    componentDidMount(){
        this.on();
        this.setState({ isFetchData: true });
        let param={
            'rest_id':this.props.user.resInfo.id,
        }
        axios.post('http://api.mysite.local:8000/get_data_dashboard_demo', param)
            .then(response=> {
                console.log("Response==",response);
                this.setState({
                    contactCount:response.data.contacts,
                    tableCount:response.data.tables,
                    optionFoodItemCount:response.data.items,
                    categoryCount:response.data.categories,
                    orderCount:response.data.orders,
                    totalEmail:response.data.emails,
                    totalReservation:response.data.reservations,
                    isFetchData: false  });
                console.log("====",this.state);
                this.off();
            })
            .catch(function (error) {
                console.log(error);
            })
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
                    <ScaleLoader
                        color={'#50E3C2'}
                        loading={this.state.isFetchData}
                    />
                </div></div>
                <Grid fluid>
                    <Row>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-cart text-warning"></i>}
                                statsText="Total Ordering"
                                statsValue={this.state.orderCount}
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="View more ..."
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="fa fa-table text-success"></i>}
                                statsText="Total Tables"
                                statsValue={this.state.tableCount}
                                statsIcon={<i className="fa fa-calendar-o"></i>}
                                statsIconText="View more ..."
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-ticket text-danger"></i>}
                                statsText="Total Reservations"
                                statsValue={this.state.totalReservation}
                                statsIcon={<i className="fa fa-clock-o"></i>}
                                statsIconText="View more ..."
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-box2 text-info"></i>}
                                statsText="Total Categories"
                                statsValue={this.state.categoryCount}
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="View more ..."
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-coffee text-info"></i>}
                                statsText="Total Cuisine Items"
                                statsValue={this.state.optionFoodItemCount}
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="View more ..."
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-id text-info"></i>}
                                statsText="Total Contacts"
                                statsValue={this.state.contactCount}
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="View more ..."
                            />
                        </Col>
                        <Col lg={3} sm={6}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-mail text-info"></i>}
                                statsText="Total Emails"
                                statsValue={this.state.totalEmail}
                                statsIcon={<i className="fa fa-refresh"></i>}
                                statsIconText="View more ..."
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
export default connect(mapStateToProps)(Dashboard);
