import React, { Component } from 'react';

import { connect } from 'react-redux';
import { smurfSignUpRequest } from '../actions/index';
import { Grid, Paper, TextField, Button } from '@material-ui/core';


export class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        this.props.smurfSignUpRequest(this.state);
    }

    render() {
        return (
            <Grid>
                <Paper>
                    <form onSubmit={this.onSubmit}>
                        <TextField
                            id="outlined-basic"
                            label="name"
                            name="name"
                            margin="normal"
                            variant="outlined"
                            value={this.state.name}
                            onChange={this.handleChanges}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="age"
                            name="age"
                            margin="normal"
                            variant="outlined"
                            value={this.state.age}
                            onChange={this.handleChanges}
                            required
                        />
                        <TextField
                            id="outlined-basic"
                            label="height"
                            name="height"
                            margin="normal"
                            variant="outlined"
                            value={this.state.height}
                            onChange={this.handleChanges}
                            required
                        />
                        <Button type='submit' style={{ background: 'lightgreen' }}>submit</Button>
                        {/* <Button style={{ background: 'red', color: 'white' }}>DELETE</Button> */}
                    </form>
                </Paper>
            </Grid>

        )
    }
}



export default connect((state) => { return {} }, { smurfSignUpRequest })(SmurfForm);
