import React, { Component } from 'react'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

class LeftMenu extends Component {
    render(){
        return(
            <div>
                <Paper style={style}>
                    <Menu>
                        <MenuItem primaryText="Table" />
                        <MenuItem primaryText="Help &amp; feedback" />
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign out" />
                    </Menu>
                </Paper>
            </div>
        );
    }
}

export default LeftMenu