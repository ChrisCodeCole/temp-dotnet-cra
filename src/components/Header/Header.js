import React from 'react';
import classes from './Header.module.css';

const Header = props => {
	return (
		<div className={classes.headerWrapper}>
			<h1 className={classes.headerText}>{props.children}</h1>
		</div>
	);
};

export default Header;
