import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core';


const useStyles = theme => ({
    root: {
        margin: 50
    }
})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            nilai: 0
        };
    }

    addNilai = (e) => {
        this.setState({
            nilai: this.state.nilai + 1
        })
    }


    render() {
        const { classes } = this.props
        return (
            <Grid container direction="column" spacing={1} className={classes.root}>
                <Grid item>
                    <Button variant="contained" color="primary" onClick={(e) => this.addNilai(e)} >Tambah Nilai</Button>
                </Grid>
                <Grid item>
                    <h1>Nilai state: {this.state.nilai}</h1>
                </Grid>
            </Grid>
            
        );
    }
}

export default withStyles(useStyles)(Home)