import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Repo from './Repo';
import '../App.css';

export default class Results extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="App">
        <ul>
          {
            (results && results.length > 0) ? results.map((repo) => {
              let user = repo.owner.login;
              let rp = repo.name;
              return (
                  <Link onClick={() => this.props.issuesHandler(user, rp)} key={repo.id} to={'/issues/' + user + '/' + rp}><Repo repo={repo}/></Link>
              );
            }) : null
          }
        </ul>
      </div>
    );
  }
}
