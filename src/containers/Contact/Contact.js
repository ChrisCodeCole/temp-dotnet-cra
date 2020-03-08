import React from 'react';
import Header from '../../components/Header/Header';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import Description from '../../components/Description/Description';
import Email from '../../components/Email/Email';
import classes from './Contact.module.css';

const Contact = () => {
	let contactUsInstructions = 'Have a question? Write to us!';
	let writeUsText = 'Write Us';
	let followUsText = 'Follow Us';
	let headerText = 'Contact Us';

	return (
		<div className={classes.Container}>
			<div className={classes.HeaderContainer}>
				<Header headerText={headerText} />
			</div>
			<div className={classes.ContactUsInstructionsContainer}>
				<Description text={contactUsInstructions} />
			</div>
			<div className={classes.WriteUsTextContainer}>
				<Description text={writeUsText} />
			</div>
			<div className={classes.EmailContainer}>
				<Email />
			</div>
			<div className={classes.FollowUsTextContainer}>
				<Description text={followUsText} />
			</div>
			<div className={classes.SocialIconsContainer}>
				<SocialIcons />
			</div>
		</div>
	);
};

export default Contact;
