import React from 'react';
import classes from './Image.module.css';
import IMG from './../../assets/a1.png';

const Image = () => {
	return (
		<div className={classes.imageContainer}>
			<img className={classes.image} src={IMG} alt='' />
		</div>
	);
};

export default Image;
