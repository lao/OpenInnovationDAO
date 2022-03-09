import React, { Component } from 'react';
import './App.css';
import { MetaMaskAuth } from './components/MetaMaskAuth';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://miro.medium.com/max/555/1*FjSkfan-Kh3vrgtlW8UP_g.png" alt="MetaMask logo" />
          <h1 className="App-title"><MetaMaskAuth /></h1>
        </header>
      </div>
    );
  }
}

export default App;