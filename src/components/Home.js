import React, { Component } from 'react';
import '../App.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        Welcome!
        {this.props.children}
      </div>
    );
  }
}
