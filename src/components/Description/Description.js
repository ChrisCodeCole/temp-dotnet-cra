import React from 'react';
import classes from './Description.module.css';

const Description = ({ style, text }) => {
	return (
		<div className={classes.descriptionContainer} style={style}>
			<p className={classes.descriptionContent}>{text}</p>
		</div>
	);
};

export default Description;
