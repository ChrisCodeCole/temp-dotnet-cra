import React from 'react';
import classes from './SubHeader.module.css';

//TODO: This particular component won't be used anywhere else, move directly within it's layout page

export default function SubHeader() {
	return (
		<div className={classes.subHeaderWrapper}>
			<h2 className={classes.subHeader}>Welcome!</h2>
			<p className={classes.subHeaderDescription}>
				Please sign in or sign up using your google account.
			</p>
		</div>
	);
}
