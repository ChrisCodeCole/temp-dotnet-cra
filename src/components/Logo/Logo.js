import React from 'react';
import logo from '../../assets/logo/GainzLogoFinal.png';

//TODO: either use multiple image sizes or convert to SVG format
//This component currently accepts image attributes
export default function Logo(props) {
	return (
		<img className={props.className} src={logo} alt={'Logo'} {...props} />
	);
}
