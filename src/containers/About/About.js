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
				<div
					className={classes.headerImage}
					style={{ gridArea: 'headerImage' }}
				>
					<Header headerText='About' style={{ gridArea: 'header' }} />
					<Image
						image={AboutImg1}
						imageDescription='about image1'
						style={{
							gridArea: 'image',
							width: '400px',
						}}
					/>
				</div>
				<div
					className={classes.textInfo}
					style={{ gridArea: 'textInfo' }}
				>
					<Description
						text='Name'
						style={{
							gridArea: 'name',
							color: 'white',
						}}
					/>
					<Description
						text='Non dolore ad fugiat esse laboris. Proident nostrud exercitation aute enim. Non culpa qui consequat sit incididunt do mollit exercitation.'
						style={{
							gridArea: 'text',
							color: 'white',
						}}
					/>
				</div>
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
