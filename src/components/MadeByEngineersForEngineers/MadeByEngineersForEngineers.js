import React from 'react';
import classes from './MadeByEngineersForEngineers.module.css';

const MadeByEngineersForEngineers = ({ style, textStyle }) => (
	<div className={classes.Engineers} style={style}>
		<h6 style={textStyle}>Made By Engineers For Engineers</h6>
	</div>
);

export default MadeByEngineersForEngineers;
