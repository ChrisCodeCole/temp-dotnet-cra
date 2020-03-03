import React, { Component } from 'react';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import SubHeader from '../../components/SubHeader/SubHeader';
import classes from './About2.module.css';

class About2 extends Component {
	render() {
		return (
			<div className={classes.about2Container}>
				<Navbar />
				<div className={classes.about2Content}>
					<Header headerText='01' />
					<Image />
					<SubHeader
						subheaderText='Name'
						descriptionText='Quis ex dolor duis esse laboris.'
					/>
				</div>
				<div className={classes.about2Content}>
					<Header headerText='02' />
					<Image />
					<SubHeader
						subheaderText='Name'
						descriptionText='Quis ex dolor duis esse laboris.'
					/>
				</div>
				<div className={classes.about2Content}>
					<Header headerText='03' />
					<Image />
					<SubHeader
						subheaderText='Name'
						descriptionText='Quis ex dolor duis esse laboris.'
					/>
				</div>
			</div>
		);
	}
}

export default About2;
