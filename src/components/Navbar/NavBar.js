import React, { Component } from 'react';
import classes from './NavBar.module.css';
// import CustomLink from '../UI/link/CustomLink';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export default class NavBar extends Component {
	render() {
		return (
			<div className={classes.navBarWrapper}>
				<p className={classes.navBarText}>WELCOME!</p>
				<Logo className={classes.navBarLogo} />
				<Link className={classes.navBarLink} to={'/'}>
					SIGN IN!
				</Link>
			</div>
		);
	}
}
