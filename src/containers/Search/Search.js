import React, { Component } from 'react';
import classes from './Search.module.css';
// import SubHeader from '../../components/SubHeader/SubHeader';  //use SubHeader or Description
import Description from '../../components/Description/Description';
import Image from '../../components/Image/Image';
import Button from '../../components/UI/button/Buttons';
import Footer from '../../components/Footer/Footer';

import Img from '../../assets/images/b_1.png';
import Img2 from '../../assets/images/c_1.png';
import Img3 from '../../assets/images/a1.png';

class Search extends Component {
	render() {
		let descriptionText = 'Find people 5, 10 or 1 miles from you';
		return (
			<div className={classes.searchContainer}>
				<div className={classes.searchHeader}>
					{/* <SubHeader /> */}
					<Description
						text={descriptionText}
						style={{
							fontSize: '120%',
						}}
					/>
				</div>
				<div className={classes.searchBody}>
					<div className={classes.searchContent}>
						<Image image={Img} />
						<Button
							buttonText='5 miles'
							style={{
								marginTop: '10%',
							}}
							to='#'
						/>
					</div>
					<div className={classes.searchContent}>
						<Image image={Img2} />
						<Button
							buttonText='10 miles'
							style={{
								marginTop: '10%',
							}}
							to='#'
						/>
					</div>
					<div className={classes.searchContent}>
						<Image image={Img3} />
						<Button
							buttonText='15 miles'
							style={{
								marginTop: '10%',
							}}
							to='#'
						/>
					</div>
				</div>
				<div className={classes.searchFooter}>
					<Footer />
				</div>
			</div>
		);
	}
}

export default Search;
