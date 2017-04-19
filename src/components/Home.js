import React, { Component } from 'react';
import '../App.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}
