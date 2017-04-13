import React, { Component } from 'react';
import '../App.css';

export default class Repo extends Component {
  render() {
    const { repo } = this.props;
    return (
      <li>
        <h3>{repo.full_name}</h3>
        <p>{repo.description}</p>
        <p>{repo.stargazers_count}</p>
      </li>
    );
  }
}
