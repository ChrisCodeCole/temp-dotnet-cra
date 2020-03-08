import React, { Component } from 'react';
import classes from './Landing.module.css';
import NavBar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import MadeByEngineersForEngineers from '../../components/MadeByEngineersForEngineers/MadeByEngineersForEngineers';
import Image from '../../components/Image/Image';
import Description from '../../components/Description/Description';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Footer from '../../components/Footer/Footer';
import IntroIMG from '../../assets/images/intro_image_1.png';
export default class Landing extends Component {
	render() {
		return (
			<div className={classes.landingWrapper}>
				<NavBar />
				<div className={classes.midContainer}>
					<MadeByEngineersForEngineers
						style={{
							display: 'inline',
							gridColumn: '1 / 2',
							gridRow: '1 / 3',
							placeSelf: 'center',
							transform: 'rotate(-90deg)',
						}}
						textStyle={{
							whiteSpace: 'nowrap',
							position: 'initial',
							transform: 'rotate(0)',
						}}
					/>
					<Header
						headerText={'Welcome to Gainz!'}
						style={{
							gridColumn: '2 / 3',
							gridRow: '1 / 2',
							display: 'flex',
							alignItems: 'center',
						}}
					/>
					<Description
						text={
							'Work in IT? Like to Lift? Meet other people who do to!'
						}
						style={{
							gridColumn: '2 / 3',
							gridRow: '2 / 3',
							textAlign: 'center',
							paddingLeft: '15%',
							display: 'flex',
							alignItems: 'center',
							// placeSelf: 'center',
						}}
					/>
					<Image
						image={IntroIMG}
						imageDescription='intro weights image'
						style={{
							gridColumn: '3 / 4',
							gridRow: '1 / 3',
							height: 'initial',
							width: 'initial',
						}}
						imageStyles={{
							objectFit: 'cover',
							minWidth: 0,
							minHeight: 0,
							maxHeight: '70vh',
						}}
					/>
				</div>
				<div className={classes.footerContainer}>
					<SocialIcons
						style={{
							display: 'inline-block',
						}}
					/>
					<Footer
						style={{
							display: 'inline-block',
						}}
					/>
				</div>
			</div>
		);
	}
}
