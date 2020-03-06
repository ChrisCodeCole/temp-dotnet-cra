import React, { Component } from 'react';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
import SubHeader from '../../components/SubHeader/SubHeader';
import Description from '../../components/Description/Description';
import classes from './About2.module.css';

class About2 extends Component {
	render() {
		return (
			<div className={classes.about2Container}>
				<Navbar />
				<div className={classes.about2Content}>
					<div
						className={classes.headerImage}
						style={{ gridArea: 'headerImage' }}
					>
						<Header
							headerText='01'
							style={{
								gridArea: 'header',
							}}
							// style={{
							//     display: 'flex',
							//     justifyContent: 'flex-start'
							// }}
						/>
						<Image style={{ gridArea: 'image' }} />
					</div>
					<div
						className={classes.textInfo}
						style={{ gridArea: 'textInfo' }}
					>
						<Description text='Name' style={{ gridArea: 'name' }} />
						<Description
							text='Ea irure laboris sint exercitation cillum. Aute labore minim labore dolore incididunt. Velit mollit veniam adipisicing aliqua. Exercitation adipisicing esse id incididunt ad aliquip et ullamco deserunt. Voluptate enim nisi esse esse veniam fugiat occaecat ex in quis id aliquip. Ut esse irure id proident proident laboris pariatur anim nisi voluptate culpa pariatur commodo aute.'
							style={{ gridArea: 'text' }}
						/>
					</div>
				</div>

				{/* <div className={classes.about2Content}>
					<Header headerText='02' />
					<Image />
					<SubHeader
						subheaderText='Name'
						descriptionText='Eiusmod ut magna ipsum labore consequat esse non occaecat mollit. Veniam incididunt et pariatur non pariatur eu consequat aliquip sint. Laboris esse ullamco do esse. Ullamco cupidatat est amet officia quis quis ex.'
					/>
                </div> */}

				{/* <div className={classes.about2Content}>
                    <div className={classes.headerImage}>
					    <Header headerText='01' style={{}}/>
					    <Image />
                    </div>
                    <div className={classes.subHeader}>
					    <SubHeader
                            subheaderText='Name'
                            descriptionText='In veniam ad irure laboris tempor voluptate tempor enim tempor. Aliquip velit ipsum sunt eu ut tempor ex deserunt sint. Mollit do ipsum dolor est minim consectetur qui proident. Ea aliqua nulla quis incididunt irure. Culpa mollit aliqua ullamco reprehenderit enim quis ad mollit do est mollit dolor.'
                            style={{
                                display: 'flex', 
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%'
                            }}
                        />
                    </div>
				</div> */}
			</div>
		);
	}
}

export default About2;
