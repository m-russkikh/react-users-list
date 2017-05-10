import { combineReducers } from 'redux';

import userReducer from './users';
import groupReducer from './groups'
import {reducer as modalReducer} from 'react-redux-modal';

var reducers = combineReducers({
	users: userReducer,
	groups: groupReducer,
	modals: modalReducer
});

export default reducers;
