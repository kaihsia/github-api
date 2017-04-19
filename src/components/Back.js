import React, { Component } from 'react';
import '../App.css';

export default class Back extends Component {
  render() {
    const { goBack } = this.props;
    return (
      <div className="left-align">
        <button onClick={goBack} className="btn waves-effect waves-light">Back</button>
      </div>
    );
  }
}