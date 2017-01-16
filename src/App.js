import React, { Component } from 'react';

import './App.css';
import SearchArea from './SearchArea'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Yelp Search
          <img style={{width: '100px', height: '100px'}}src='http://static.wixstatic.com/media/324cb8_a99ecf6eb33346f598790d046671e7e8.png'/>
        </div>
        <p className="App-intro">
          <SearchArea/>
        </p>
      </div>
    );
  }
}

export default App;
