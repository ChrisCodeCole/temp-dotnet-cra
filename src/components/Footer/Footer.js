import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import classes from './Footer.module.css';
import RemoveIcon from '@material-ui/icons/Remove';

const Footer = ({ style }) => (
	<div className={classes.Footer} style={style}>
		<Link className={classes.footerLink} to='/team'>
			<Button>
				<RemoveIcon />
				Team
			</Button>
		</Link>
		<Link className={classes.footerLink} to='/about2'>
			<Button>
				<RemoveIcon />
				About Us
			</Button>
		</Link>
		<Link className={classes.footerLink} to='/contact'>
			<Button>
				<RemoveIcon />
				Contact Us
			</Button>
		</Link>
	</div>
);

export default Footer;
