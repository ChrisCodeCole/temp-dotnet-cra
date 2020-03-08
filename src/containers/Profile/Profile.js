import React from 'react';
import classes from './Profile.module.css';
import logo from '../../assets/logo/GainzLogoFinal.png';
import MadeByEngineersForEngineers from '../../components/MadeByEngineersForEngineers/MadeByEngineersForEngineers';
import Header from '../../components/Header/Header';
import ProfileInfo from '../../components/ProfileInfo/profileInfo';
import Image from '../../components/Image/Image';
import profileImage from '../../assets/images/profile_image_example.png';

const Profile = () => (
	<div className={classes.Container}>
		<div className={classes.logoContainer}>
			<img src={logo} alt='logo' className={classes.Logo} />
		</div>
		<div className={classes.madeByEngineersForEngineersContainer}>
			<MadeByEngineersForEngineers />
		</div>
		<div className={classes.headerContainer}>
			<Header headerText={'All About You'} />
		</div>
		<div className={classes.profileImageContainer}>
			<Image image={profileImage} style={{ height: '450px' }} />
		</div>
		<div className={classes.profileInfoContainer}>
			<ProfileInfo />
		</div>
	</div>
);

export default Profile;
