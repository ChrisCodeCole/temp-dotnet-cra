import React, { Component } from 'react';
import Header from './Header';
import NavBar from '../Navbar/NavBar';
import SubHeader from '../SubHeader/SubHeader';

export default class Temp extends Component {
	componentDidMount() {
		console.log('hello');
		console.log(this.props.isAlertTriggered);
		this.props.triggerAlert(false);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.isAlertTriggered !== this.props.isAlertTriggered) {
			console.log('isAlertTriggered', this.props.isAlertTriggered);
		}
	}

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
