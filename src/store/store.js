import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware))
);

export default store;
