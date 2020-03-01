import React, { Component } from 'react';
import classes from './Header.module.css';

export default class Header extends Component {
	render() {
		return (
			<div className={classes.headerWrapper} style={this.props.style}>
				<h1 className={classes.headerText}>{this.props.headerText}</h1>
			</div>
		);
	}
}
