import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import classes from './Footer.module.css';
import RemoveIcon from '@material-ui/icons/Remove';

const Footer = () => (
	<div className={classes.Footer}>
		<Link to='/'>
			<Button>
				<RemoveIcon />
				Why
			</Button>
		</Link>
		<Link to='/'>
			<Button>
				<RemoveIcon />
				About Us
			</Button>
		</Link>
		<Link to='/'>
			<Button>
				<RemoveIcon />
				Contact Us
			</Button>
		</Link>
	</div>
);

export default Footer;
