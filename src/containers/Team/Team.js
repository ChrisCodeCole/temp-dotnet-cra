import React, { useState } from 'react';
import classes from './Team.module.css';
import Header from '../../components/Header/Header';
import Description from '../../components/Description/Description';
import Image from '../../components/Image/Image';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import cameraShyGirl from '../../assets/images/camera_shy_girl.png';
import cameraShyGuy from '../../assets/images/camera_shy_guy.png';

const Team = () => {
	const [members, setMembers] = useState([
		{
			id: 1,
			name: 'Tim Yu',
			position: 'Founder',
			image: cameraShyGuy,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci vel velit aliquam luctus. Aenean eu dictum orci, vitae suscipit purus. Donec luctus ex id magna egestas elementum. Vivamus fermentum aliquet sem euismod facilisis. Sed quis velit leo. Cras aliquam lorem ac quam pharetra, quis ultrices lacus faucibus. Aenean est est, venenatis non gravida convallis, posuere nec eros. Sed ante risus, cursus ac lacinia eu, sodales at erat.',
		},
		{
			id: 2,
			name: 'Helen Harris',
			position: 'Founder',
			image: cameraShyGirl,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci vel velit aliquam luctus. Aenean eu dictum orci, vitae suscipit purus. Donec luctus ex id magna egestas elementum. Vivamus fermentum aliquet sem euismod facilisis. Sed quis velit leo. Cras aliquam lorem ac quam pharetra, quis ultrices lacus faucibus. Aenean est est, venenatis non gravida convallis, posuere nec eros. Sed ante risus, cursus ac lacinia eu, sodales at erat.',
		},
		{
			id: 3,
			name: 'Stanley Chen',
			position: 'Founder',
			image: cameraShyGuy,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci vel velit aliquam luctus. Aenean eu dictum orci, vitae suscipit purus. Donec luctus ex id magna egestas elementum. Vivamus fermentum aliquet sem euismod facilisis. Sed quis velit leo. Cras aliquam lorem ac quam pharetra, quis ultrices lacus faucibus. Aenean est est, venenatis non gravida convallis, posuere nec eros. Sed ante risus, cursus ac lacinia eu, sodales at erat.',
		},
		{
			id: 4,
			name: 'Christian Coleman',
			position: 'Founder',
			image: cameraShyGuy,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae orci vel velit aliquam luctus. Aenean eu dictum orci, vitae suscipit purus. Donec luctus ex id magna egestas elementum. Vivamus fermentum aliquet sem euismod facilisis. Sed quis velit leo. Cras aliquam lorem ac quam pharetra, quis ultrices lacus faucibus. Aenean est est, venenatis non gravida convallis, posuere nec eros. Sed ante risus, cursus ac lacinia eu, sodales at erat.',
		},
	]);

	const [teamHeader, setteamHeader] = useState('Our People');

	const [teamDescription, setteamDescription] = useState('Meet The Team!');

	return (
		<div className={classes.Container}>
			<div className={classes.HeaderContainer}>
				<Header headerText={teamHeader} />
			</div>
			<div className={classes.TeamDescriptionContainer}>
				<Description text={teamDescription} />
			</div>

			<div className={classes.MembersContainer}>
				{members.map(member => (
					<div key={member.id}>
						<div
							key={member.id}
							className={classes.MemberContainer}
						>
							<div className={classes.MemberPositionContainer}>
								<h6 className={classes.Position}>
									{member.position}
								</h6>
							</div>
							<div className={classes.MemberImageContainer}>
								<Image image={member.image} />
							</div>
							{/* <div className={classes.MemberNameContainer}>
								<h1 className={classes.Name}>{member.name}</h1>
							</div> */}
							{/* <div className={classes.MemberDescriptionContainer}>
								<Description text={member.description} />
							</div> */}
							{/* <div className={classes.SocialIconsContainer}>
								<SocialIcons />
							</div> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
