import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import TempContainer from './components/Header/TempContainer';

import './custom.css';

const App = () => {
	// const displayName = App.name

	return (
		<Layout>
			<Route exact path='/' component={Home} />
			<Route path='/counter' component={Counter} />
			<Route path='/fetch-data' component={FetchData} />
			<Route path='/chris' component={TempContainer} />
		</Layout>
	);
};

export default App;
