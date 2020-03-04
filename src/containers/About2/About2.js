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
						descriptionText='In veniam ad irure laboris tempor voluptate tempor enim tempor. Aliquip velit ipsum sunt eu ut tempor ex deserunt sint. Mollit do ipsum dolor est minim consectetur qui proident. Ea aliqua nulla quis incididunt irure. Culpa mollit aliqua ullamco reprehenderit enim quis ad mollit do est mollit dolor.'
					/>
				</div>
				<div className={classes.about2Content}>
					<Header headerText='02' />
					<Image />
					<SubHeader
						subheaderText='Name'
						descriptionText='Eiusmod ut magna ipsum labore consequat esse non occaecat mollit. Veniam incididunt et pariatur non pariatur eu consequat aliquip sint. Laboris esse ullamco do esse. Ullamco cupidatat est amet officia quis quis ex.'
					/>
				</div>
				<div className={classes.about2Content}>
					<Header headerText='03' />
					<Image />
					<SubHeader
						subheaderText='Name'
						descriptionText='Do ex et excepteur aute ipsum ad sit magna amet. Cupidatat ad eu et et nulla ea minim enim. Non ex eiusmod minim ipsum ea.'
					/>
				</div>
			</div>
		);
	}
}

export default About2;
