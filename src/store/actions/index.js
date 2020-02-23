import * as types from '../types';

export const triggerAlert = isAlertTriggered => {
	console.log('action dispatched');
	return {
		type: types.TRIGGER_ALERT,
		isAlertTriggered,
	};
};
