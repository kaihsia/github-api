import React, { Component } from 'react';
import '../App.css';

export default class Repo extends Component {
  render() {
    const { repo, issues, issuesHandler } = this.props;
    return (
      <li onClick={() => issuesHandler(repo.owner.login, repo.name)}>
        <div className="collapsible-header card-panel blue lighten-4">
          <h3>{repo.full_name}</h3>
          <p>{repo.description}</p>
          <p>{repo.stargazers_count} Stars</p>
        </div>
        <div className="collapsible-body card-panel red lighten-4">
          <h4>Issues for {repo.name} by {repo.owner.login}</h4>
          <ul>
            {
              (issues&&issues.length) ? (issues.map((issue) => {
                return (
                  <li key={issue.id}>
                    <form action="#">
                      <p className="center-align">
                        <input type="checkbox" id="status" checked={ issue.state === "open" ? false : true }/>
                        <label htmlFor="status">{issue.title}</label>
                      </p>
                    </form>
                  </li>
                );
              })) : "No Issues"
            }
          </ul>
        </div>
      </li>
    );
  }
}
