import React, { Component } from 'react';
import Repo from './Repo';
import '../App.css';

export default class Results extends Component {
  render() {
    const { results } = this.props;
    return (
      <div>
        <ul className="collapsible" data-collapsible="accordion">
          {
            (results && results.length > 0) ? results.map((repo) => {
              return (
                  <Repo issuesHandler={this.props.issuesHandler} key={repo.id} issues={this.props.issues} repo={repo}/>
              );
            }) : null
          }
        </ul>
      </div>
    );
  }
}
