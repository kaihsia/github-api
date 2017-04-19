import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import request from 'superagent';
import Results from './components/Results';
import Search from './components/Search';
import Home from './components/Home';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: "",
      results: null,
      issues: null,
      back: false
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
        // console.log(res.body.items);
        if(err) throw err;
        that.setState({
          results: res.body.items,
          issues: null,
          search: null,
          back: true
        });
      });
  }

  issuesHandler(user, repo) {
    // Prod
    let that = this;
    request
      .get('https://api.github.com/repos/' + user + '/' + repo + '/issues')
      .end(function(err, res) {
        if (err) throw err;
        // console.log('issues', res.body);
        that.setState({
          issues: res.body
        })
      });
  }

  render() {
    return (    
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Home className="valign-wrapper">
              <Route path="/" render={(props) => { 
                return (
                  <div>
                    <Search submitHandler={this.submitHandler.bind(this)} back={this.state.back} inputHandler={this.inputHandler.bind(this)} {...props} />
                    <Results issuesHandler={this.issuesHandler.bind(this)} issues={this.state.issues} results={this.state.results} {...props} />
                  </div>
                );
              }}/>    
            </Home>          
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
