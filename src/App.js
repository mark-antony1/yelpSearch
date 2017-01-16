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
  handleSubmit(e) {
		var self = this;
		e.preventDefault();
		axios.get('http://107.170.197.15/yelpSearch', {
			params: {
				term: 'india',
				location: 'san francisco'
			}
		})
		.then(function(data) {
			console.log(data.data.businesses)
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
        <p className="App-intro">
          <SearchArea handleSubmit={this.handleSubmit.bind(this)}/>
          <BusinessList businesses={this.state.businesses}/>
        </p>
      </div>
    );
  }
}

export default App;
