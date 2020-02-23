import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './containers/Home/Home';
import Landing from './containers/Landing/Landing';
import Login from './containers/Login/Login';

import Helen from './components/Helen';

const App = () => {
	// const displayName = App.name

	return (
		<Switch>
			<Route exact path='/' component={Landing} />
			<Route path='/login' component={Login} />
			<Route path='/home' component={Home} />
			<Route path='/helen' component={Helen} />
		</Switch>
	);
};

export default App;
