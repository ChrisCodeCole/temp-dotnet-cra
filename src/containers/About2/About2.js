import React, { Component } from 'react';

import Navbar from '../../components/Navbar/NavBar';
import Header from '../../components/Header/Header';
import Image from '../../components/Image/Image';
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
						style={{
							gridArea: 'headerImage',
							padding: '0 5px 0 0',
						}}
					>
						<Header
							headerText='01'
							style={{
								gridArea: 'header',

								// fontFamily: 'Eczar',
								// fontSize: '60px',
								// lineHeight: '105px',
								// magin: '0',
								// color: 'white',
								// border: '1px solid #1E252C'
							}}
						/>
						<Image style={{ gridArea: 'image' }} />
					</div>
					<div
						className={classes.textInfo}
						style={{
							gridArea: 'textInfo',
						}}
					>
						<Description
							text='Name'
							style={{
								gridArea: 'name',
								fontSize: '2rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
						<Description
							text='Ea irure laboris sint exercitation cillum. Aute labore minim labore dolore incididunt. Velit mollit veniam adipisicing aliqua. Exercitation adipisicing esse id incididunt ad aliquip et ullamco deserunt. Voluptate enim nisi esse esse veniam fugiat occaecat ex in quis id aliquip. Ut esse irure id proident proident laboris pariatur anim nisi voluptate culpa pariatur commodo aute.'
							style={{
								gridArea: 'text',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
					</div>
				</div>

				<div className={classes.about2ContentR}>
					<div
						className={classes.headerImageR}
						style={{
							gridArea: 'headerImage',
							padding: '0 0 0 5px',
						}}
					>
						<Header
							headerText='02'
							style={{
								gridArea: 'header',

								// fontFamily: 'Eczar',
								// fontSize: '60px',
								// lineHeight: '105px',
								// magin: '0',
								// color: 'white',
								// border: '1px solid #1E252C'
							}}
						/>
						<Image style={{ gridArea: 'image' }} />
					</div>
					<div
						className={classes.textInfoR}
						style={{
							gridArea: 'textInfo',
						}}
					>
						<Description
							text='Name'
							style={{
								gridArea: 'name',
								fontSize: '2rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
						<Description
							text='Ea irure laboris sint exercitation cillum. Aute labore minim labore dolore incididunt. Velit mollit veniam adipisicing aliqua. Exercitation adipisicing esse id incididunt ad aliquip et ullamco deserunt. Voluptate enim nisi esse esse veniam fugiat occaecat ex in quis id aliquip. Ut esse irure id proident proident laboris pariatur anim nisi voluptate culpa pariatur commodo aute.'
							style={{
								gridArea: 'text',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
					</div>
				</div>

				<div className={classes.about2Content}>
					<div
						className={classes.headerImage}
						style={{
							gridArea: 'headerImage',
							padding: '0 5px 0 0',
						}}
					>
						<Header
							headerText='03'
							style={{
								gridArea: 'header',

								// fontFamily: 'Eczar',
								// fontSize: '60px',
								// lineHeight: '105px',
								// magin: '0',
								// color: 'white',
								// border: '1px solid #1E252C'
							}}
						/>
						<Image style={{ gridArea: 'image' }} />
					</div>
					<div
						className={classes.textInfo}
						style={{
							gridArea: 'textInfo',
						}}
					>
						<Description
							text='Name'
							style={{
								gridArea: 'name',
								fontSize: '2rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
						<Description
							text='Ea irure laboris sint exercitation cillum. Aute labore minim labore dolore incididunt. Velit mollit veniam adipisicing aliqua. Exercitation adipisicing esse id incididunt ad aliquip et ullamco deserunt. Voluptate enim nisi esse esse veniam fugiat occaecat ex in quis id aliquip. Ut esse irure id proident proident laboris pariatur anim nisi voluptate culpa pariatur commodo aute.'
							style={{
								gridArea: 'text',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default About2;
