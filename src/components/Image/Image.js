import React from 'react';
import classes from './Image.module.css';

const Image = ({ image, imageDescription, style }) => {
	return (
		<div className={classes.imageContainer} style={style}>
			{/* <imp classname={classes.image} src={image} alt='' /> */}
			<img className={classes.image} src={image} alt={imageDescription} />
		</div>
	);
};

export default Image;
