import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
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
      console.log(
        JSON.stringify(response)); this.setState({'value':''});
        this.setState({ successMessage: 'Success!'})}, 
      error => { console.log(error);  this.setState({ successMessage: 'Failed to Submit :('})});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} bssize="lg">
      <FormControl>
      <h1>Garage</h1>
      <p>Your Car Name:</p>
      <p>{this.state.successMessage}</p>
      <TextField
        id="standard-full-width"
        label="Input"
        style={{ "marginLeft": "10%", "marginRight": "10%", "width": "80%" }}
        value={this.state.value}
        onChange={this.handleChange}
        placeholder="Insert your car name here"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}/>
      <input type="submit" id="submit" value="Submit" />
      <Button variant="contained" id="carsListButton" color="secondary" href="/cars-list">Cars List</Button>
      </FormControl>
      </form>
    );
  }

}

export default App;
