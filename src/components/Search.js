import React, { Component } from 'react';
import Back from './Back';
import '../App.css';

export default class Search extends Component {
  render() {
    const { back, history } = this.props;
    return (
      <div className="valign">
        { back ? <Back history={history} /> : null }
        <input type="text" onChange={this.props.inputHandler} />
        <button className="btn waves-effect waves-light" onClick={this.props.submitHandler}>Search</button>
      </div>
    );
  }
}