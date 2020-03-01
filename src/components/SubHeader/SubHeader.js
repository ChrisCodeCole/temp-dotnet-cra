import React from 'react';
import classes from './SubHeader.module.css';

const SubHeader = ({ subheaderText, descriptionText, style }) => {
	return (
		<div className={classes.subHeaderWrapper} style={style}>
			<h2 className={classes.subHeader}>{subheaderText}</h2>
			<p className={classes.subHeaderDescription}>{descriptionText}</p>
		</div>
	);
};

export default SubHeader;
