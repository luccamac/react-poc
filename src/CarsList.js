import React, { Component } from 'react';
import axios from 'axios';
import JsonTable from 'ts-react-json-table';

class CarsList extends Component {

    // carsList = [];

    constructor(props) {
        super(props);
        this.state = {
            carsList: []
        }
        this.callService();
        this.render();
    }

    callService() {
        return axios.get('http://localhost:8001/cars')
        .then(res => {
            const cars = res.data;
            console.log(cars);
            this.setState({ carsList: cars});
            });
        }
 
        render() {
            return (<JsonTable className="table table-striped" rows={this.state.carsList} />); }
    }


export default CarsList;
