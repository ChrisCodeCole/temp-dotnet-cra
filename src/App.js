import React, { Fragment, Suspense } from 'react';
import Routes from './routes/routes';

const App = () => {
	// const displayName = App.name

	return (
		<Fragment>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes />
			</Suspense>
		</Fragment>
	);
};

export default App;
