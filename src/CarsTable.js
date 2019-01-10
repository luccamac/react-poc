import React, { Component } from 'react';
import axios from 'axios';
import JsonTable from 'ts-react-json-table';
import './App.css';

class CarsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carsList: [],
        }
        this.getCars();
    }

    getCars() {
        axios.get('http://localhost:8001/cars')
        .then(res => {
            const cars = res.data;
            console.log(cars);
            this.setState({ carsList: cars});
            });
    }

    onClickRow(item, e) {
        axios.delete('http://localhost:8001/cars/' + e.id)
        .then(this.getCars)
        .then(window.location.reload());
    }
 
    render() {
        return (
            <div>
            <JsonTable className="table table-striped" rows={this.state.carsList} 
            columns={['id', 'name']} onClickRow={this.onClickRow} />
            </div>
        );
    }
}


export default CarsTable;
