import React, { Component } from 'react';

export default class BusinessList extends Component {
	formatPhoneNumber(s) {
		var s2 = (""+s).replace(/\D/g, '');
		var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
		return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
	}
	renderBusinesses() {
		var businesses = this.props.businesses;
		if(this.props.businesses) {
			var businessProfiles = businesses.map((business, i) => {
				return (
					<div style={styles.profileContainer}>
						<img src={business.image_url}/>
							<div style={{ width: '40%'}}>
								<a href={business.url} style={{fontWeight: 'bold'}}>{business.name}</a>
								<div>{this.formatPhoneNumber(business.phone)}</div>
								<img src={business.rating_img_url}/>
							</div>
							<div>Newest Review: {business.snippet_text}</div>
					</div>
				)
			})
			return businessProfiles
		}
		return ''
	}
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'center', marginTop: '10px', alignItems: 'center', flexDirection: 'column'}}>
				{this.renderBusinesses()}
			</div>
		)
	}
}

const styles = {
	profileContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '75%',
		display: 'flex',
		flexDirection: 'row',
		padding: '10px',
		borderTop: '1px solid gray',
		margin: '10px'
	}
}