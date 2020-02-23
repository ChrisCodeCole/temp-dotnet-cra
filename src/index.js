import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store from './store/store';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename={baseUrl}>
			<App />
		</BrowserRouter>
	</Provider>,
	rootElement
);

registerServiceWorker();
