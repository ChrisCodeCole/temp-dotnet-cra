import React, { useState, useEffect } from 'react';
import classes from './Team.module.css';
import Header from '../../components/Header/Header';
// import Description from './';
// import Image from './';
import Name from '../../components/Name/Name';
import Position from '../../components/Position/Position';
import SocialIcons from '../../components/SocialIcons/SocialIcons';

const teamMember = [
	'Tim Yu',
	'Helen Harris',
	'Christian Coleman',
	'Stanley Chen',
];
const personPosition = 'Founder';

const Team = () => {
	const [names, setNames] = useState([]);
	const [position, setPosition] = useState('');

	let TeamHeader = 'Our People';
	// let Description = 'Meet the team!';

	useEffect(() => {
		setNames(teamMember);
		setPosition(personPosition);
	}, []);

	return (
		<div className={classes.Team}>
			<div className={classes.Header}>
				<Header children={TeamHeader} />
			</div>
			<div>{/* <Description children={Description} /> */}</div>

			{/* TODO */}
			{/* Map for each person: */}
			{/* Position, image, social icon, name, and description */}
		</div>
	);
};

export default Team;
