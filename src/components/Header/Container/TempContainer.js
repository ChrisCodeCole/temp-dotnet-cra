import React from 'react';
import { connect } from 'react-redux';
import Temp from '../Temp';
import { triggerAlert } from '../../../store/actions';

const TempContainer = props => {
	return <Temp {...props} />;
};

const mapStateToProps = state => {
	return {
		isAlertTriggered: state.isAlertTriggered,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		triggerAlert: isAlertTriggered =>
			dispatch(triggerAlert(isAlertTriggered)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TempContainer);
