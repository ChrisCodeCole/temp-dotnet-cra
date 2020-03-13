import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.css';

const Button = ({ buttonText, style, to }) => {
	return (
		<Link className={classes.link} style={style} to={to}>
			<p>{buttonText}</p>
		</Link>
	);
};

export default Button;
