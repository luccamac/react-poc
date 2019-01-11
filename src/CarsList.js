import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import CarsTable from './CarsTable';
import axios from 'axios';

class CarsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            successMessage: ''
        }
    }

    onClick(){
        axios.get('http://localhost:3000/cars/csv')
        .then(function(response){
            var blob = new Blob([response.data]);
            var url = window.URL.createObjectURL(blob);
            var anchor = document.createElement("a");
            anchor.download = "carsList.csv";
            anchor.href = url;
            anchor.click();
        })
        .catch(function(error){
            console.log(error);
        });
    }
 
    render() {
        return (
        <div>
        <h1>Cars List</h1>
            <CarsTable></CarsTable>
            <Button variant="contained" color="secondary" id="carsListButton" href="/">Go to Cars Form!</Button>
            <Button variant="contained" color="primary" onClick={this.onClick} id="exportToCsv">Export to CSV!</Button>
        </div>
        );
    }
}


export default CarsList;
