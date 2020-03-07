import React from 'react';
import classes from './About1.module.css';
import NavBar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import Description from '../../components/Description/Description';

const About1 = () => {
	return (
		<div className={classes.About1Container}>
			<NavBar />
			<div className={classes.About1Content}>
				<Header />
				<Image />
				<Description />
				<Description />
			</div>
			{/* <div className={classses.About1Content}>
                <Description />
                <Description />
                <Image />
            </div>
            <div className={classes.About1Content}>
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
