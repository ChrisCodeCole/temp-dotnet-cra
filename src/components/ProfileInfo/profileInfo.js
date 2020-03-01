import React from 'react';
import classes from './profileInfo.module.css';

const ProfileInfo = props => (
	<div className={classes.ProfileInfo}>
		<h1>Profile</h1>
		<p>Full Name:{props.name}</p>
		<p>City:{props.city}</p>
		<p>Zip Code:{props.zipcode}</p>
		<p>Career:{props.career}</p>
		<p>Age:{props.age}</p>
		<p>Email:{props.email}</p>
		<p>Number:{props.number}</p>
		<p>Github:{props.github}</p>
	</div>
);

export default ProfileInfo;
