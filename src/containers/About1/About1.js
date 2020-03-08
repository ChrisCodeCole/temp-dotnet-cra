import React from 'react';
import classes from './About1.module.css';
import NavBar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import Description from '../../components/Description/Description';

const About1 = () => {
	return (
		<div className={classes.about1Container}>
			<NavBar />
			<div className={classes.about1Content}>
				<div
					className='headerImage'
					style={{ gridArea: 'headerImage' }}
				>
					<Header headerText='About' style={{ gridArea: 'header' }} />
					<Image style={{ gridArea: 'image' }} />
				</div>
				<div className='textInfo' style={{ gridArea: 'textInfo' }}>
					<Description style={{ gridArea: 'name' }} />
					<Description style={{ gridArea: 'text' }} />
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

export default About1;
