import React, { Component } from 'react';
import '../App.css';

export default class Issues extends Component {
  render() {
    let { id, repo } = this.props.match.params; 
    let { issues } = this.props;   
    return (
      <div className="App">
        <h1>{id}</h1>
        <h2>{repo}</h2>
        <ul>
          {
            issues&&issues.length ? (issues.map((issue) => {
              return (
                <li key={issue.id}>
                  <input
                    type="checkbox"
                    checked={ issue.state === "open" ? false : true }
                  />
                  <span>{issue.title}</span>
                </li>
              );
            })) : null
          }
        </ul>
      </div>
    );
  }
}
