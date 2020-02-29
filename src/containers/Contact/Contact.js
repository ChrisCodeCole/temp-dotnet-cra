import React from 'react';
import Header from '../../components/Header/Header';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
// import Description from './';
// import Paragraph from './';
import Email from '../../components/Email/Email';
import classes from './Contact.module.css';

const Contact = () => {
	// let writeUsText = 'Write Us';
	// let followUsText = 'Follow Us';
	let headerText = 'Contact Us';

	return (
		<div className={classes.Contact}>
			<div className={classes.Header}>
				<Header children={headerText} />
			</div>
			<div>{/* <Paragraph /> */}</div>
			<div>{/* <Description children={writeUsText}/> */}</div>
			<div>
				<Email />
			</div>
			<div>{/* <Description children={followUsText} /> */}</div>
			<div className={classes.SocialIcons}>
				<SocialIcons />
			</div>
		</div>
	);
};

export default Contact;
