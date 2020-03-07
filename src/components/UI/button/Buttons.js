import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

//
const Button = () => {
	return (
		<Link classname={classes.link} to='#'>
			Button
		</Link>
	);
};

export default Button;
