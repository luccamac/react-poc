import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Volkswagen Gol'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // var headers = { 'Content-Type': 'application/json' };
    var car = { "name": this.state.value };
    event.preventDefault();
    axios.post('http://localhost:8001/cars', car)
    // , { headers: headers }
    .then(response => console.log("Submitted with success!"),
          error => "Error submitting the form.");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Garage</p>
        <label>Your Car Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <a href="/cars-list">Go to Cars List</a>
      </form>
    );
  }

}

export default App;
