import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    hello: ""
  }

  async componentDidMount() {
    const res = await fetch("/hello")
    const json = await res.json()
    this.setState(json)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          API Response: {this.state.hello}
        </p>
      </div>
    );
  }
}

export default App;
