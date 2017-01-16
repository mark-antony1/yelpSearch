import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchArea from './SearchArea'
import BusinessList from './BusinessList'
class App extends Component {
  constructor() {
    super();
    this.state={
      businesses: []
    }
  }
  handleSubmit(e, term, location) {
		e.preventDefault();
    var self = this;
		axios.get('http://107.170.197.15/yelpSearch', { params: { term, location } })
		.then(function(data) {
			self.setState({
				businesses: data.data.businesses
			})
		})
	}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Yelp Search
          <img style={{width: '100px', height: '100px'}}src='http://static.wixstatic.com/media/324cb8_a99ecf6eb33346f598790d046671e7e8.png'/>
        </div>
        <div className="App-intro">
          <SearchArea handleSubmit={this.handleSubmit.bind(this)}/>
          <BusinessList businesses={this.state.businesses}/>
        </div>
      </div>
    );
  }
}

export default App;
