import React from 'react';
import classes from './Name.module.css';

const Name = props => (
	<div className={classes.Name}>
		<h3>{props.children}</h3>
	</div>
);

export default Name;
