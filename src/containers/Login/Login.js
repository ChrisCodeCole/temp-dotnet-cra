import React, { Component } from 'react';
import classes from './Login.module.css';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';
import dumbellImage from '../../assets/login 1.png';

export default class Login extends Component {
	render() {
		return (
			<div className={classes.loginWrapper}>
				<img
					className={classes.dumbellImage}
					src={dumbellImage}
					alt='dumbell image'
				/>
				<div className={classes.rightGrid}>
					<Logo
						style={{
							gridArea: 'logo',
							width: '50%',
							justifySelf: 'end',
							marginRight: '10%',
							marginTop: '10%',
						}}
					/>
					<Header
						headerText={'Login'}
						style={{ gridArea: 'header', alignSelf: 'center' }}
					/>
					<SubHeader
						subheaderText={'Welcome!'}
						descriptionText={
							'Please sign in or sign up using your gogle account.'
						}
						style={{ gridArea: 'subheader' }}
					/>
					<SocialIcons
						style={{
							gridArea: 'social-icons',
							display: 'flex',
							flexDirection: 'column',
							justifySelf: 'end',
							marginRight: '20%',
						}}
					/>
					<Footer
						style={{
							gridArea: 'footer',
							justifySelf: 'end',
							marginRight: '10%',
							marginBottom: '5%',
						}}
					/>
				</div>
			</div>
		);
	}
}
