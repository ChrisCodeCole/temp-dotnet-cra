import * as types from '../types';

const initialState = {
	isAlertTriggered: true,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.TRIGGER_ALERT:
			console.log('reducer update');
			console.log(action.isAlertTriggered);
			console.log(state);
			console.log({
				...state,
				isAlertTriggered: action.isAlertTriggered,
			});
			return {
				...state,
				isAlertTriggered: action.isAlertTriggered,
			};
		default:
			console.log('ran default');
			return state;
	}
};
