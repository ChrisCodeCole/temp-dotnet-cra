import React from 'react';
import classes from './Image.module.css';

const Image = () => {
	return (
		<div className={classes.imageContainer}>
			<img className={classes.image} src='#' alt='' />
		</div>
	);
};

export default Image;
