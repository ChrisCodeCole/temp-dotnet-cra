import React, { Component } from 'react';
import classes from './Header.module.css';

export default class Header extends Component {
	render() {
		return (
			<div className={classes.headerWrapper}>
				<h1 className={classes.headerText}>Welcome to Gainz!</h1>
			</div>
		);
	}
}
