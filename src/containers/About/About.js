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
			{/* <div className={classses.about1Content}>
                <Description />
                <Description />
                <Image />
            </div>
            <div className={classes.about1Content}>
                <div>
                    <Header />
                    <Description />
                    <Description />
                </div>
                <div>
                    <Header />
                    <Description />
                    <Description />
                </div>
                <div>
                    <Header />
                    <Description />
                    <Description />
                </div>
            </div> */}
		</div>
	);
};

export default About;
