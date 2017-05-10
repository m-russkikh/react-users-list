import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReduxModal from 'react-redux-modal';
import store from './store';
import router from './router';
require('es6-promise').polyfill();

render(
	<Provider store={store}>
		<div>
			{router}
			<ReduxModal />
		</div>
	</Provider>,
	document.getElementById('root')
);