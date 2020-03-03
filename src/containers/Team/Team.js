import React, { useState, useEffect } from 'react';
import classes from './Team.module.css';
import Header from '../../components/Header/Header';
// import Description from './';
// import Image from './';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Grid from '@material-ui/core/Grid';

const Team = () => {
	const [members, setMembers] = useState([
		{
			id: 1,
			name: 'Tim Yu',
			position: 'Founder',
		},
		{
			id: 2,
			name: 'Helen Harris',
			position: 'Founder',
		},
		{
			id: 3,
			name: 'Stanley Chen',
			position: 'Founder',
		},
		{
			id: 4,
			name: 'Christian Coleman',
			position: 'Founder',
		},
	]);

	let TeamHeader = 'Our People';
	// let Description = 'Meet the team!';

	return (
		<div className={classes.Team}>
			<div className={classes.Header}>
				<Header headerText={TeamHeader} />
			</div>
			<div>{/* <Description children={Description} /> */}</div>

			<Grid container spacing={3}>
				{members.map(member => (
					<Grid item xs={6}>
						<div key={member.id} className={classes.Member}>
							<h1 className={classes.Name}>{member.name}</h1>
							{/* <Image /> */}
							<h6 className={classes.Position}>
								{member.position}
							</h6>
							<div className={classes.SocialIcons}>
								<SocialIcons />
							</div>
							{/* <Description /> */}
						</div>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Team;
