import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      value: '',
      successMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.setState({ successMessage: ''});
  }

  handleSubmit(event) {
    var car = { "name": this.state.value };
    event.preventDefault();
    axios.post('http://localhost:3000/cars', car)
    .then(response => { 
      console.log(JSON.stringify(response)); this.setState({ successMessage: 'Success!'})}, 
      error => { console.log(error);  this.setState({ successMessage: 'Failed to Submit :('})});
  }

  clearForm(){
    this.setState({ value: ''});
    this.render();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>Garage</h1>
      <p id="carLabel">Your Car Name:</p>
      <p>{this.state.successMessage}</p>
      <Input type="text" id="nameInput" defaultValue={this.state.value} onChange={this.handleChange} />
      <input type="submit" id="submit" value="Submit" />
      <Button variant="contained" id="carsListButton" href="/cars-list">Go to Cars List!</Button>
      </form>
    );
  }

}

export default App;
