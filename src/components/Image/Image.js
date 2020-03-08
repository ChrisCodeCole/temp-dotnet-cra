import React from 'react';
import classes from './Image.module.css';

const Image = ({ image, style, alt, imageStyles }) => {
	return (
		<div className={classes.imageContainer} style={style}>
			<img className={classes.image} src={image} alt={alt} style={imageStyles}/>
		</div>
	);
};

export default Image;
