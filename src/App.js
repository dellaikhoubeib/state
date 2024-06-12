import React, { Component } from 'react';
import State from'./State'
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
          <h1>State React App</h1>
          <State></State>
        </header>
      </div>
    );
  }
}

export default App;

