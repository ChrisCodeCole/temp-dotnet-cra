import React from 'react';
import classes from './Description.module.css';

const Description = ({ style, text }) => {
	return (
		<div className={classes.descriptionContainer}>
			<p className={classes.descriptionContent} style={style}>
				{text}
			</p>
		</div>
	);
};

export default Description;
