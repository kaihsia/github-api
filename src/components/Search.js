import React, { Component } from 'react';
import '../App.css';

export default class Search extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.props.inputHandler} />
        <button onClick={this.props.submitHandler}>Search</button>
      </div>
    );
  }
}