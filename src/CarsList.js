import React, { Component } from 'react';
import axios from 'axios';
import JsonTable from 'ts-react-json-table';
import Button from '@material-ui/core/Button';

class CarsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carsList: [],
            successMessage: ''
        }
        this.callService();
        this.render();
    }

    callService() {
        axios.get('http://localhost:3000/cars')
        .then(res => {
            const cars = res.data;
            console.log(cars);
            this.setState({ carsList: cars});
            });
        }

    onClickRow(e, item){
        console.log('e' + e);
        console.log('item' + item);
    }
 
    render() {
        return (
        <div>
            <JsonTable rows={this.state.carsList} columns={['Id', 'Name']} onClickRow={this.onClickRow} />
            <Button variant="contained" id="carsListButton" href="/">Go to Cars Form!</Button>
        </div>
        );
    }
}


export default CarsList;
