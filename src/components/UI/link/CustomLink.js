import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CustomLink.module.css';

export default function CustomLink({ className, id, to, text, children }) {
	return (
		<Link id={id} className={`${classes.link} ${className ?? ''}`} to={to}>
			{text}
		</Link>
	);
}
