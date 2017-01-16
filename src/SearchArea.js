import React, { Component } from 'react';

export default class SearchBar extends Component {
	constructor() {
		super();
		this.state = {
			termText: '',
			locationText: '',
			businesses: []
		}
	}
	handleFormSubmit(e) {
		e.preventDefault()
		this.props.handleSubmit(e, this.state.termText, this.state.locationText)
	}
	handleChange(event) {
		if(event.target.name === 'termText'){
			this.setState({
				termText: event.target.value
			})
		}else {
			this.setState({
				locationText: event.target.value
			})
		}
	}
	render() {
		return (
			<div style={styles.container}>
				<form onSubmit={this.handleFormSubmit.bind(this)} style={styles.searchBar}>
					<div style={styles.searchInput}>
						<legend style={styles.legendStyle}>Find</legend>
						<input name='termText' placeholder='search...' value={this.state.termText} style={styles.searchText} onChange={this.handleChange.bind(this)} type='text'/>
						<div style={{borderRight: '1px solid black', margin: '0 10px 0 10px'}}/>
						<input name='locationText' placeholder='location...' value={this.state.locationText} style={styles.searchText} onChange={this.handleChange.bind(this)} type='text'/>
					</div>
					<input style={styles.searchButton} type='submit'/>
				</form>
			</div>
		)
	}
}

const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchBar: {
		border: '3px solid #D70306',
		justifyContent: 'space-between',
		borderRadius: '3px',
		alignItems: 'center',
		display: 'flex',
		width: '600px',
		height: '40px',
	},
	searchText: {
		border: 'none',
		fontSize: '16px',
		fontFamily: 'Dosis sans-serif',
		width: '200%'
	},
	legendStyle: {
		borderRight: '1px solid black',
		marginRight: '10px',
		paddingRight: '10px',
		fontWeight: 'bold',
	},
	searchInput: {
		width: '100%',
		padding: '5px',
		display:'flex',
		flexDirection: 'row',
		outline: '0'
	},
	searchButton: {
		fontWeight: 'bold',
		height: '100%',
		border: 'none',
		color: 'white',
		fontSize: '16px',
  	backgroundColor: '#D70306',
	}
}