import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import CarsTable from './CarsTable';

class CarsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            successMessage: ''
        }
    }
 
    render() {
        return (
        <div>
        <h1>Cars List</h1>
            <CarsTable></CarsTable>
            <Button variant="contained" color="secondary" id="carsListButton" href="/">
            Go to Cars Form!
            </Button>
        </div>
        );
    }
}


export default CarsList;
