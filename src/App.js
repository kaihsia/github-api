import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import request from 'superagent';
import Results from './components/Results';
import Search from './components/Search';
import Issues from './components/Issues';
import Home from './components/Home';
import Back from './components/Back';
import './App.css';

// Testing
// import issuess from './issues.json';
// import repositories from './repo.json';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      results: null,
      issues: null
    };
  }

  inputHandler(e) {
    this.setState({search: e.target.value});
  }

  submitHandler(e) {
    e.preventDefault();
    // Prod
    let that = this; 
    request
      .get('https://api.github.com/search/repositories')
      .query({ q: this.state.search })
      .end(function (err, res) {
        console.log(res.body.items);
        if(err) throw err;
        that.setState({
          results: res.body.items,
          issues: null,
          search: null
        });
      });

    // Testing
    // this.setState({results: repositories});
  }

  issuesHandler(user, repo) {
    // Prod
    let that = this;
    request
      .get('https://api.github.com/repos/' + user + '/' + repo + '/issues')
      .end(function(err, res) {
        if (err) throw err;
        console.log('issues', res.body);
        that.setState({
          issues: res.body
        })
      });
    // Testing
    // this.setState({
    //   issues: issuess
    // });
  }

  render() {
    return (    
      <BrowserRouter>
        <div>
          <h1>{this.state.hello}</h1>
          <Back />
          <Switch>
            <Home>
              <Route path="/" render={(props) => { 
                return (
                  <div>
                    <Search submitHandler={this.submitHandler.bind(this)} inputHandler={this.inputHandler.bind(this)} {...props} />
                    <Results issuesHandler={this.issuesHandler.bind(this)} results={this.state.results} {...props} />
                  </div>
                );
              }}/>          
              <Route path="/issues/:id/:repo" render={(props) => {
                return (
                  <div>
                    <Issues issues={this.state.issues} {...props} />
                  </div>
                );
              }} />  
            </Home>          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
