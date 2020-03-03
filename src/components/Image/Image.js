import React from 'react';
import classes from './Image.module.css';
import IMG from './../../assets/a1.png';

const Image = () => {
	return (
		<div className={classes.imageContainer}>
			{/* <imp classname={classes.image} src={props.image} alt='' /> */}
			<img className={classes.image} src={IMG} alt='for test purposes' />
		</div>
	);
};

export default Image;
