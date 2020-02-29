import React from 'react';
import classes from './Position.module.css';

const Position = props => {
	console.log(props);
	return (
		<div className={classes.Position}>
			<h3>{props.children}</h3>
		</div>
	);
};

export default Position;
