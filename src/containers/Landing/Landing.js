import React, { Component } from 'react';
import classes from './Landing.module.css';

import Description from './../../components/Description/Description';
// import Image from './../../components/Image/Image';
// import Button from './../../components/UI/button/Buttons';

export default class Landing extends Component {
	render() {
		return (
			<div className={classes.landingWrapper}>
				Landing
				<Description />
			</div>
		);
	}
}
