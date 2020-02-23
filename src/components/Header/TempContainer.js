import React, { Component } from 'react';
import Header from './Header';
import NavBar from '../Navbar/NavBar';
import SubHeader from '../SubHeader/SubHeader';

export default class TempContainer extends Component {
	render() {
		return (
			<div
				style={{
					backgroundColor: 'black',
					height: '100vh',
					width: '100vw',
					position: 'absolute',
					top: 0,
					left: 0,
				}}
			>
				<NavBar />
				<Header />
				<SubHeader />
			</div>
		);
	}
}
