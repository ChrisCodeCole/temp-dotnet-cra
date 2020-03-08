import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../containers/Home/Home';
import Landing from '../containers/Landing/Landing';
import Login from '../containers/Login/Login';
import Connections from '../containers/Connections/Connections';

const Team = React.lazy(() => {
	return import('../containers/Team/Team');
});

const Contact = React.lazy(() => {
	return import('../containers/Contact/Contact');
});

const Profile = React.lazy(() => {
	return import('../containers/Profile/Profile');
});

const routes = () => (
	<Switch>
		<Route path='/login' component={Login} />
		<Route path='/home' component={Home} />
		<Route exact path='/team' component={Team} />
		<Route exact path='/contact' component={Contact} />
		{/* TODO - BY ID */}
		<Route exact path='/profile' component={Profile} />
		<Route exact path='/' component={Landing} />
		<Route exact path='/connections' component={Connections} />
		{/* Since we do not have a 404 page right now - this solution works */}
		<Redirect to='/' />
	</Switch>
);

export default routes;
