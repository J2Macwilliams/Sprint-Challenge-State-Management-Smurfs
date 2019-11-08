import React, { Component } from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import axios from 'axios';

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
        console.log(this.state);
        axios.post('http://localhost:3333/smurfs', { smurf: this.state });
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
                        <Button type='submit'>submit</Button>
                    </form>
                </Paper>
            </Grid>

        )
    }
}

export default SmurfForm
