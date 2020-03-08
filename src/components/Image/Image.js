import React from 'react';
import classes from './Image.module.css';

const Image = ({ image, imageDescription, style, imageStyles }) => {
	return (
		<div className={classes.imageContainer} style={style}>
			<img className={classes.image} src={image} alt={imageDescription} style={imageStyles} />
		</div>
	);
};

export default Image;
