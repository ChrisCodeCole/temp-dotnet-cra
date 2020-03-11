import React from 'react';
import classes from './About.module.css';
import NavBar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import AboutImg1 from '../../assets/images/image.png';
import AboutImg2 from '../../assets/images/image_2.png';
import Description from '../../components/Description/Description';

const About = () => {
	return (
		<div className={classes.about1Container}>
			<NavBar />
			<div className={classes.about1Content}>
				<Header headerText='About' style={{ gridArea: 'header' }} />
				<Image
					image={AboutImg1}
					imageDescription='about image1'
					style={{
						gridArea: 'image',
						width: '400px',
					}}
				/>
				<Description
					text='Pariatur sint est consequat amet laboris.'
					style={{
						gridArea: 'text1',
						color: 'white',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				/>
				<Description
					text='Non dolore ad fugiat esse laboris. Proident nostrud exercitation aute enim. Non culpa qui consequat sit incididunt do mollit exercitation.'
					style={{
						gridArea: 'text2',
						color: 'white',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				/>
				<Description
					text='Non dolore ad fugiat esse laboris. Proident nostrud exercitation aute enim. Non culpa qui consequat sit incididunt do mollit exercitation.'
					style={{
						gridArea: 'text3',
						color: 'white',
						height: '200px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				/>
				<Header
					headerText='About'
					style={{
						gridArea: 'header2',
						transform: 'rotate(90deg)',
						margin: '0',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				/>
				<Description
					text='Non dolore ad fugiat esse laboris. Proident nostrud exercitation aute enim. Non culpa qui consequat sit incididunt do mollit exercitation.'
					style={{
						gridArea: 'text4',
						color: 'white',
						height: '200px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				/>
				<Image
					image={AboutImg2}
					imageDescription='about image2'
					style={{
						gridArea: 'image2',
					}}
				/>
			</div>
			<div className={classes.infoContainer}>
				<div className={classes.infoHeader}>
					<Header
						headerText='01'
						style={{
							fontSize: '6rem',
							// marginLeft: '0'
						}}
					/>
				</div>
				<div className={classes.infoDescription}>
					<Description
						text='Title'
						style={{
							color: 'white',
							fontSize: '160%',
						}}
					/>
					<Description
						text='Sit officia velit veniam ex eiusmod ullamco velit. Consequat duis exercitation reprehenderit nisi anim elit duis nulla consectetur deserunt labore. Exercitation qui id non enim amet Lorem ad id. Consectetur irure est id quis ex tempor sunt proident deserunt velit consectetur sit. Eiusmod ullamco do ullamco consequat aliqua nisi magna nisi officia. Consectetur officia ut mollit commodo aliqua magna ut non adipisicing magna.'
						style={{
							color: 'white',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
