import React from 'react';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import classes from './SocialIcons.module.css';

const SocialIcons = ({ style }) => (
	<div className={classes.socialIcons} style={style}>
		<Facebook />
		<Twitter />
		<Instagram />
	</div>
);

export default SocialIcons;
