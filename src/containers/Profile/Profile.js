import React from 'react';
import classes from './Profile.module.css';
import logo from '../../assets/logo/GainzLogoFinal.png';
import MadeByEngineersForEngineers from '../../components/MadeByEngineersForEngineers/MadeByEngineersForEngineers';
import Header from '../../components/Header/Header';
import ProfileInfo from '../../components/ProfileInfo/profileInfo';
// import Image from './'

const Profile = () => (
	<div className={classes.Profile}>
		<img src={logo} alt='logo' className={classes.Logo} />
		<MadeByEngineersForEngineers />
		<Header />
		{/* <Image /> */}
		<ProfileInfo />
	</div>
);

export default Profile;
