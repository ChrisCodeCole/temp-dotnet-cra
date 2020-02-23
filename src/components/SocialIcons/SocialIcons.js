import React from 'react';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import classes from './SocialIcons.module.css';

const SocialIcons = () => (
	<div className={classes.socialIcons}>
		<Facebook />
		<Twitter />
		<Instagram />
	</div>
);

export default SocialIcons;
