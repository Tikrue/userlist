import React, { Component } from 'react';

import Users from './components/Users'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <p className="logo">Nord Software</p>
        </div>
        <Users />
      </div>
    );
  }
}

export default App;
