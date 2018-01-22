import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import {userLogin, chooseRest} from '../actions/index'
import {withRouter} from "react-router-dom"
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Button from '../elements/CustomButton/CustomButton';
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            user:'',
            open:false
        }
     }

    handleClose()
    {
        this.setState({open: false});
    }

    chooseRestaurant(obj)
    {
        console.log("OBJ res",obj);
        this.setState({open: false});
        this.props.userLogin(this.state,obj);
        this.props.history.push("ho");
    }

    onSubmit(e){
        e.preventDefault();
        const {email , password} = this.state ;
        axios.post('http://api.mysite.local:8080/login', {
            email, 
            password
          })
          .then(response=> {
            console.log("RES DATA",response);
            this.setState({rest: response.data.restaurants,user:response.data.user_info})
            if(this.state.rest.length > 1)
            {
                this.setState({open: true});
            }
              console.log("SUCCESS");
            // this.props.history.push("ho");
            // let detail ={
            //   email:this.state.email,
            //   password:this.state.password};
            // axios.post('http://api.mysite.local:8080/login', detail)
            // .then(res=> {
            //     console.log("RES DATA",res.data);
                // this.props.userLogin(res.data);
                // this.setState({err: false});
                
            // });
            
        //   })
        //   .catch(error=> {
        //     this.refs.email.value="";
        //     this.refs.password.value="";
        //     this.setState({err: true});
          });
     }

     createList(){
       if(this.state.rest instanceof Array){
         return this.state.rest.map(function(object, i){
             return <ListItem primaryText={object.name} key={object.id} onClick={()=>this.chooseRestaurant(object)}/>;
         }.bind(this))
       }
     }

     onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
     }
    render() {
        const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose.bind(this)}
        />,
        <FlatButton
            label="Submit"
            primary={true}
            disabled={true}
            onClick={this.handleClose}
        />,
        ];
        let error = this.state.err ;
        let msg = (!error) ? 'Login Successful' : 'Wrong Credentials' ;
        let name = (!error) ? 'alert alert-success' : 'alert alert-danger' ;
	    return (
            <div >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Login</div>
                                <div className="panel-body">   
                                    <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                                        {error != undefined && <div className={name} role="alert">{msg}</div>}
                                    </div>  
                                    <form className="form-horizontal" role="form" method="POST" onSubmit= {this.onSubmit.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

                                            <div className="col-md-6">
                                                <input id="email" type="email" ref="email" className="form-control" name="email"  onChange={this.onChange.bind(this)} required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="password" className="col-md-4 control-label">Password</label>

                                            <div className="col-md-6">
                                                <input id="password" type="password" ref="password" className="form-control" name="password"  onChange={this.onChange.bind(this)}  required />
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <div className="col-md-8 col-md-offset-4">
                                                <Button
                                                    bsStyle="info"
                                                    fill
                                                    type="submit"
                                                >
                                                    Login
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog
                    title="Choose your restaurant"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    >
                    <List>
                        {this.createList()}
                    </List>
                </Dialog>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({userLogin: userLogin,chooseRest : chooseRest}, dispatch);
}

export default connect(null,matchDispatchToProps)(withRouter(LoginForm));