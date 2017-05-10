import React, {Component} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import UserListContainer from './components/containers/user-list-container';

export default  (
	<HashRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/users" component={UserListContainer} />
		</Switch>
	</HashRouter>
);